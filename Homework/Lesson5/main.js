
// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника
// - створити функцію яка обчислює та повертає площу кола
// - створити функцію яка обчислює та повертає площу циліндру
// - створити функцію яка приймає масив та виводить кожен його елемент
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// //Task 1
// let squareOfRectangle = (a,b)=>a*b;
// console.log(squareOfRectangle(3,4));

// //Task2
// let squareOfCircle = (a)=>2*3.14*a;
// console.log(squareOfCircle(5));

// //Task3
// let squareofCylindr = (a,h)=>2*3.14*a*h;
// console.log(squareofCylindr(4,5));

// //Task4
// let arr = [3,10,14,5,3.14,56,0.00005,43,2002];
// let inputarr = (array)=>{
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// };
// inputarr(arr);

// //Task5
// let createPar = (arg)=>document.write(`<p>${arg}</p>`);
// createPar('bla bla bla');

// //Task6
// let liCreator = (text)=>{document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`)};
// liCreator('text');

// //Task7
// let liCreator = (text,a)=>{
//     document.write(`<ul>`);
//     for (let i = 0; i < a; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     (`</ul>`)};
// liCreator('text',6);

// //Task8
// let objList = (array)=>{
//     document.write(`<ol>`);
//     for (let arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`);
//     }
//     document.write(`</ol>`);
// }
// let arr = [3,10,14,5,3.14,56,0.00005,43,2002];
// objList(arr);

// //Task9
// let arrobj=[
//     {id:1,name:'Ivan',age:18},
//     {id:2,name:'Fedya',age:20},
//     {id:3,name:'Dima',age:19}
// ];
// let objDivCreator = (array) =>{
//     for (let arrayElement of array) {
//         document.write(`<div>${arrayElement.id} ${arrayElement.name} ${arrayElement.age}</div>`);
//     }
// }
// objDivCreator(arrobj);