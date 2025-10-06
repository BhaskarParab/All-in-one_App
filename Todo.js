const content = document.getElementById("content");
const tasks = document.getElementById("tasks");
const selectBtn = document.getElementById("selectBtn");

function renderTasks(displayChkBox = false) {
  tasks.innerHTML = "";
  let storage = JSON.parse(localStorage.getItem("tasks")) || [];
  storage.forEach((task) => {
    const tasksDiv = document.createElement("div");
    tasksDiv.style.display = "flex";
    tasksDiv.style.alignItems = "center";
    tasksDiv.style.justifyContent = "left";
    tasksDiv.style.gap = "10px";
    if (displayChkBox) {
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.style.transform = "scale(1.8)";
  checkbox.style.cursor = "pointer";
      checkbox.style.pointerEvents = 'auto';
      tasksDiv.appendChild(checkbox);
    }
    const h1 = document.createElement("h1");
    h1.textContent = task;
    h1.style.fontWeight = "lighter";
    h1.style.pointerEvents = 'none';
    tasksDiv.appendChild(h1);
    tasks.appendChild(tasksDiv);
  });
}

let selectChk = false;

function addTask(task) {
  const h1 = document.createElement("h1");
  h1.style.fontWeight = "lighter";
  h1.style.pointerEvents = 'none';
  h1.textContent = task;
  let storage = JSON.parse(localStorage.getItem("tasks")) || [];
  storage.push(task);
  localStorage.setItem("tasks", JSON.stringify(storage));
  const tasksDiv = document.createElement("div");
  tasksDiv.style.display = "flex";
  tasksDiv.style.alignItems = "center";
  tasksDiv.style.justifyContent = "left";
  tasksDiv.style.gap = "10px";
  if (selectChk) {
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.transform = "scale(1.8)";
  checkbox.style.cursor = "pointer";
    checkbox.style.pointerEvents = 'auto';
    tasksDiv.appendChild(checkbox);
  }
  tasksDiv.appendChild(h1);
  tasks.appendChild(tasksDiv);
}

function deleteTask() {
    // if()
}

content.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addTask(content.value);
    content.value = "";
  }
});

selectBtn.addEventListener("click", () => {
  renderTasks(true);
  selectChk = true;
});

renderTasks();
