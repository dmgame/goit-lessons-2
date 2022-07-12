// function foo(callback) { // callback -> undefined
//     callback(10) // undefined
// }

// function logger(value) {
//     console.log(value)
// }

// foo(logger(5)) // logger(5) -> undefined



// const users = [
//     { name: 'Denis' },
//     { name: 'Dima' }
// ]

// const cb = (user, index, array) => {
//     console.log('user', user)
//     console.log('index', index)
//     console.log('array', array)
// }

// users.forEach(cb)


// const sum = (a, b) => {
//     console.log(a, b)
//     return a + b
// }


// console.log(sum(2, 2))

// const createObj = (name, age) => {
//     return {
//         name, 
//         age
//     }
// }

// const createObj = (name, age) => ({ name, age })

// console.log(createObj('Denis', 33))



/**
 * Example 1 - Коллбек функции
 * Напишите следующие функции:
 * createProduct(obj, callback) - 
 * принимает объект товара без id, а также колбек. 
 * Функция создаёт обьект товара, 
 * добавляя ему уникальный идентификатор в свойство id и 
 * вызывает колбек передавая ему созданный обьект.
 * 
 * logProduct(product) - коллбек принимающий обьект продукта 
 * и логирующий его в консоль
 * logTotalPrice(product) - коллбек принимающий обьект продукта 
 * и логирующий общую стоимость товара в консоль
 */

function createProduct(obj, callback) {
    const product = {
        id: Math.random(),
        ...obj
    }

    callback(product)
}

function logProduct(product) {
    console.log(product)
}

function logTotalPrice({ price, count }) {
    console.log('sum', price * count)
}

const p = {
    name: 'iPhone',
    price: 1000,
    count: 10
}


// createProduct(p, logProduct)
// createProduct(p, logTotalPrice)



/**
 * Example 2
 * Напишите функцию аналог метода forEach
 * Он должен принимать массив и callback функцию 
 * которая будет вызываться для каждого элемента массива
 */

// const users = [
//     { name: 'Denis', age: 33 },
//     { name: 'Dima', age: 46 }
// ]

// function forEach(arr, callback) {
//     for (let i = 0; i < arr.length; i += 1) {
//         callback(arr[i], i, arr)
//     }
// }

// function forEachCallback(user, index, arr) {
//     console.log('user', user)
//     console.log('index', index)
//     console.log('arr', arr)
// }

// forEach(users, forEachCallback)

// users.forEach(forEachCallback)



/**
 *  Example 3 - Коллбек функции
 * Напишите функцию each(array, callback), 
 * которая первым параметром ожидает массив, а вторым - функцию, 
 * которая применится к каждому элементу массива. 
 * Функция each должна вернуть новый массив, 
 * элементами которого будут результаты вызова коллбека.
*/



function each(arr, callback) {
    const newArray = []

    for (let i = 0; i < arr.length; i += 1) {
        const callbackResult = callback(arr[i], i, arr)
        newArray.push(callbackResult)
    }
    console.log(newArray)
    return newArray
}

function getName(user) {
    return user.name
}

function getNameAndAge(user) {
    return `${user.name} is ${user.age} old`
}

function modifyUser(user) {
    return {
        ...user,
        isOld: user.age < 60
    }
}

const users = [
    { name: 'Denis', age: 33 },
    { name: 'Dima', age: 46 }
]

// each(users, modifyUser)

/**
 * Example 3.1
 * Выполните рефакторинг Example 2 кода используя стрелочные функции.
*/
// each(users, (user) => user.name)
// each(users, (user) => `${user.name} is ${user.age} old`)



/**
 * Example 4 - Коллбек функции
 * Добавьте объекту account методы 
 * withdraw(amount, onSuccess, onError) и 
 * deposit(amount, onSuccess, onError), 
 * где первый параметр это сумма операции, а второй и третий - колбеки.
 * Метод withdraw вызывает onError если amount больше 
 * TRANSACTION_LIMIT или this.balance, 
 * и onSuccess в противном случае.
 * Метод deposit вызывает onError если amount больше 
 * TRANSACTION_LIMIT или меньше либо равен нулю, 
 * и onSuccess в противном случае.
 */

const TRANSACTION_LIMIT = 1000;

const account = {
  username: 'Jacob',
  balance: 400,

  deposit(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT || amount <= 0) {
        return onError('Amount error')
    }

    this.balance += amount

    onSuccess(this.balance)
  },

  withdraw(amount) {
    if (amount > TRANSACTION_LIMIT || amount > this.balance) {
        return
    }

    this.balance -= amount
  }
}

const onSuccess = (balance) => console.log('onSuccessHandler', balance)
const onError = (error) => console.error('onErrorHandler', error)

account.deposit(2000, onSuccess, onError)
account.deposit(1000, onSuccess, onError)