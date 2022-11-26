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

// EVENT LISTENERS
todoButton.addEventListener('click', addTodo);
