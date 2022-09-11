# GoIt JavaScript Group 49

## Питання на інтервью

[Питання](https://docs.google.com/document/d/14wcAePh977kmvT_bWbUn-a72O2ZZ-Tyg/edit?usp=sharing&ouid=104515070505499730588&rtpof=true&sd=true)

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

## YouTube

[TraversyMedia](https://www.youtube.com/c/TraversyMedia)

[Academind](https://www.youtube.com/c/Academind)

[FreelancerLifeStyle](https://www.youtube.com/c/FreelancerLifeStyle/videos)

[JavascriptNinja](https://www.youtube.com/c/JavascriptNinja)

[Канал з співбесідами](https://www.youtube.com/c/otsobes)

## Videos

[Object descriptor](https://vimeo.com/346693257/b7711f7e30)

[Object wrappers](https://vimeo.com/345836585/08905c514c)

[Замыкания](https://vimeo.com/345836732/8d8a42e0d4)

[Interceptors.](https://vimeo.com/369149275/ca8124687e)

[Питання з співбесіди.](https://vimeo.com/369141498/eb855eaf86)

## Common Links

[Візуалізация методу sort](https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/)

[Візуалізація методу reduce](http://reduce.surge.sh/)

[Classes ES5 vs CLasses ES6](https://medium.com/@apalshah/javascript-class-difference-between-es5-and-es6-classes-a37b6c90c7f8)

[Візуалізація подій](http://jsbin.com/valasomeli/edit?html,js,output)

[Каталог патернів проектування](https://refactoring.guru/uk/design-patterns/catalog)

[Замыкания](https://medium.com/webbdev/closures-9a20e84b62cd)

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
