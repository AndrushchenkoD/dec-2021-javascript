// 10 cw

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// //Task 1 - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// // // Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// // // Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// let formOne = document.createElement('form');
// let formTwo = document.createElement('form');
//
// document.body.append(formOne,formTwo);
//
// formOne.setAttribute('name','Form1');
// formTwo.setAttribute('name','Form2');
//
// let inputOne = document.createElement('input');
// let inputTwo = document.createElement('input');
// let inputThree = document.createElement('input');
// let inputFour = document.createElement('input');
//
// inputOne.setAttribute('name','inputOne');
// inputTwo.setAttribute('name','inputTwo');
// inputThree.setAttribute('name','inputThree');
// inputFour.setAttribute('name','inputFour');
//
// formOne.append(inputOne,inputTwo);
// formTwo.append(inputThree,inputFour);
//
// let btn = document.createElement('button');
// btn.innerText='click me and get info about input value in console';
//
// document.body.appendChild(btn);
//
// btn.onclick = function (){
//     console.log(inputOne.value,inputTwo.value,inputThree.value,inputFour.value);
// }

//Task 2 - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let inputOne = document.createElement('input');
// let inputTwo = document.createElement('input');
// let inputThree = document.createElement('input');
// let button = document.createElement('button');
//
// button.innerText = 'Створи таблицю';
// document.body.append(inputOne, inputTwo, inputThree, button);
//
// button.addEventListener('click',function (){
//   let rows = inputOne.value;
//   let columns = inputTwo.value;
//   let content = inputThree.value;
//
//   function createTable(rows,columns,txt){
//       let table = document.createElement('table');
//       let div = document.createElement('div');
//
//       div.appendChild(table);
//       document.body.appendChild(div);
//
//       for (let i = 0; i < rows; i++) {
//           let rows = document.createElement('tr');
//           for (let j = 0; j < columns; j++) {
//               let columns = document.createElement('td');
//               columns.innerText=`${txt}`;
//               table.appendChild(rows);
//               rows.appendChild(columns);
//           }
//       }
//   }
//   createTable(rows,columns,content);
// })

//Task 3 - - Сворити масив не цензцрних слів.
// // Створити інпут текстового типу.
// // Якщо людина вводить слово і воно міститься в масиві не цензурних слів кинути алерт з попередженням.
// // Перевірку робити при натисканні на кнопку

// let mates = ['свиня', 'редиска', 'дурачок'];
//
// let input=document.createElement('input');
// input.setAttribute('name','inp1');
//
// let btn = document.createElement('button');
// btn.innerText='check';
//
// document.body.append(input,btn);
//
// btn.onclick=function (){
//     let inpvalue = input.value;
//
//     for (let mate of mates) {
//         if (inpvalue === mate){
//             alert('foo dont write this please!Try again');
//             return;
//         }
//     }
//     if (inpvalue){
//         alert('you alright');
//         return;
//     }
// }

//Task 4 - Сворити масив не цензцрних слів.
// // Сnворити інпут текстового типу.
// // Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// // Кинути алерт з попередженням у випадку якщо містить.
// // Перевірку робити при натисканні на кнопку

let mates = ['свиня','редиска','дурачок'];

let input = document.createElement('input');
let btn = document.createElement('button');

document.body.append(input,btn);

btn.innerText='check';

btn.onclick=function (){
    let inputValue = input.value;
    let wordsSentense = inputValue.split(' ');
    console.log(wordsSentense);
    for (let mate of mates) {
            if(wordsSentense.includes(mate)){
                alert('yes');
                inputValue='';
                return;
            }

        }
    if(wordsSentense){
        alert('no');
        inputValue='';

    }
}


