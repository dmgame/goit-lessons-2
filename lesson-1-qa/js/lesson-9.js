"use strict"

const a = 0.17 + 0.24 //?
a.toFixed(2) //?


const services = {
    users: [
     {
         importantSkills: [ 'tempor'],
         name: "Moore",
         gender: "male",
         skills: {  // назва skills та бали за них
             ipsum: 5,
             lorem: 10
         },
         age: 37,
     },
     {
         importantSkills: ['ipsum'],
         name: "Briana",
         gender: "female",
         skills: {
             ipsum: 5,
             tempor: 8,
             mollit: 10,
         },
         age: 30,
     }
    ],
    getUser(name) {
        return this.users.find(user => user.name === name);
    },
    getSkills(name) {
        return this.getUser(name).skills;
    },
    getSkillsByImportant(name, skill) {
        let user = this.getUser(name);
        for (const skills in user) {
            // Ключ
            //console.log(skill);
            // Значение свойства с таким ключом
            console.log(user.skills);
            
        }
        if (user.importantSkills.includes(skill)) {
            return this.getSkills(name);
        }
        return `таких навичок у стажера ${name} немає`;
    }
}

// services.getUser('Briana') //? 
// services.getSkills('Briana') //? 
// console.table(services.getUser('Briana'));
//console.table(services.getSkills('Briana'));
// console.table(services.getSkillsByImportant('Briana', 'ipsum'));



const allCourses = ["JS", "HTML", "HTML", "CSS", "PHP", "JS"]
const uniqueCourses = allCourses.filter((course, index, array) => {
    course
    index
    array.indexOf(course) //?
    return array.indexOf(course) === index //?
});

// uniqueCourses

const str = "DermatoOglyphics".toLocaleLowerCase().split("")
str //? 
str.every((char, index, array) => array.indexOf(char) === index) //? 

// const u = { name: "Denis" }
// const map = new Map()
// map.set(2, "two")
// map.get(2) //?

// // map.delete(2)

// map.set(NaN, "Nan")
// map.get(NaN) //?
// map.set(u, u)
// map.get(u) //?
// map.size //?

// console.log(map.entries())


// function highOrderFunc(cb) {
//     cb("Hello callback")
// }

// function callback(param) { console.log(param) }

// highOrderFunc(callback)


// function foo() {
//     console.log(this)
// }


// .slice, .concat, ...
// ...
// JSON.parse(JSON.stringify(yourArr))



// function getUser() {}

// function updateUser() {}

// function addToBucket() {}

// function submitOrder() {}




// function loadApp() {
//     getUser()
//     // ...
// }

// function onClick() {
//     addToBucket()
// }


// const a = 1


// (function () {
//     const a = 1
//     console.log("anonimus")
// })()



// Reduce
const students = [
    { name: "Kingsley", score: 70 },
    { name: "Jack", score: 80 },
    { name: "Joe", score: 63 },
    { name: "Beth", score: 75 },
    { name: "Kareem", score: 59 },
    { name: "Sarah", score: 93 }
]

// const max = students.reduce((acc, student) => {
//     if (student.score > acc) return student.score //?
//     return acc
// }, 0)

const max = students.reduce((acc, { score }) => score > acc ? score : acc, 0)

// ========
const users = [
    {name: 'Alice', job: 'Data Analyst', country: 'AU'},
    {name: 'Bob', job: 'Pilot', country: 'US'},
    {name: 'Lewis', job: 'Pilot', country: 'US'},
    {name: 'Karen', job: 'Software Eng', country: 'CA'},
    {name: 'Jona', job: 'Painter', country: 'CA'},
    {name: 'Jeremy', job: 'Artist', country: 'SP'},
]
// { "US": [...], "CA": [...] }

// const groups = users.reduce((acc, user) => {
//     if (!acc[user.country]) {
//         acc[user.country] = []
//     }

//     acc[user.country].push(user)
//     return acc
// }, {})

const groups = users.reduce((acc, { country, ...user }) => {
    return { ...acc, [country]: acc[country] ? [...acc[country], user] : [user] } 
}, {})



// =====
const fruits = ['Banana', 'Orange', 'Apple', 'Orange', 'Pear', 'Banana']

// { 'Banana': 2, 'Orange': 2, 'Apple': 1, 'Pear': 1 }