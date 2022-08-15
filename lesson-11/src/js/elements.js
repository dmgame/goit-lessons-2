const tasksContainer = document.querySelector('.tasks-list')
const addTaskFormEl = document.forms['add-task']
const inputTitleEl = addTaskFormEl.elements['task-title']
const textareaDescriptionEl = addTaskFormEl.elements['task-description']
const selectPriorityEl = addTaskFormEl.elements['task-priority']
const searchFormEl = document.forms['search-form']
const searchInputEl = searchFormEl.elements['task-search']

export default {
    tasksContainer,
    addTaskFormEl,
    inputTitleEl,
    textareaDescriptionEl,
    selectPriorityEl,
    searchInputEl
}