const body = document.body;

const form = document.createElement("form");
body.appendChild(form);


const h1 = document.createElement("h1");
body.appendChild(h1);

h1.textContent = "My To-Do List";
h1.className = "title";

const input = document.createElement("input");
form.appendChild(input);
input.placeholder = "TASKS HERE";

const addBtn = document.createElement("button");
form.appendChild(addBtn);
addBtn.textContent = "ADD TASKS";

const ol = document.createElement("ol");
ol.className = 'task-list'
body.appendChild(ol);




addBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const text = input.value.trim()
  if (text === "") {
    oidh2.textContent = "Please Enter a Task";
  } else {
    const li = document.createElement("li");
    oidh2.textContent = "";
    ol.appendChild(li);
    li.textContent = input.value;
    li.className = "li";
    input.value = "";
    input.focus()
  }
});

ol.addEventListener("click", (event) => {
  const li = event.target.closest("li");
  if (!li) return;     
  li.remove();
});

const otherInfoDiv = document.createElement("div");
body.appendChild(otherInfoDiv);
otherInfoDiv.className = "info";
const oidh2 = document.createElement("h2");
oidh2.className = "error"
otherInfoDiv.appendChild(oidh2);