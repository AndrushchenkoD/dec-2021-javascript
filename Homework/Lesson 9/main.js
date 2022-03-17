// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

//Task 1.1 - створити блок
let divE = document.createElement('div');
// Task 1.2 - додати йому класи wrap, collapse, alpha, beta
divE.classList.add('wrap');
divE.classList.add('collapse');
divE.classList.add('alpha');
divE.classList.add('beta');
//Task 1.3 - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
divE.style.background='red';
divE.style.color='blue';
divE.style.fontSize='40px';
divE.innerText='bla';
//Task 1.4 - додати цей блок в body.
document.body.appendChild(divE);
//Task 1.5 - клонувати його повністю, та додати клон в body.
document.body.appendChild(divE.cloneNode(true));
console.log(divE);


// //Task 2 - Є масив
// // // let coursesAndDurationArray = [
// // //     {title: 'JavaScript Complex', monthDuration: 5},
// // //     {title: 'Java Complex', monthDuration: 6},
// // //     {title: 'Python Complex', monthDuration: 6},
// // //     {title: 'QA Complex', monthDuration: 4},
// // //     {title: 'FullStack', monthDuration: 7},
// // //     {title: 'Frontend', monthDuration: 4}
// // // ];
// // // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // // Завдання робити через цикли.
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}]
//
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.innerText= `${coursesAndDurationArrayElement.title} ${coursesAndDurationArrayElement.monthDuration}`;
//     document.body.appendChild(div);
// }

//Task 3 - Є масив
// // let coursesAndDurationArray = [
// //     {title: 'JavaScript Complex', monthDuration: 5},
// //     {title: 'Java Complex', monthDuration: 6},
// //     {title: 'Python Complex', monthDuration: 6},
// //     {title: 'QA Complex', monthDuration: 4},
// //     {title: 'FullStack', monthDuration: 7},
// //     {title: 'Frontend', monthDuration: 4}
// // ];
// // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// //     Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let divE = document.createElement('div');
    let h1 = document.createElement('h1');
    h1.innerText=coursesAndDurationArrayElement.title;

    let p= document.createElement('p');
    p.innerText=coursesAndDurationArrayElement.monthDuration;

    divE.appendChild(h1);
    divE.appendChild(p);
    document.body.appendChild(divE);

}