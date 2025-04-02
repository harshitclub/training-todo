const todoForm = document.getElementById("todoForm");
const todoList = document.getElementById("todoList");
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const { todoInput } = todoForm.elements;

  todoList.innerHTML += `<li>${todoInput.value}</li>`;
});
