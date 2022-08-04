# GoIt JavaScript Group 49

## Сайти із завданнями
https://proghub.dev/

https://www.codewars.com/

https://skillotron.com/signin (він не працює зараз але обіцяють його пофиксити)

## Learn playing games
https://codecombat.com/

https://www.codingame.com/


## State of JavaScript
https://2021.stateofjs.com/ua-UA/

https://tc39.es/ecma262/

https://github.com/tc39

-----------------------

## Common Links

[Канал з співбесідами](https://www.youtube.com/c/otsobes)

[Візуалізация методу sort](https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/)

[Візуалізація методу reduce](http://reduce.surge.sh/)

[Classes ES5 vs CLasses ES6](https://medium.com/@apalshah/javascript-class-difference-between-es5-and-es6-classes-a37b6c90c7f8)

[Візуалізація подій](http://jsbin.com/valasomeli/edit?html,js,output)

### Приклад реаалізації методу sort за допомогую цикла
```js
 const numbers = [2, 5, 1, 7, 9, 3]
 
 // #1 [2, 1, 5, 7, 3, 9]
 // #2 [1, 2, 5, 3, 7, *9]
 // #3 [1, 2, 3, 5, *7, *9]
 // #3 [1, 2, 3, *5, *7, *9]
 
 // endI - граница основного цикла, это всегда длина массива - 1
 // endJ - граница вложенного цикла минус текущая итерация основного цикла
 
 // was swap - если они прошел по всему массиву и не поменял местами не один элемент
 // значит все стоят в нужном порябке и дальше идти по массиву не нужно
 
 function bubbleSort(arr) {
     for (let i = 0, endI = arr.length - 1; i < endI; i++) {
         console.log('===================')
         console.log('i', i, 'endI', endI)
         console.log('-------------------')
         let wasSwap = false;
         for (let j = 0, endJ = endI - i; j < endJ; j++) {
             console.log('j', j, 'endJ', endJ)
             if (arr[j] > arr[j + 1]) {
                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                 wasSwap = true;
             }
         }
         console.log('===================')
         if (!wasSwap) break;
     }
     return arr;
 };
 
console.log(bubbleSort(numbers))
```
