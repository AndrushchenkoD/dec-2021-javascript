// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// - створити функцію яка повертає найбільше число з масиву
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// //Task1
// let numberWmin = (a,b,c) => {
//     if (a<b&&a<c){
//         return a;
//     }else if(b<a&&b<c){
//         return b;
//     }else{
//         return c;
//     }
// };
// console.log(numberWmin(100,250,300));


// //Task2
// let numberWmax = (a,b,c) => {
//     if (a>b&&a>c){
//         return a;
//     }else if(b>a&&b>c){
//         return b;
//     }else{
//         return c;
//     }
// };
// console.log(numberWmax(100,250,300));


// //Task3
// let arr = [3,10,14,5,3.14,56,0.00005,43,2002];
// let arrMinNum = (array) => {
//     let min = array[0];
//     for (let element of array) {
//         if(element < min){
//             min = element;
//         }
//     }
//     return min;
// }
// console.log(arrMinNum(arr))

// //Task4
// let arr = [3,10,14,5,3.14,56,0.00005,43,2002];
// let arrMaxNum = (array) => {
//     let max = array[0];
//     for (let element of array) {
//         if(element > max){
//             max = element;
//         }
//     }
//     return max;
// }
// console.log(arrMaxNum(arr))

// //Task 5
// let arr=[1,2,3,10];
// let arrSum = (array)=>{
//     let sum = 0;
//     for (let Element of array) {
//         sum= sum + Element;
//     }
//     return sum;
// }
// console.log(arrSum(arr));

// //Task6
// let arr=[1,2,3,10];
// let arrmidarf = (array)=>{
//     let sum=0;
//     for (let arrayElement of array) {
//         sum=sum+arrayElement;
//     }
//     return sum/array.length;
// }
// console.log(arrmidarf(arr));

//Task7
// let arr = [3,10,14,5,3.14,56,0.00005,43,2002];
// let arrMinMax = (array)=>{
//     let min = array[0];
//     let max = array[0];
//     for (let arrayElement of array) {
//         if(arrayElement>max){
//             max=arrayElement;
//         }
//         if(arrayElement<min){
//             min=arrayElement;
//         }
//     }
//     console.log('Max num:',max);
//     return min;
// }
// document.write(arrMinMax(arr));

// //Task 8
// let randomArr = (length) =>{
//     let array=[];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.round(Math.random()*100));
//     }
//     return array;
// };
// console.log(randomArr(4));

// //Task 9
// let randomArrwLimit = (length,limit)=>{
//     let array=[];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.round(Math.random()*limit));
//     }
//     return array;
// }
// console.log(randomArrwLimit(6,1000));

// //Task10
// let arr = [3,10,14,5,3.14,56,0.00005,43,2002];
// let arrIter = (array)=>{
//     let Newarray = [];
//     for (let i = array.length - 1, ri=0; i >= 0; i--,ri++) {
//         Newarray[ri]=array[i];
//     }
//     return Newarray;
// }
// console.log(arrIter(arr));