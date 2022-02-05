// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
//
//
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
//
//
// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
//
// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
//
// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

//Task1
{
    let time = prompt('enter a number 0>60');
    if (time >=0 && time<=15){
        console.log('It is a first quater');
    }else if(time >15&&time<=30 ){
        console.log('It is a second quater');
    }else if (time>30&&time<=45){
        console.log('It is a third quater');
    } else if (time>45&&time<=59){
        console.log('It is a forth quater');
    }else{
        console.log('number is wrong')}
}
//Task2
// {
// //     let day=prompt('enter day (1-31)');
// //     if(day>0&&day<=10){
// //         console.log('It is first decade');
// //     }
// //     else if(day>10&&day<=20){
// //         console.log('It is second decade');
// //     }else if (day>20&&day<=31){
// //         console.log('It is third decade');
// //     }else{
// //         console.log('This date do not exist')}
// // }
//Task3
{

    let test = prompt('true or false')
if (test === true){
    console.log('True');
}else {
    console.log('False')
}}
{
// }
//     let test = !!'' ? true : false;
//     console.log(test);
// }
//Task4
{
    let a=prompt('enter a numer');
    if(a !=0){
    console.log('True');
    }
    else{
    console.log('False')
}
}
//Task5
{
    let day= prompt('week day number');
    switch (day) {
        case '1':
            console.log('Monday');
            break;
        case '2':
            console.log('Tuesday');
            break;
        case '3':
            console.log('Wednesday');
            break;
        case '4':
            console.log('Thursday');
            break;
        case '5':
            console.log('Friday');
            break;
        case '6':
            console.log('Saturday');
            break;
        case '7':
            console.log('Sunday');
            break;
        default:
            console.log('It is not week day number');
            break;
    }
}
//Task6
{
    let x=prompt('Введіть рік');
    if(x%4==0){
        console.log('Це високосний рік');
    }else {
        console.log('Це не високосний рік')
    }
}
//Task7
    {
        let a = prompt('What a official name of JavaScript');
        if (a === 'ECMAScript') {
            console.log('Yes')
        } else {
            console.log('No official name is «ECMAScript»');
        }
    }}