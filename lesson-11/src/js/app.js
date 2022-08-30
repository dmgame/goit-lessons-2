import { getTasks, addNewTask, removeTask } from './tasksService'
import { debounce } from './utils'
import { TasksPriorityTypes, TasksActionTypes } from './constants'
import UiElements from './elements'
import Toastify from 'toastify-js'
import dayjs from 'dayjs'

// TODO implement Reopen
// TODO implement search
// TODO implement pagination

const {
    tasksContainer,
    addTaskFormEl,
    inputTitleEl,
    textareaDescriptionEl,
    selectPriorityEl,
    searchInputEl,
    tasksLoader,
    buttonLoader,
    submitButton
} = UiElements

const tasks = getTasks()

function removeTaskHandler(evt) {
    const { target } = evt
    const taskEl = target.closest('[data-task-id]')
    const id = Number(taskEl.dataset.taskId)
    
    removeTask(id)
        .then(() => {
            taskEl.remove()

            Toastify({
                text: 'Task has been removed success',
                duration: 5000
            }).showToast()
        })
        .catch(err => {
            Toastify({
                text: 'Remove todo error',
                duration: 5000,
                style: {
                    background: "red",
                }
            }).showToast()
        })
}

function createTaskTemplate(task) {
    const priorityClass = task.priority === TasksPriorityTypes.Low ? 
        'text-bg-info' : task.priority === TasksPriorityTypes.Medium ? 'text-bg-warning' : 'text-bg-danger'
    
    let borderClass
    let textBgClass
    
    if (task.completed) {
        borderClass = 'border-success'
        textBgClass = 'text-bg-success'
    }
    const isExpiredAfterToday = dayjs(task.expired_at).isAfter(Date.now(), 'day')
    const isExpiredToday = dayjs(task.expired_at).isSame(Date.now(), 'day')
    const isExpired = dayjs(task.expired_at).isBefore(dayjs(), 'day')
    
    const dateText = task.completed ? 'Done' : `Should be done: ${dayjs(task.expired_at).format('DD.MM.YYYY')}`

    const template = `
    <div class="card mb-3 ${borderClass}" data-task-id="${task.id}">
        <div class="card-header d-flex justify-content-between ${textBgClass}">
            <span>Task #${task.id}</span>
            <span>${dateText}</span>
        </div>
        <div class="card-body">
            <h5 class="card-title">${task.title}</h5>
        </div>
        <div class="card-footer bg-transparent d-flex justify-content-end ${borderClass}">
            ${task.completed ? 
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

function toggleTasksLoader() {
    tasksLoader.classList.toggle('d-none')
}

function toogleButtonLoader() {
    const isNotLoading = buttonLoader.classList.toggle('d-none')
    submitButton.disabled = !isNotLoading
}

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
    toogleButtonLoader()

    addNewTask({ title: inputTitleEl.value})
        .then(res => {
            console.log(res)
            const template = createTaskTemplate(res.data)
            tasksContainer.insertAdjacentHTML('afterbegin', template)
            Toastify({
                text: 'Task has been added success',
                duration: 5000
            }).showToast()
            addTaskFormEl.reset()
        })
        .catch(err => {
            Toastify({
                text: 'Add new task error',
                duration: 5000,
                style: {
                    background: "red",
                }
            }).showToast()
        })
        .finally(() => toogleButtonLoader())
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

getTasks()
    .then(tasks => {
        toggleTasksLoader()
        return tasks
    })
    .then((tasks) => renderAllTasks(tasks))