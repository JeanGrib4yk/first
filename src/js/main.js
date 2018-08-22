const log = console.log;
let x = 0;
console.log('sunshine');

//слушаем клавиатуру
document.addEventListener('keydown', function (event) {
    console.log(event.code);
})

//
// блок обучения 1
//

// функции(под программы)

//декларативная функция
function sum(argument1, parameter2) {
    return argument1 + parameter2
}

let functionResult = sum(2, 3);
console.log(functionResult);

//объект составной тип данных, сущность ООП
// есть два вида объектов: литералы, объекты

//объект литерал(для организации данных)
this._o = {}; //пустой
var o2 = {
    prop1: 1,
    prop2: 'some string',
    method: function () {
        return 'i am method from o2'
    }
}
console.log(o2.prop2)

// цикл(for, while, do while)
for (var i = 0; i !== 10; i++) {
    console.log('loop-', i)
}

let arr = [11, 22, 32, 46, 5, 6, 7, 8, 9, 10]

for (var i = 0; i <= arr.length - 1; i++) {
    console.log('arr el', arr[i])
}
// итерация с помощью метода map
arr.map((el, i) => {
    console.log(el)
})

arr.map(el => log(el))

if (true) log('if true')
log(1<2 && 1==1)
// DOM (литеральные объекты)