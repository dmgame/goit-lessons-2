import { tasksMock } from './tasks'
import { APP_TASKS_LS_KEY } from './constants'

const tasks = JSON.parse(localStorage.getItem(APP_TASKS_LS_KEY)) || JSON.parse(JSON.stringify(tasksMock))

export function getTasks() {
    return tasks
}

export function addNewTask(payload) {
    const newTask = {
        id: tasks.length + 1,
        title: payload.title,
        description: payload.description,
        priority: payload.priority,
        is_done: false,
        expired_at: Date.now() + (1000 * 60 * 60 * 24)
    }

    tasks.push(newTask)
    localStorage.setItem(APP_TASKS_LS_KEY, JSON.stringify(tasks))

    return { ...newTask }
}

export function removeTask(id) {
    const index = tasks.findIndex((task) => task.id === id)
    tasks.splice(index, 1)
    localStorage.setItem(APP_TASKS_LS_KEY, JSON.stringify(tasks))
}