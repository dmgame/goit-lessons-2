import { getTasks, addNewTask, removeTask, updateTask } from './tasksService'
import { debounce } from './utils'
import { TasksPriorityTypes, TasksActionTypes } from './constants'
import Subscription from './Subscription'
import Pagination from './pagination'
import UiElements from './elements'
import Toastify from 'toastify-js'
import dayjs from 'dayjs'


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

const tasksUpdateEvent = new Subscription()

async function reRenderTasksOnUpdate(data) {
    console.log('reRenderTasksOnUpdate', data)
}

tasksUpdateEvent.subscribe(reRenderTasksOnUpdate)

async function removeTaskHandler(id) {
    try {
        await removeTask(id)
        Toastify({
            text: 'Task removed success',
            duration: 5000,
        }).showToast()
    } catch (e) {
        Toastify({
            text: 'Remove todo error',
            duration: 5000,
            style: {
                background: "red",
            }
        }).showToast()
    }
}

function createTaskTemplate(task) {
    const container = document.createElement('div')
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
    <div class="card mb-3 ${borderClass}">
        <div class="card-header d-flex justify-content-between ${textBgClass}">
            <span>Task #${task.id}</span>
            <span>${dateText}</span>
        </div>
        <div class="card-body">
            <h5 class="card-title">${task.title}</h5>
            <div>
                <span class="badge ${priorityClass}">${task.priority}</span>
            </div>
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

    container.setAttribute('data-task-id', task.id)
    container.insertAdjacentHTML('afterbegin', template)
    return container
} 

function renderAllTasks(tasksList) {
    const fragment = document.createDocumentFragment()
    tasksList.forEach((task, index) => fragment.appendChild(createTaskTemplate(task, index)))
    tasksContainer.appendChild(fragment)
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

async function getTasksPerPage(page) {
    try {
        const offset = (page - 1) * 10

        cleareTasksContainer()
        toggleTasksLoader()

        const respoonse = await getTasks(offset)
        renderAllTasks(respoonse.data)
    } catch (e) {
        console.log('getTasksPerPage Error:', e)
    } finally {
        toggleTasksLoader()
    }
}

async function reopenTaskHandler(id) {
    try {
        const response = await updateTask(id, { completed: false, expired_at: Date.now() + (1000 * 60 * 60 * 24) })
        Toastify({
            text: 'Task has been reopened success',
            duration: 5000
        }).showToast()

        return response
    } catch (e) {
        Toastify({
            text: 'Reopen todo error',
            duration: 5000,
            style: {
                background: "red",
            }
        }).showToast()
    }
}

async function markAsDoneTaskHandler(id) {
    try {
        const response = await updateTask(id, { completed: true })
        Toastify({
            text: 'Task has been done success',
            duration: 5000
        }).showToast()
        return response
    } catch (e) {
        Toastify({
            text: 'Mark as done todo error',
            duration: 5000,
            style: {
                background: "red",
            }
        }).showToast()
    }
}

function searchTasks(value) {
    const term = value.toLowerCase()
    console.log(term)
    // const filteredTasks = tasks.filter(({ title, description }) => 
    //     title.toLowerCase().includes(term) ||
    //     description.toLowerCase().includes(term)
    // )

    // cleareTasksContainer()
    // renderAllTasks(filteredTasks)
}

tasksContainer.addEventListener('click', async (evt) => {
    const action = evt.target.dataset.action
    if (!action) return

    const { target } = evt
    const taskEl = target.closest('[data-task-id]')
    const id = taskEl.dataset.taskId

    switch (action) {
        case TasksActionTypes.Remove:
            removeTaskHandler(id)
            taskEl.remove()
            tasksUpdateEvent.notify({ type: 'remove' })
            break
        case TasksActionTypes.Reopen:
            const reopenRes = await reopenTaskHandler(id)
            taskEl.replaceWith(createTaskTemplate(reopenRes.data))
            break
        case TasksActionTypes.Done:
            const doneRes = await markAsDoneTaskHandler(id)
            taskEl.replaceWith(createTaskTemplate(doneRes.data))
            break
    }
})

addTaskFormEl.addEventListener('submit', async (evt) => {
    evt.preventDefault()
    toogleButtonLoader()

    try {
        const res = await addNewTask({ title: inputTitleEl.value })
        const template = createTaskTemplate(res.data)
        tasksContainer.insertAdjacentElement('afterbegin', template)
        Toastify({
            text: 'Task has been added success',
            duration: 5000
        }).showToast()
        addTaskFormEl.reset()

        tasksUpdateEvent.notify({ type: 'added' })
    } catch (e) {
        Toastify({
            text: 'Add new task error',
            duration: 5000,
            style: {
                background: "red",
            }
        }).showToast()
    } finally {
        toogleButtonLoader()
    }
})

const searchTasksDebounced = debounce(searchTasks, 1000)

searchInputEl.addEventListener('keyup', () => {
    searchTasksDebounced(searchInputEl.value)
})

async function mount() {
    try {
        const { data, total, limit } = await getTasks()
        
        renderAllTasks(data)

        const totalPages = Math.ceil(total / limit)
        const pagination = new Pagination({
            currentPage: 1,
            totalPages,
            containerSelector: '.pagination-container',
            onPageChange: (page) => getTasksPerPage(page)
        })
        pagination.init()
    } catch (e) {
        console.log('Mount error', e)
    } finally {
        toggleTasksLoader()
    }
}

mount()
