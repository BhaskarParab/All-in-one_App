const content = document.getElementById("content");
const tasks = document.getElementById("tasks");
const doing = document.getElementById("doingContent");
const done = document.getElementById("doneContent");
const selectBtn = document.getElementById("selectBtn");
const deleteBtn = document.getElementById('deleteBtn');
const DoingColumn = document.getElementById('doing');
const DoneColumn = document.getElementById('done');
const TaskColumn = document.getElementById('ToDo');
const backArrow = document.getElementById('back')

function renderTasks(displayChkBox = false) {
  renderSection(tasks, "tasks", displayChkBox);
}

function renderDoing(displayChkBox = false) {
  renderSection(doing, "doing", displayChkBox);
}

function renderDone(displayChkBox = false) {
  renderSection(done, "done", displayChkBox);
}

let selectMode = false;

function renderSection(container, key, displayChkBox) {
  container.innerHTML = "";
  const storage = JSON.parse(localStorage.getItem(key)) || [];
  storage.forEach(task => {
    const div = document.createElement("div");
    Object.assign(div.style, {
      display: "flex",
      alignItems: "center",
      justifyContent: "left",
      gap: "10px"
    });

    if (displayChkBox) {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.style.transform = "scale(1.8)";
      checkbox.style.cursor = "pointer";
      div.appendChild(checkbox);
    }

    const h1 = document.createElement("h1");
    h1.textContent = task;
    Object.assign(h1.style, {
      fontWeight: "lighter",
      cursor: "pointer"
    });
    div.appendChild(h1);

    container.appendChild(div);
    attachEditListener(h1, div, task, key);
    Drag(h1);
  });
}

let selectChk = false;

// Add Task
function addTask(task) {
  let storage = JSON.parse(localStorage.getItem("tasks")) || [];
  storage.push(task);
  localStorage.setItem("tasks", JSON.stringify(storage));
  renderTasks(selectMode);
}

// Delete Task
function deleteTask() {
  const sections = [
    { key: "tasks", container: tasks },
    { key: "doing", container: doing },
    { key: "done", container: done },
  ];

  sections.forEach(({ key, container }) => {
    let storage = JSON.parse(localStorage.getItem(key)) || [];
    const checkboxes = container.querySelectorAll('input[type="checkbox"]');
    const toDelete = [];
    checkboxes.forEach((cb, i) => {
      if (cb.checked) toDelete.push(storage[i]);
    });
    storage = storage.filter(task => !toDelete.includes(task));
    localStorage.setItem(key, JSON.stringify(storage));
  });

  renderTasks();
  renderDoing();
  renderDone();
  selectChk = false;
}

// Edit Logic (works for all columns now)
function attachEditListener(h1, parentDiv, oldText, columnKey) {
  h1.addEventListener('dblclick', () => {
    const input = document.createElement('input');
    input.type = 'text';
    input.value = oldText;
    Object.assign(input.style, {
      fontWeight: 'lighter',
      maxWidth: '100%',
      backgroundColor: '#333',
      color: 'rgba(255, 255, 255, 0.616)',
      fontSize: 'xx-large',
      padding: '4px',
      border: 'none'
    });

    parentDiv.replaceChild(input, h1);
    input.focus();

    function save() {
      const newText = input.value.trim();
      if (!newText) return;

      let storage = JSON.parse(localStorage.getItem(columnKey)) || [];
      const index = storage.indexOf(oldText);
      if (index > -1) storage[index] = newText;
      localStorage.setItem(columnKey, JSON.stringify(storage));

      const newH1 = document.createElement("h1");
      newH1.textContent = newText;
      Object.assign(newH1.style, {
        fontWeight: "lighter",
        cursor: "pointer"
      });
      parentDiv.replaceChild(newH1, input);
      attachEditListener(newH1, parentDiv, newText, columnKey);
    }

    input.addEventListener('blur', save);
    input.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') save();
    });
  });
  Drag(h1)
}

// Drag Logic (unique IDs)
function Drag(h1) {
  h1.id = "task-" + Math.random().toString(36).substring(2, 9);
  h1.setAttribute('draggable', true);
  h1.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
    setTimeout(() => (e.target.style.visibility = 'hidden'), 0);
  });
  h1.addEventListener('dragend', (e) => {
    e.target.style.visibility = 'visible';
  });
}

// Drop Logic (clean & consistent)
function Drop() {
  [DoingColumn, DoneColumn, TaskColumn].forEach(col => {
    if (!col) return;
    col.addEventListener('dragover', e => e.preventDefault());
  });

  DoingColumn.addEventListener('drop', e => handleDrop(e, "doing"));
  DoneColumn.addEventListener('drop', e => handleDrop(e, "done"));
  TaskColumn.addEventListener('drop', e => handleDrop(e, "tasks"));
}

function handleDrop(e, targetKey) {
  const id = e.dataTransfer.getData("text/plain");
  const item = document.getElementById(id);
  if (!item) return;
  const taskText = item.textContent.trim();

  // Add to new section
  let storage = JSON.parse(localStorage.getItem(targetKey)) || [];
  if (!storage.includes(taskText)) storage.push(taskText);
  localStorage.setItem(targetKey, JSON.stringify(storage));

  // Remove from others
  ["tasks", "doing", "done"].forEach(k => {
    if (k !== targetKey) {
      let s = JSON.parse(localStorage.getItem(k)) || [];
      s = s.filter(t => t !== taskText);
      localStorage.setItem(k, JSON.stringify(s));
    }
  });

  // Re-render UI
  renderTasks(selectChk);
  renderDoing(selectChk);
  renderDone(selectChk);
}

// Event Bindings
deleteBtn?.addEventListener('click', deleteTask);
content?.addEventListener("keyup", (event) => {
  if (event.key === "Enter" && content.value.trim()) {
    addTask(content.value.trim());
    content.value = "";
  }
});
selectBtn?.addEventListener("click", () => {
  selectMode = !selectMode;
  renderTasks(selectMode);
  renderDoing(selectMode);
  renderDone(selectMode);
});

//Back Arrow event listner
backArrow.addEventListener('click', () => {
  window.location.href="home.html"
})

// Initial Load
renderTasks();
renderDoing();
renderDone();
Drop();
