'use strict';

// SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// FUNCTIONS
const addTodo = event => {
    // prevents the form from submitting
    event.preventDefault();

    // todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // create li
    const newTodo = document.createElement('li');
    newTodo.textContent = todoInput.value;
    newTodo.classList.add('todo-item');

    todoDiv.append(newTodo);

    // add check button
    const checkBtn = document.createElement('button');
    checkBtn.innerHTML = '<i class="fas fa-check"></i>';
    checkBtn.classList.add('check-btn');
    todoDiv.append(checkBtn);

    // add delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.classList.add('delete-btn');
    todoDiv.append(deleteBtn);

    // attach the todo div to the list
    todoList.append(todoDiv);

    // clear todo input value
    todoInput.value = '';
};

const deleteCheck = event => {
    const item = event.target;

    // delete todo
    if (item.classList[0] === 'delete-btn') {
        const todo = item.parentElement;

        // animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', () => {
            todo.remove();
        });
    }

    //check mark
    if (item.classList[0] === 'check-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('checked');
    }
};

// EVENT LISTENERS
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
