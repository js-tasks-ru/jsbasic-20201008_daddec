# Определите, пуст ли объект

Создайте функцию isEmpty(obj), которая возвращает true, 
если в объекте нет свойств и false – если хоть одно свойство есть.

Работать должно так:
```js
function isEmpty(obj) {
  if(Object.keys(obj).length == 0){
    return console.log(true);
  }
  return console.log(false);
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) ); // false
```
