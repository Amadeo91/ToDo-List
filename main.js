const input = document.querySelector('.js-input');
const addTaskBtn = document.querySelector('.js-btn');
let tasksBoard = document.querySelector('.js-tasksBoard');
const alertInfo = document.querySelector('.js-alert');

let taskContainer;
let task;
let taskCross;

let imgArr = [
    "sticky note",
    "sticky note1",
    "sticky note2",
    "sticky note3",
    "sticky note4",
    "sticky note5",
    "sticky note6",
]

const addTask = () => {
    if (input.value !== '') {
        createTaskContainer();
        createTask()
        addTools();
        setRandomNote();
        input.value = "";
        alertInfo.innerHTML = "";
    } else {
        alertInfo.textContent = '...musisz wpisać treść zadania...';
    }
}

const createTaskContainer = () => {
    taskContainer = document.createElement('div');
    taskContainer.classList.add('tasksBoard__container');
    tasksBoard.appendChild(taskContainer);
}

const setRandomNote = () => {
    let imgNote = document.createElement('img');
    taskContainer.appendChild(imgNote);
    imgNote.classList.add('tasksBoard__note');
    let i = Math.floor(Math.random() * imgArr.length);
    let pics = imgArr[i];
    imgNote.setAttribute('src', `./img/note/${pics}.png`);
}

const addTools = () => {
    const btnDone = document.createElement('button');
    taskContainer.appendChild(btnDone);
    btnDone.innerHTML = "✔";
    btnDone.classList.add('taskBoard__done');

    const btnDelete = document.createElement('button');
    taskContainer.appendChild(btnDelete);
    btnDelete.innerHTML = "x";
    btnDelete.classList.add('taskBoard__delete');
}

const createTask = () => {
    task = document.createElement('p');
    taskContainer.appendChild(task);
    task.innerText = input.value;
    task.classList.add('tasksBoard__task');
}

const checkClick = (e) => {
    if (e.target.matches('.taskBoard__done')) {
        e.target.previousElementSibling.classList.toggle('js-taskThrough')
    } else if (e.target.matches('.taskBoard__delete')) {
        const taskTarget = e.target.closest('div');
        taskTarget.remove();
    }
}

addTaskBtn.addEventListener('click', addTask);
tasksBoard.addEventListener('click', checkClick);