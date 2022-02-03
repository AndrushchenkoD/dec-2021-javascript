//1 - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
//2 - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
//3 - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
// 4- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
//5 - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
//6 - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//     5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true
//
// 7- Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");

//Task 1
{
    let hello = 'hello';
    let owu = 'owu';
    let com = 'com';
    let ua = 'ua';
    let one = 1;
    let ten = 10;
    let minusthree9 = -999;
    let one23 = 123;
    let PI = 3.14
    let twodot7 = 2.7;
    let sixteen = 16;
    let btrue = true;
    let bfalse = false;

    console.log(hello, owu, com, ua, one, ten, minusthree9, one23, PI, twodot7, sixteen, btrue, bfalse);
    alert(hello, owu, com, ua, one, ten, minusthree9, one23, PI, twodot7, sixteen, btrue, bfalse);
    document.write(hello, owu, com, ua, one, ten, minusthree9, one23, PI, twodot7, sixteen, btrue, bfalse);
}
//Task2

let hello = 'bye'
let owu = 'uwo';
let com = 'moc';
let ua = 'au';
let one = 2;
let ten = 11;
let minusthree9 = +99;
let one23 = 231;
let PI = 4.14
let twodot7 = 1.7;
let sixteen = 26;
let btrue = false;
let bfalse = true;

console.log(hello,owu,com,ua,one,ten,minusthree9,one23,PI,twodot7,sixteen,btrue,bfalse);
alert(hello,owu,com,ua,one,ten,minusthree9,one23,PI,twodot7,sixteen,btrue,bfalse);
document.write(hello , owu , com , ua , one , ten , minusthree9 , one23 , PI , twodot7 , sixteen , btrue , bfalse );

//Task3
let firstName = 'Dima';
let middleName = 'Andrushchenko';
let lastName = 'Ivanovych';
let probel=' '
let person = firstName+probel+middleName+probel+lastName;
console.log(person);

//Task4
let uName = prompt('Your name');
let uFatherName = prompt('Your FatherName');
let uAge = prompt('Your Age');
console.log('Вітаю',uName,uFatherName,'.Тобі',uAge,'років.')

// Task 5
{
let a =100;
let b ='100';
let c =true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);}

//Task6
console.log(5 < 6);
console.log(5 > 6);
console.log(5 == 6);
console.log(5 === 6);
console.log(10 == 10);
console.log(10 === 10);
console.log(10 > 10);
console.log(10 < 10);
console.log(10 != 10);
console.log(123 === '123');
console.log(123 == '123');

//Task7
let str = "20";
 let a = 5;
document.write(str + a + "<br/>");
document.write(str - a + "<br/>");
document.write(str * "2" + "<br/>");
document.write(str / 2 + "<br/>");