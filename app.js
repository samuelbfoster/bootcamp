const input = document.querySelector("#ToDo");
const form = document.querySelector("#add-todo");
const toDoList = document.querySelector("#todo-list");

toDoList.innerHTML = localStorage.getItem("todos");

toDoList.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
  }
  localStorage.setItem("todos", toDoList.innerHTML);
});

toDoList.addEventListener("change", function (e) {
  if (
    e.target.tagName === "INPUT" &&
    e.target.getAttribute("type") === "checkbox"
  ) {
    const item = e.target.parentElement;
    if (e.target.checked) {
      item.style.textDecoration = "line-through";
    } else {
      item.style.textDecoration = "none";
    }
    localStorage.setItem("todos", toDoList.innerHTML);
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newTodo = document.createElement("li");
  const removeTodo = document.createElement("button");
  const crossOut = document.createElement("input");
  crossOut.setAttribute("type", "checkbox");
  removeTodo.innerText = "remove";
  newTodo.innerText = input.value;
  newTodo.appendChild(crossOut);
  newTodo.appendChild(removeTodo);
  toDoList.appendChild(newTodo);
  input.value = "";
  localStorage.setItem("todos", toDoList.innerHTML);
});
