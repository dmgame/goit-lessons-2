import { tasksMock } from './tasks'
import { APP_TASKS_LS_KEY } from './constants'
import axios from './axios'

export function getTasks() {
    return axios.get('/todos').then(res => res.data)
}

export function addNewTask(payload) {
    const newTask = {
        title: payload.title,
        completed: false
    }

    return axios.post('/todos', newTask)
}

export function removeTask(id) {
    return axios.delete(`/todos/${id}`)
}