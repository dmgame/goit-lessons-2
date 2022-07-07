// Check prop in obj
// * operator 'c' in obj
// * obj.c
// * obj.hasOwnProperty('c')


// Delete prop from obj
// деструктурізація
// delete operator

// Приклад з конспекту. Пояснь, будь-ласка, логіку indexOf:   
const bookShelf = {
  books: ["The Last Kingdom"],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  },
  removeBook(bookName) {
    const bookIndex = this.books.indexOf(bookName);
    this.books.splice(bookIndex, 1);
  },
};

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']


// Object copy
// JSON.parse(JSON.stringify(obj)) - Deep copy
// ...
// Object.assign
// Object.fromEntries(Object.entries(obj))


/**
 * Example 1 - Основы обьектов
 * Напиши скрипт, который, для объекта user, последовательно:
 * добавляет поле mood со значением 'happy'
 * заменяет значение hobby на 'skydiving'
 * заменяет значение premium на false
 * выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
 */

// TODO optional chain

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
    arr: [123, 123]
};

// const key = 'mood'
user.mood = 'happy'
// user[key] = 'happy'
// user['Hello world'] = 's'

user.hobby = 'skydiving'
user.premium = false

const keys = Object.keys(user)
// console.log(keys)

for (let key of keys) {
    // console.log('key', key)
    // console.log(user[key])
}

// console.log(user)


/**
 * Example 2 - метод Object.values()
 * У нас есть объект, в котором хранятся зарплаты нашей команды. 
 * Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. 
 * Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.
 */

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

const values = Object.values(salaries)

let sum = 0

for (let val of values) {
    sum += val
}

// console.log(sum)


/**
 * Example 3 - Массив объектов
 * Напишите ф-цию calcTotalPrice(stones, stoneName), 
 * которая принимает массив обьектов и строку с названием камня. 
 * Ф-ция считает и возвращает общую стоимость камней с таким именем, ценой и количеством из обьекта
 */
const stones = [
    { name: 'Изумруд', price: 1300, quantity: 4 },
    { name: 'Бриллиант', price: 2700, quantity: 3 },
    { name: 'Сапфир', price: 400, quantity: 7 },
    { name: 'Щебень', price: 200, quantity: 2 },
];

function calcTotalPrice(stones, stoneName) {
    let sum = 0

    for (let stone of stones) {
        if (stone.name === stoneName) {
            sum = stone.price * stone.quantity
            break
        }
    }

    return sum ? sum : 'Вказаного камня не існує'
}

// console.log(calcTotalPrice(stones, 'Изумруд')) // 400


/**
 * Example 4
 * Реализуйте функцию `compare(firstNumber, secondNumber, operation, result)`, которая
 * - производит операцию `operation` над числами `firstNumber` и `secondNumber`
 * полученное число сравнивает с переменной `result`
 * возвращает результат этого сравнения.
 * 
 * compare("1", "2", "+", "3"); // true
 * 
 * Ограничения на входные данные
 * `firstNumber`, `secondNumber`, `result` - могут быть как типа Number так и String. 
 * Переменные типа String при преобразовании к числовому формату всегда будут валидным числом.
 * `operation` - строка c одной из 4 математических операций: +,-,*,/
 */

function compare(firstNumber, secondNumber, operation, result) {
    const num1 = Number(firstNumber)
    const num2 = Number(secondNumber)
    const res = Number(result)

    if (isNaN(num1) || isNaN(num2) || isNaN(res)) return 'Invalid params'

    const operationsDic = {
        '+': function sum(a, b) { return a + b },
        '-': function minus(a, b) { return a - b },
        '*': function multi(a, b) { return a * b },
        '/': function divide(a, b) { return a / b }
    }

    if (!operationsDic[operation]) { 
        return 'Invalid operation'
    }

    const operationResult = operationsDic[operation](num1, num2)
  
    return operationResult === res

    // switch (operation) {
    //     case '+':
    //         return num1 + num2 === res
    //     case '-':
    //         return num1 - num2 === res
    //     case '*':
    //         return num1 * num2 === res
    //     case '/':
    //         return num1 / num2 === res
    //     default: 
    //         return false
    // }
}

console.log(compare("1", "2", "-", "-1")) // true

/**
 * Example 5 - Комплексные задачи
 * Напиши скрипт управления личным кабинетом интернет банка. 
 * Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.
 */

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};
  
/*
* Каждая транзакция это объект со свойствами: id, type и amount
*/

const account = {
    // Текущий баланс счета
    balance: 0,

    // История транзакций
    transactions: [],

    /*
    * Метод создает и возвращает объект транзакции.
    * Принимает сумму и тип транзакции.
    */
    createTransaction(amount, type) {
        return {
            id: this.transactions.length + 1,
            amount,
            type
        }
    },

    /*
    * Метод отвечающий за добавление суммы к балансу.
    * Принимает сумму танзакции.
    * Вызывает createTransaction для создания объекта транзакции
    * после чего добавляет его в историю транзакций
    */
    deposit(amount) {
        const transaction = this.createTransaction(
            amount,
            Transaction.DEPOSIT
        )

        this.transactions.push(transaction)
        this.balance += amount
    },

    /*
        * Метод отвечающий за снятие суммы с баланса.
        * Принимает сумму танзакции.
        * Вызывает createTransaction для создания объекта транзакции
        * после чего добавляет его в историю транзакций.
        *
        * Если amount больше чем текущий баланс, выводи сообщение
        * о том, что снятие такой суммы не возможно, недостаточно средств.
        */
    withdraw(amount) {
        if (amount > this.balance) return 'недостаточно средств'

        const transaction = this.createTransaction(
            amount,
            Transaction.WITHDRAW
        )

        this.transactions.push(transaction)
        this.balance -= amount
    },

    /*
        * Метод возвращает текущий баланс
        */
    getBalance() {
        return this.balance
    },

    /*
    * Метод ищет и возвращает объект транзации по id
    */
    getTransactionDetails(id) {
        let tr = null

        for (let transaction of this.transactions) {
            if (transaction.id === id) {
                tr = { ...transaction }
                break
            }
        }

        return tr
    },

    /*
    * Метод возвращает количество средств
    * определенного типа транзакции из всей истории транзакций
    */
    getTransactionTotal(type) {
        let sum = 0

        for (let transaction of this.transactions) {
            if (transaction.type === type) {
                sum += transaction.amount
            }
        }

        return sum
    },
};
