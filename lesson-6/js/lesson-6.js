const arr = [1, 2, 3]
const arr2 = [...arr]
const [first, ...other] = arr
// console.log(first)
// console.log('other', other)

// Проблеми які вирішує деструктурізація
// Довгі ланцюжки доступу до властивостей
const user = {
    id: 1,
    firstName: 'Jacob',
    lastName: 'Mercer',
    email: 'j.mercer@mail.com',
    friendCount: 40,
    info: {
        work: "GoIt",
        place: {
            city: "Kharkiv",
            country: "Ukraine"
        }
    },
    balance: {
        amount: 500
    }
}

// const { info: { place: { city } } } = user

const { info: { work }, balance: { amount }} = user

// const work = user.info ? user.info.work : 'no work'
// const { info: { city, ...otherInfo } = {} } = user
// console.log(city)
// console.log(otherInfo)

// const { info } = user

// info.city = "Kiev"

// console.log(user)

// const arrOfUsers = [{ name: "Denis" }]
// const [{ name }] = arrOfUsers
// console.log(name)

// Об'єкт параметрів
// Копіювання Об'єктів, масивів
// Передача багатьох параметрів



// Example 1
// Перепиши функцию так, чтобы она принимала один объект параметров, 
// вместо набора независимых аргументов.

function calcBMI({ weight, height }) {
    const numericWeight = Number(weight.replace(',', '.'));
    const numericHeight = Number(height.replace(',', '.'));
    return Number((numericWeight / numericHeight ** 2).toFixed(1));
}
  
// Было
// console.log(calcBMI('88,3', '1.75'));
// console.log(calcBMI('68,3', '1.65'));
// console.log(calcBMI('118,3', '1.95'));

// Ожидается
// console.log(
//     calcBMI({
//       height: '1.75',
//       weight: '88,3',
//     }),
// );

// Example 2 Глубокая деструктуризация
// Перепиши функцию так, чтобы она принимала один объект параметров, 
// вместо набора независимых аргументов.  

function getBotReport(data) {
    const { companyName, bots: { repair, defence } } = data
    return `${companyName} has ${repair + defence} bots in stock`;
}
  
// Было
// console.log(getBotReport('Cyberdyne Systems', 150, 50));

// Ожидается
// console.log(
//     getBotReport({
//       companyName: 'Cyberdyne Systems',
//       bots: {
//         repair: 150,
//         defence: 50,
//       },
//     }),
// );


// Example 3 - spred
// Дополни функцию createContact(partialContact) так, 
// чтобы она возвращала новый объект контакта с 
// добавленными свойствами id и createdAt, 
// а также list со значением "default" 
// если в partialContact нет такого свойства.

function createContact(partialContact) {
    return {
        list: 'default',
        id: generateId(),
        createdAt: Date.now(),
        ...partialContact,
    }
}

// console.log(
//     createContact({
//         name: 'Mango',
//         email: 'mango@mail.com',
//         list: 'friends',
//     }),
// );
// console.log(
//     createContact({
//         name: 'Poly',
//         email: 'poly@hotmail.com',
//     }),
// );

function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}   

// Example 4 rest
// Напиши функцию transformUsername(user) так, 
// чтобы она возвращала новый обьект со свойством fullName, 
// вместо firstName и lastName.

function transformUsername({ firstName, lastName, ...otherInfo }) {
    return {
        fullName: `${firstName} ${lastName}`,
        ...otherInfo
    }
}
  
//   console.log(
//     transformUsername({
//       id: 1,
//       firstName: 'Jacob',
//       lastName: 'Mercer',
//       email: 'j.mercer@mail.com',
//       friendCount: 40,
//     }),
//   );
  