// 1. Що таке экземпляр классу
// 2. Що таке прототип
// 3. Як було раніше. В чому різниця віклику функції з оператором new та без нього
// 4. Вирішення завдань 
// function User(name) {
//     console.log(this) // {}
//     this.name = name
//     // return this
// }

// User.prototype.setName = function(newName) {
//     this.name = newName
// }

// const user = new User("Denis")

// function AdminUser(name) {
//     User.call(this, name)

//     this.isAdmin = true
// }

// const admin = new AdminUser("Denis")
// console.log(admin)

// class User {
//     constructor(name) {
//         this.name = name
//     }

//     setName(newName) {
//         this.name = newName
//     }
// }

// const user = new User("Denis")

// class AdminUser extends User {
//     constructor(name) {
//         super(name)
//         this.isAdmin = true
//     }
// }

// const admin = new AdminUser("Denis")
// console.log(admin)


//  Example 1
class Blogger {
    constructor(settings) {
        const { email, age, numberOfPosts = 0, topics = [] } = settings

        this.email = email
        this.age = age
        this.numberOfPosts = numberOfPosts
        this.topics = topics
    }

    getInfo() {
        const {email, age, numberOfPosts} = this
        return `User ${email} is ${age} years old and has ${numberOfPosts} posts`
    }

    updatePostCount(num) {
        this.numberOfPosts = num
    }
}

const mango = new Blogger({
    email: 'mango@mail.com',
    age: 24,
    numberOfPosts: 20,
    topics: ['tech', 'cooking'],
});


// console.log(mango)
// console.log(mango.getInfo())
// mango.updatePostCount(10)
// console.log(mango.getInfo())



//  Example 2
class User {
    #email
    #login

    constructor({ login, email }) {
        this.#email = email
        this.#login = login
        this.logs = []
    }

    get login() {
        return this.#login
    }

    set login(login) {
        this.#login = login
    }

    get email() {
        return this.#email
    }

    set email(email) {
        this.logs.push({ email, date: new Date() })
        this.#email = email
    }

    undo(step = 1) {}
}

const userMango = new User({
    login: 'Mango',
    email: 'mango@dog.woof',
});
  

// console.log(userMango)
// userMango.email = "asdsa@dasd.com"
// userMango.email = "asdsa2@dasd.com"


//  Example 3

class Notes {
    static Priority = {
        LOW: 'low',
        NORMAL: 'normal',
        HIGH: 'high'
    }

    constructor(items) {
        this.items = items
    }

    addNote(payload) {
        const note = {
            id: this.#getItemId(),
            priority: Notes.getDefaultPriority(),
            ...payload
        }

        this.items.push(note)
    }

    #getItemId() {
        return this.items.length + 1
    }

    static getDefaultPriority() {
        return Notes.Priority.LOW
    }
}

const notes = new Notes([])

notes.addNote({ text: 'Моя первая заметка',  priority: Notes.Priority.NORMAL });
notes.addNote({ text: 'Моя первая заметка2',  priority: Notes.Priority.LOW });
console.log(notes);




