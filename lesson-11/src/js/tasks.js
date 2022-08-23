export const tasksMock = [
    {
        id: 1,
        title: 'Title JavaScript',
        description: "JavaScript",
        priority: 'low',
        is_done: false,
        expired_at: 1661192858595
    },
    {
        id: 2,
        title: 'Title PHP',
        description: "React",
        priority: 'medium',
        is_done: false,
        expired_at: 1661192858595 + (1000 * 60 * 60 * 24)
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