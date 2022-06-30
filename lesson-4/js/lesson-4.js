const numbers = [1, 2, 3]

function foo(arr) {
    const copy = arr.slice()
    console.log('copy =>', copy)
    console.log('copy === numbers', copy === numbers)
    copy[0] = 22   
    console.log('copy =>', copy)
}

// foo(numbers)
// console.log('numbers =>', numbers)

// * Example 1
function calcBMI(weight, height) {
    // 1. Замінити кому на крапку
    // 2. Привести до числа
    // 3. Раннє повернення if () {}
    // 4. Ділити
    // return weight / height

    const parsedWeight = weight.replace(',', '.')
    const parsedHeight = height.replace(',', '.')
    const weightNum = Number(parsedWeight)
    const heightNum = Number(parsedHeight)

    console.log('weightNum', weightNum)
    console.log('heightNum', heightNum)

    if (isNaN(weightNum) || isNaN(heightNum)) return 0

    const calc = (weightNum / Math.pow(heightNum, 2)).toFixed(1)
    console.log('calc =>', calc)
    return Number(calc)
}

// const bmi = calcBMI('88,3', '1.75');
// console.log('bmi =>', bmi); // 28.8

// console.log(calcBMI('88as,3', '1.75'))

// * Example 2
function min(a, b) {
    // 1. Перевірити a, b що вони є числами
    // 2. Порівняти та повернути
    console.log('a', a, 'b', b)
    if (isNaN(a) || isNaN(b)) return 0

    // if (a > b) return b
    // return a

    return Math.min(a, b)
}

// console.log(min('2', 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

// * Example 3
function logItems(items) {
    if (!Array.isArray(items)) return

    for (let i = 0; i < items.length; i += 1) {
        console.log(`${i + 1} - ${items[i]}`)
    }
}

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// * Example 4
function calAverage() {
    let sum = 0
    for (let argument of arguments) {
        sum += argument
    }

    return sum / arguments.length
}

// console.log(calAverage(122, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

// * Example 5
function formatTime(minutes) {
    const hours = Math.floor(minutes / 60)
    // console.log('hours', hours)
    const min = minutes % 60
    // console.log('min', min)
    const twoDigitHours = String(hours).padStart(2, '0')
    const twoDigitMIns = String(min).padStart(2, '0')
    return `${twoDigitHours}:${twoDigitMIns}`
}

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

// * Example 6
const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

function addCourse(name) {
    if (!name) return
    if (courses.includes(name)) return 'У вас уже есть такой курс'

    courses.push(name)
}

addCourse('Express');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// console.log(addCourse('CSS'))

function removeCourse(name) {
    if (!name) return
    if (courses.includes(name) === false) return 'Курс с таким имененем не найден'

    const index = courses.indexOf(name)
    // console.log('index', index)
    courses.splice(index, 1)
}
removeCourse('React');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс с таким имененем не найден'

function updateCourse(name, newName) {
    if (!name || !newName) return
    if (courses.includes(name) === false) return 'Курс с таким имененем не найден'

    const index = courses.indexOf(name)
    courses.splice(index, 1, newName)
}
updateCourse('Express', 'NestJS');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
