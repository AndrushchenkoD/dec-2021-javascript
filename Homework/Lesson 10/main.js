//10 hw
// Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// - Создайте меню, которое раскрывается/сворачивается при клике
//
//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// //Task 1 // Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let btn1 = document.getElementById('btn1');
// let click = document.getElementById('text');
//
// btn1.onclick = function (){
//     click.style.display='none';
// }
//
// //Task 2 - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//     let btn2 = document.getElementById('btn2');
//
// btn2.onclick = function (){
//     btn2.style.display='none';
// }

// //Task 3 - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let btn3 = document.getElementById('btn3');
//
// btn3.onclick = function (){
//     let age = document.getElementById('age').value;
//     if (age<18){
//         alert('вам не має 18');
//     }else if (age>17) {
//         alert('ю аре велком');
//     }else {
//         alert('введіть свій вік ще раз щось пішло не так');
//     }
// }
// // Task 4  - Создайте меню, которое раскрывается/сворачивается при клике
//
// let titleE=document.getElementsByClassName('title')[0];
//
// titleE.onclick = function (){
//     let ulmenuE=document.getElementsByClassName('ulmenu')[0];
//     ulmenuE.classList.toggle('hider');
// }
//--------------------------------------------------------------------------
// - Создайте меню, которое раскрывается/сворачивается при клике
//
// let menuElement = document.querySelector('.menu'); ----це з резолву що робить querySelector!!!
// let titleElement = menuElement.querySelector('.title');
//
// titleElement.onclick = function () {
//     menuElement.classList.toggle('hidden');
// };
//--------------------------------------------------------------------------

//Task 5 - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// //     Вывести список комментариев в документ, каждый в своем блоке.
// //     Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [
    {name: 'Максим', body: 'Вчи English'},
    {name: 'Іван', body: 'Досить сидіти, вже пізно'},
    {name: 'Льоня', body: 'Зупка, стине, ходи додому'},
    {name: 'Іра', body: 'Воно, тобі треба?'},
];
let divWrapper = document.createElement('div');
for (const comment of comments) {
    let div = document.createElement('div');
    let h4= document.createElement('h4');
    let p = document.createElement('p');
    let btn = document.createElement('button');

    h4.innerText=comment.name;
    p.innerHTML=comment.body;
    btn.innerHTML='close';

    btn.onclick=function (){
        p.classList.toggle('hider');
    }

    divWrapper.append(div);
    div.append(h4,p,btn);
}document.body.append(divWrapper);
