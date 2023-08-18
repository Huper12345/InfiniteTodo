"use strict";

export {addTask}

const newTask = document.querySelector("#addTask");

const inputTask = document.querySelector("#inputTask");

const tasksPageWrapper = document.querySelector("#tasksPageWrapper");

const taskSelectWrapper = document.querySelector("#taskSelectWrapper");

const backButton = document.querySelector("#backButton");


function addTask() {
    newTask.onclick = () => {
        taskSelectWrapper.classList.remove('hide');
        taskSelectWrapper.classList.add('show');
        tasksPageWrapper.classList.remove("show");
        newTask.classList.add("hide");
        inputTask.classList.remove("hide");
        inputTask.classList.add("show");
        console.log('click')
    
     }

}

function backToTasks() {
    backButton.onclick = () => {
        taskSelectWrapper.classList.add('hide');
        taskSelectWrapper.classList.remove('show');
        tasksPageWrapper.classList.add("show");
        newTask.classList.remove("hide");
        inputTask.classList.remove("show");
        inputTask.classList.add("hide");
    }
}

backToTasks();