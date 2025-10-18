// DOM Elements
const form = document.getElementById("form");
const title = document.getElementById("title");
const amount = document.getElementById("amount");
const select = document.getElementById("select");
const category = document.getElementById("category");
const date = document.getElementById("date");
const submitBtn = document.getElementById("submitBtn");
const arrowBack = document.getElementById("back");
const selectBtn = document.getElementById("selectBtn");
const deleteBtn = document.getElementById("delete");
const transactionsContainer = document.querySelector(".transactions-container");

let checkboxesVisible = false;

// --- Helper Functions ---
function getFormData() {
  return {
    id: Date.now(), // unique ID
    title: title.value.trim(),
    amount: parseFloat(amount.value),
    type: select.value.trim(),
    category: category.value.trim(),
    date: date.value.trim(),
  };
}

function validateForm(data) {
  const errors = [];
  if (!data.title) errors.push({ field: title, message: "Enter the Title" });
  if (!data.amount && data.amount !== 0)
    errors.push({ field: amount, message: "Enter the Amount" });
  else if (data.amount < 0)
    errors.push({ field: amount, message: "Amount must be positive" });
  if (!data.type)
    errors.push({ field: select, message: "Select type of transaction" });
  if (!data.category)
    errors.push({ field: category, message: "Enter the category" });
  if (!data.date) errors.push({ field: date, message: "Select the date" });
  return errors;
}

function saveTransaction(tx) {
  let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
  transactions.push(tx);
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

function loadTransactions() {
  return JSON.parse(localStorage.getItem("transactions")) || [];
}

function deleteTransaction(id) {
  let transactions = loadTransactions();
  transactions = transactions.filter((tx) => tx.id !== id);
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

// --- Rendering ---
function renderTransaction(tx) {
  const div = document.createElement("div");
  div.classList.add("transaction");
  div.dataset.id = tx.id;

  div.innerHTML = `
    <input type="checkbox" class="checkbox" data-id="${tx.id}" style="display:none; width: 20px;">
    <span>${tx.title}</span>
    <span>${tx.amount}</span>
    <span>${tx.type}</span>
    <span>${tx.category}</span>
    <span>${tx.date}</span>
  `;

  transactionsContainer.appendChild(div);
}

function loadStoredData() {
  const transactions = loadTransactions();
  transactionsContainer
    .querySelectorAll(".transaction")
    .forEach((t) => t.remove());
  transactions.forEach((tx) => renderTransaction(tx));
}

let pieChart = null;

function updateChart() {
  if (pieChart) {
    pieChart.destroy(); // clear previous chart
  }

  const ctx = document.getElementById("pie-chart");
  let incomeCount = 0;
  let expenseCount = 0;
  const allTransaction = loadTransactions();

  allTransaction.forEach((ele) => {
    if (ele.type === "Income") {
      incomeCount += 1;
    }
    if (ele.type === "Expense") {
      expenseCount += 1;
    }
  });
  pieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Income", "Expense"],
      datasets: [
        {
          label: "Count",
          data: [incomeCount, expenseCount],
          borderWidth: 0,
          hoverOffset: 10
        },
      ],
    },
    options: {
      plugins:{
        legend:{
          labels:{
            fullSize: true,
            color: "white",
            font:{
              size: 14,
            },
            padding:10,
          }
        },
      },
      layout:{
          padding:{
            bottom:20,
          },
        },
      responsive: true,
      maintainAspectRatio: false,
    },
  });
}

// --- Event Listeners ---
arrowBack.addEventListener("click", () => (window.location.href = "home.html"));

selectBtn.addEventListener("click", () => {
  const checkboxes = document.querySelectorAll(".transaction .checkbox");
  checkboxes.forEach(
    (cb) => (cb.style.display = checkboxesVisible ? "none" : "inline-block")
  );
  checkboxesVisible = !checkboxesVisible;
});

deleteBtn.addEventListener("click", () => {
  const checkboxes = document.querySelectorAll(
    ".transaction .checkbox:checked"
  );
  checkboxes.forEach((cb) => {
    const id = Number(cb.dataset.id);
    deleteTransaction(id);
    cb.parentElement.remove();
  });
  updateChart();
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelectorAll(".error").forEach((el) => el.remove());

  const transaction = getFormData();
  const errors = validateForm(transaction);

  if (errors.length > 0) {
    errors.forEach((err) => {
      const msg = document.createElement("p");
      msg.classList.add("error");
      msg.textContent = err.message;
      err.field.insertAdjacentElement("afterend", msg);
    });
    return;
  }

  saveTransaction(transaction);
  renderTransaction(transaction);
  form.reset();
  updateChart();
});

// Load transactions on page load
loadStoredData();
updateChart();
