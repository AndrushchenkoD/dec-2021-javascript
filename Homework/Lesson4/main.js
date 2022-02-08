// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// - створити функцію яка приймає масив та виводить кожен його елемент
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

//Task1
{
function squareCalc1(a, b){
    let res = a *  b;
    return res;
}
let c = squareCalc1(5, 6);
    console.log(c);
}
//Task2
{
    function circleCalc2(r)
    {
        let S = 2 * r * 3.14;
        return S ;
    }
let e = circleCalc2(4);
    console.log(e);
}
//Task3
{
    function cylindrCalc3(r, h)
    {
        let Scyl= 2 * 3.14 * r * h;
        return Scyl;
    }
    let Cyl = cylindrCalc3(9, 8);
    console.log(Cyl);}
//Task4
{
    function cycle1(arr)
    {
      for (let i=0;i<=arr.length-1;i++){
          console.log(arr[i]);
      }
    }
    let dec=cycle1([1,2,56,'apple',true,3,'banana',false,55,89]);
}
//Task5
{
    function paragraf(a) {
        document.write(`<p>${a}</p>`)
    }
    let text=paragraf('pipka');
}
//Task6 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
{
    function lili(f){
        document.write(`<ul>`);
        document.write(`<li>${f}</li>`);
        document.write(`<li>${f}</li>`);
        document.write(`<li>${f}</li>`);
        document.write(`</ul>`);
    }
    let textf=lili('ne pipka');
}
//Task7
{
    function licount(size,g){
        document.write(`<ul>`);
        for (let i=0;i<size;i++){
            document.write(`<li>${g}</li>`);
        }
        document.write(`</ul>`);
    }
    let textf=licount(9, 'ne pi pipka');
}
//Task8
{
function randaarr(arr){
    document.write(`<ol>`);
    for (let i = 0;i<arr.length;i++){
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write(`</ol>`);
}
let namnumbol= randaarr(['petya',1,true,2,65,false,'apple']);}
//Task9
{
    let arrobj=[
        {id:1,name:'Ivan',age:18},
        {id:2,name:'Fedya',age:20},
        {id:3,name:'Dima',age:19}
    ];
    function punkcia(arr){
        for (const arrElement of arr) {
            document.write(`<div>${arrElement.id} ${arrElement.name} ${arrElement.age}</div>`);
        }
    }
    punkcia(arrobj);
}