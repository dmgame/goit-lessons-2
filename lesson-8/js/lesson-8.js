// const cars = [
//   { id: 1, make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { id: 2, make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { id: 3, make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { id: 4, make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { id: 5, make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { id: 6, make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { id: 7, make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { id: 8, make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { id: 9, make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { id: 10, make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false }
// ];

// Task 1
// const getModels = cars => {
//   const models = cars.map(car => car.model)
//   return models
// };

// const getModels = cars => cars.map(car => car.model)

// const getModels = cars => cars.map(({ model }) => model)

// console.table(getModels(cars));

// const models = cars.map(({ model }) => model)
// console.log(models)

// Task 2

// const makeCarsWithDiscount = (cars, discount) => {
//   return cars.map((car) => {
//     const carCopy = { ...car }
//     const newPrice = carCopy.price - (carCopy.price * discount)
//     carCopy.price = newPrice
//     return carCopy
//   })
// };

// const makeCarsWithDiscount = (cars, discount) => cars.map(({ price, ...car }) => ({
//   ...car,
//   price: price - (price * discount)
// }))



const makeCarsWithDiscount = (cars, discount) => {
  return cars.map(({price, ...car}) => {
    return {
      ...car,
      price: price - (price * discount)
    }
  })
};

// const carsWithDiscount = makeCarsWithDiscount(cars, 0.2)
// console.log(carsWithDiscount)

// function foo({ price, ...other }) {
//   console.log(price)
//   console.log(other)
// }

// foo({ price: 1000, coun: 2, name: 'Some name' })

// Task 3
// const filterByPrice = (cars, threshold) => {
//   const filteredCars = cars.filter(car => car.price < threshold)
//   return filteredCars
// };

// const filterByPrice = (cars, threshold) => cars.filter(({price}) => price < threshold);

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

// Task 5
// const getCarsWithType = (cars, type) => {
//   const carsByType = cars.filter(car => car.type === type)
//   return carsByType
// };

// const getCarsWithType = (cars, type) => cars.filter(car => car.type === type);

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));


// Task 6
// const getCarByModel = (cars, searchModel) => {
//   const car = cars.find(({ model }) => model === searchModel)
//   return car
// };

// const getCarByModel = (cars, searchModel) => cars.find(({ model }) => model === searchModel)

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));

// Sort
// const arr = [2, 1, 4, 3, 6]

// console.log(arr.sort((prev, next) => prev - next))
// console.log(arr.sort((prev, next) => next - prev))

// const students = ["Вика", "Андрей", "Олег", "Юля", "Борис", "Катя"];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // ['Андрей', 'Борис', 'Вика', 'Катя', 'Олег', 'Юля']

// const sortByAscendingAmount = cars => {
//   const sortedCars = [...cars].sort((prev, next) => prev.amount - next.amount)
//   return sortedCars
// };

// Task 7
// const sortByAscendingAmount = cars => [...cars].sort((prev, next) => prev.amount - next.amount)

// console.table(sortByAscendingAmount(cars));

// Task 9
// const sortByModel = (cars, order) => {
//   const sortedCars = [...cars].sort((prev, next) => {
//     return order === 'asc' ? 
//       prev.model.localeCompare(next.model) :
//       next.model.localeCompare(prev.model)
//   })
//   return sortedCars
// };

// const sortByModel = (cars, order) => [...cars].sort((prev, next) => {
//   return order === 'asc' ? 
//     prev.model.localeCompare(next.model) :
//     next.model.localeCompare(prev.model)
// })

// const sortByModel = (cars, order) => [...cars].sort((prev, next) => {
//   if (order === 'asc') return prev.model.localeCompare(next.model)
//   if (order === 'desc') return next.model.localeCompare(prev.model)
//   return 0
// })

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));


// Task 10

// const getTotalAmount = cars => {
//   const totalAmount = cars.reduce((acc, car, index) => {
//     return acc + car.amount
//   }, 0)

//   return totalAmount
// };

// const getTotalAmount = cars => cars.reduce((acc, car) => acc + car.amount, 0)
// console.log(getTotalAmount(cars));

const cars = [
  { id: 1, make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
  { id: 2, make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
  { id: 3, make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
  { id: 4, make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
  { id: 5, make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
  { id: 6, make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
  { id: 7, make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
  { id: 8, make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
  { id: 9, make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
  { id: 10, make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false }
];

// const carsObj = { 
//   1: { id: 1, make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   2: { id: 2, make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//  //...
// }

// const carsObj = {}

// for (let car of cars) {
//   const { id, model, ...otherProps } = car
//   carsObj[model] = otherProps
// }

// console.log(carsObj)

// const carsObj = cars.reduce((acc, car) => {
//   return { ...acc, [car.id]: { ...car } }
// }, {})

// const carsObj = cars.reduce((acc, car) => ({ ...acc, [car.id]: { ...car } }), {})

// console.log(carsObj)


const arr = [2, 2, 1, 44, 4, 4, 3, 3]

const uniq = arr.filter((num, index, array) => {
  console.log('array.indexOf(num)', array.indexOf(num))
  console.log('current index', index)
  return array.indexOf(num) === index
})

console.log(uniq)