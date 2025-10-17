const form = document.getElementById("form");
const title = document.getElementById("title");
const amount = document.getElementById("amount");
const select = document.getElementById("select");
const category = document.getElementById("category");
const date = document.getElementById("date");
const submitBtn = document.getElementById("submitBtn");

// Cache column elements
const columns = {
  title: document.querySelector('.column1'),
  amount: document.querySelector('.column2'),
  select: document.querySelector('.column3'),
  category: document.querySelector('.column4'),
  date: document.querySelector('.column5')
};

// Helper function

function getFormData() {
  return {
    title: title.value.trim(),
    amount: amount.value.trim(),
    select: select.value.trim(),
    category: category.value.trim(),
    date: date.value.trim()
  };
}

function validateForm(data) {
  const errors = [];

  if (!data.title) errors.push({ field: title, message: "Enter the Title" });
  if (!data.amount) errors.push({ field: amount, message: "Enter the Amount" });
  else if (data.amount < 0) errors.push({ field: amount, message: "Amount must be positive" });
  if (!data.select) errors.push({ field: select, message: "Select any type of transaction" });
  if (!data.category) errors.push({ field: category, message: "Enter the category" });
  if (!data.date) errors.push({ field: date, message: "Select the date" });

  return errors;
}

function storeData(data) {
  const key = `transaction_${Date.now()}`;
  localStorage.setItem(key, JSON.stringify(data));
}

function renderData(data) {
  Object.keys(columns).forEach(key => {
    const p = document.createElement('p');
    p.textContent = data[key];
    columns[key].appendChild(p);
  });
}

function loadStoredData() {
  Object.keys(columns).forEach(key => {
    let headingText = key.charAt(0).toUpperCase() + key.slice(1);

    if (key.toLowerCase() === "select") {
      headingText = "Type";
    }

    columns[key].innerHTML = `<h1>${headingText}</h1>`;
  });

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("transaction_")) {
      const data = JSON.parse(localStorage.getItem(key));
      renderData(data);
    }
  }
}


// Event Listeners

submitBtn.addEventListener("click", e => {
  e.preventDefault();

  document.querySelectorAll('.error').forEach(el => el.remove());
  const data = getFormData();
  const errors = validateForm(data);

  if (errors.length > 0) {
    errors.forEach(err => {
      const msg = document.createElement('p');
      msg.classList.add('error');
      msg.textContent = err.message;
      err.field.insertAdjacentElement('afterend', msg);
    });
    return;
  }

  storeData(data);
  renderData(data);
  form.reset();
});

loadStoredData();
