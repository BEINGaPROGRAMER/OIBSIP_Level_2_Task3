const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

let todos = [];

function renderTodos() {
  todoList.innerHTML = '';
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    const li = document.createElement('li');
    const todoText = document.createElement('span');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    const saveBtn = document.createElement('button');
    const editInput = document.createElement('input');

    todoText.textContent = todo;
    todoText.classList.add('todo-text');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    saveBtn.textContent = 'Save';
    saveBtn.classList.add('save-btn');
    editInput.classList.add('edit-input');
    editInput.style.display = 'none';
    editInput.value = todo;

    editBtn.addEventListener('click', () => {
      todoText.style.display = 'none';
      editInput.style.display = 'block';
      editInput.focus();
    });

    deleteBtn.addEventListener('click', () => {
      todos.splice(i, 1);
      renderTodos();
    });

    saveBtn.addEventListener('click', () => {
      const newTodo = editInput.value.trim();
      if (newTodo.length > 0) {
        todos[i] = newTodo;
        renderTodos();
      }
    });

    editInput.addEventListener('keyup', event => {
      if (event.key === 'Enter') {
        saveBtn.click();
      }
    });

    li.appendChild(todoText);
    li.appendChild(editInput);
    li.appendChild(editBtn);
    li.appendChild(saveBtn);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  }
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const todo = input.value.trim();
  if (todo.length > 0) {
    todos.push(todo);
    renderTodos();
    input.value = '';
    input.focus();
  }
});

input.focus();
