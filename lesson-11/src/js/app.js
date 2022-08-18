import { getTasks, addNewTask, removeTask } from './tasksService'
import { debounce } from './utils'
import { TasksPriorityTypes, TasksActionTypes } from './constants'
import UiElements from './elements'
import Toastify from 'toastify-js'

const {
    tasksContainer,
    addTaskFormEl,
    inputTitleEl,
    textareaDescriptionEl,
    selectPriorityEl,
    searchInputEl
} = UiElements

const tasks = getTasks()

function removeTaskHandler(evt) {
    const { target } = evt
    const taskEl = target.closest('[data-task-id]')
    const id = Number(taskEl.dataset.taskId)
    taskEl.remove()

    removeTask(id)

    Toastify({
        text: 'Task has been removed success',
        duration: 5000
    }).showToast()
}

function createTaskTemplate(task, index) {
    const priorityClass = task.priority === TasksPriorityTypes.Low ? 
        'text-bg-info' : task.priority === TasksPriorityTypes.Medium ? 'text-bg-warning' : 'text-bg-danger'
    
    let borderClass
    let textBgClass
    
    if (task.is_done) {
        borderClass = 'border-success'
        textBgClass = 'text-bg-success'
    }
    const date = new Date(task.expired_at)
    const dateText = task.is_done ? 'Done' : `Should be done: ${date.toLocaleString('en-EU', {
        year: '2-digit',
        month: 'numeric',
        day: '2-digit'
    })}`

    const template = `
    <div class="card mb-3 ${borderClass}" data-task-id="${task.id}">
        <div class="card-header d-flex justify-content-between ${textBgClass}">
            <span>Task #${index + 1}</span>
            <span>${dateText}</span>
        </div>
        <div class="card-body">
            <h5 class="card-title">${task.title}</h5>
            <p class="card-text">${task.description}</p>
            <div>
                <span class="badge ${priorityClass}">${task.priority}</span>
            </div>
        </div>
        <div class="card-footer bg-transparent d-flex justify-content-end ${borderClass}">
            ${task.is_done ? 
                '<button class="btn btn-outline-primary me-2" data-action="reopen">Reopen</button>' : 
                '<button class="btn btn-success me-2" data-action="done">Mark as done</button>'
            }
            <button class="btn btn-danger" data-action="remove">Remove</button>
        </div>
    </div>
    `

    return template
} 

function renderAllTasks(tasksList) {
    const fullTemplate = tasksList.reduce((acc, task, index) => `${acc} ${createTaskTemplate(task, index)}`, '')
    tasksContainer.insertAdjacentHTML('beforeend', fullTemplate)
}

function cleareTasksContainer() {
    tasksContainer.innerHTML = ''
}

renderAllTasks(tasks)

tasksContainer.addEventListener('click', (evt) => {
    const action = evt.target.dataset.action
    if (!action) return

    switch (action) {
        case TasksActionTypes.Remove:
            removeTaskHandler(evt)
            break
        case TasksActionTypes.Reopen:
            console.log('call reopen func')
            break
        case TasksActionTypes.Done:
            console.log('call done func')
            break
    }
})

addTaskFormEl.addEventListener('submit', (evt) => {
    evt.preventDefault()
    
    const newTask = addNewTask({
        title: inputTitleEl.value,
        description: textareaDescriptionEl.value,
        priority: selectPriorityEl.value,
    })

    const taskTemplate = createTaskTemplate(newTask, tasks.length - 1)
    tasksContainer.insertAdjacentHTML('beforeend', taskTemplate)
    Toastify({
        text: 'Task has been added success',
        duration: 5000
    }).showToast()
    addTaskFormEl.reset()
})

function searchTasks(value) {
    const term = value.toLowerCase()
    const filteredTasks = tasks.filter(({ title, description }) => 
        title.toLowerCase().includes(term) ||
        description.toLowerCase().includes(term)
    )

    cleareTasksContainer()
    renderAllTasks(filteredTasks)
}

const searchTasksDebounced = debounce(searchTasks, 1000)

searchInputEl.addEventListener('keyup', () => {
    searchTasksDebounced(searchInputEl.value)
})
