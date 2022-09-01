export const APP_TASKS_LS_KEY = 'app_tasks'

export const TasksPriorityTypes = {
    Low: 'low',
    Medium: 'medium',
    High: 'high'
}

export const TasksActionTypes = {
    Remove: 'remove',
    Reopen: 'reopen',
    Done: 'done'
}

const QuestionnearTypeOne = 'One'

const QuestionnearType = {
    One: 'one',
    Two: 'two',
    Three: 'three'
}

const QuestionnearFieldsMap = {
    [QuestionnearType.One]: {
        questio_1: "Question #1"
    },
    [QuestionnearType.Two]: {
        questio2_21: ""
    }
}
