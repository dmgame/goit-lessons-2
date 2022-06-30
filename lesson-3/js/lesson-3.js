// * Example 1
const genres = ["Jazz", "Blues"];
genres.push("Рок-н-ролл")
// console.log(genres[0])
const lastElIndex = genres.length - 1
// console.log(genres[lastElIndex])
const firstDeletedEl = genres.shift()
// console.log(firstDeletedEl)
genres.unshift("Country", "Reggy")

// genres.splice(0, 1, "New 1", "New 2")
// console.log(genres)

// * Example 2
const values = '8 11';
const arrNums = values.split(" ")
const sq = Number(arrNums[0]) * Number(arrNums[1])
// console.log(sq)

// * Example 3
const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
//     // console.log(i + 1, ':', fruits[i])
//     console.log(`${i + 1} : ${fruits[i]}`)
// }

// * Example 4
const names = 'Jacob,William,Solomon,Artemis';
const phones = '89001234567,89001112233,890055566377,890055566300';

const namesArray = names.split(',')
const phonesArray = phones.split(',')

// for (let i = 0; i < namesArray.length; i += 1) {
//     const fullString = `${namesArray[i]}: ${phonesArray[i]}`
//     console.log(fullString)
// }

// * Example 5
const string = 'Welcome to the future';
const stringArray = string.split(" ")

// stringArray.shift()
// stringArray.pop()

// console.log(stringArray.slice(1, -1).join(' '))

// console.log(stringArray)
// console.log(stringArray.join(' '))

// * Example 6
let revercedString = ''
for (let i = string.length - 1; i >= 0 ; i -= 1) {
    revercedString += string[i]
}

// console.log(revercedString)

let secondVariant = string.split('').reverse().join('')

// * Example 7
// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[numbers.length - 1];

// for (let i = 0; i < numbers.length ; i += 1) {
//     if (numbers[i] < min) {
//         min = numbers[i]
//     }
// }

// console.log(min); // 1

const numbers = [51, 18, 13, 24, 7, 85, 19];
let smallestNumber = numbers[0];

// for (const number of numbers) {
//     console.log('number:', number, 'smallestNumber', smallestNumber)
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }

// console.log('smallestNumber: ', smallestNumber);
// console.log(Math.min(...numbers))


// let oneElement
// let arr = []

// for (let i = 0; i < fruits.length; i += 1) {
//     oneElement = fruits[i]
//     console.log(fruits[i])
//     arr.push(fruits[i]  + ':)')
// }

// console.log(arr)

let sum = 0

for (const number of numbers) {
    console.log('number:', number, 'smallestNumber', smallestNumber)
    sum += number
}

console.log(sum)
