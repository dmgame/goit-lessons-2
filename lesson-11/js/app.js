/**
 * id - String
 * title - String
 * description - String
 * priority - String
 * is_done - Boolean
 * is_archived - Boolean
 * expired_at - String
 */

// TODO - Parse date
const tasks = [
    {
        id: 1,
        title: 'Primary card title',
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        priority: 'low',
        is_done: false,
        expired_at: 1659377827742
    },
    {
        id: 2,
        title: 'Primary card title 2',
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        priority: 'medium',
        is_done: false,
        expired_at: 1659477600000
    },
    {
        id: 3,
        title: 'Primary card title 3',
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        priority: 'medium',
        is_done: true,
        expired_at: 1659377827742
    },
    {
        id: 4,
        title: 'Primary card title 4',
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        priority: 'high',
        is_done: false,
        expired_at: 1659132000000
    }
]

const tasksContainer = document.querySelector('.tasks-list')

function removeTaskHandler(evt) {
    const { target } = evt
    const taskEl = target.closest('[data-task-id]')
    const id = Number(taskEl.dataset.taskId)
    taskEl.remove()

    const index = tasks.findIndex((task) => task.id === id)
    tasks.splice(index, 1)
}

function createTaskTemplate(task, index) {
    const priorityClass = task.priority === 'low' ? 
        'text-bg-info' : task.priority === 'medium' ? 'text-bg-warning' : 'text-bg-danger'
    
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

function renderAllTasks() {
    const fullTemplate = tasks.reduce((acc, task, index) => `${acc} ${createTaskTemplate(task, index)}`, '')
    tasksContainer.insertAdjacentHTML('beforeend', fullTemplate)
}

renderAllTasks()

tasksContainer.addEventListener('click', (evt) => {
    const action = evt.target.dataset.action
    if (!action) return

    switch (action) {
        case 'remove':
            removeTaskHandler(evt)
            break
        case 'reopen':
            console.log('call reopen func')
            break
        case 'done':
            console.log('call done func')
            break
    }
})

const addTaskFormEl = document.forms['add-task']
const inputTitleEl = addTaskFormEl.elements['task-title']
const textareaDescriptionEl = addTaskFormEl.elements['task-description']
const selectPriorityEl = addTaskFormEl.elements['task-priority']

addTaskFormEl.addEventListener('submit', (evt) => {
    evt.preventDefault()
    
    const newTask = {
        id: tasks.length + 1,
        title: inputTitleEl.value,
        description: textareaDescriptionEl.value,
        priority: selectPriorityEl.value,
        is_done: false,
        expired_at: Date.now() + (1000 * 60 * 60 * 24)
    }

    tasks.push(newTask)

    const taskTemplate = createTaskTemplate(newTask, tasks.length - 1)
    tasksContainer.insertAdjacentHTML('beforeend', taskTemplate)

    addTaskFormEl.reset()
})