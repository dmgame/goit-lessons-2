import { tasksMock } from './tasks'
import { APP_TASKS_LS_KEY } from './constants'
import axios from './axios'

export function getTasks(offset = 0, limit = 10) {
    return axios.get(`/todos`, { params: { offset, limit } }).then(res => res.data)
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

export function updateTask(id, payload) {
    return axios.patch(`/todos/${id}`, payload)
}