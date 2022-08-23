const tasksContainer = document.querySelector('.tasks-list')
const addTaskFormEl = document.forms['add-task']
const inputTitleEl = addTaskFormEl.elements['task-title']
const textareaDescriptionEl = addTaskFormEl.elements['task-description']
const selectPriorityEl = addTaskFormEl.elements['task-priority']
const searchFormEl = document.forms['search-form']
const searchInputEl = searchFormEl.elements['task-search']
const tasksLoader = document.querySelector('.tasks-loader')
const buttonLoader = document.querySelector('.submit-loader')
const submitButton = document.querySelector('[type="submit"]')

export default {
    tasksContainer,
    addTaskFormEl,
    inputTitleEl,
    textareaDescriptionEl,
    selectPriorityEl,
    searchInputEl,
    tasksLoader,
    buttonLoader,
    submitButton
}