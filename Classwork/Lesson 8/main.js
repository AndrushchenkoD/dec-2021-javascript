// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
// b) робить шириниу елементу ul 400px
// c) робить шириниу всіх елементів з класом linkList шириною 50%
// d) отримує текст який зберігається в елементі з класом listElement2
// e) отримує всі елементи li та змінює ім колір фону на сірий
// f) отримує всі елементи 'a' та додає їм клас anchor
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// l) отримати елементи p та змінити їм padding на 20px
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// //Task a a) додає клас з назвою групи, елементу з ід main_header
//
// let addClass = document.getElementById('main_header');
// addClass.classList.add('dec-2022');
// console.log(addClass);

// //Task b b) робить шириниу елементу ul 400px
//
// let ulk = document.getElementsByTagName('ul');
// for (const ulkElement of ulk) {
//     ulkElement.style.width = '400px';
// }
// //Task c c) робить шириниу всіх елементів з класом linkList шириною 50%
//
// let widthLink = document.getElementsByClassName('linkList');
// for (const widthLinkElement of widthLink) {
//     widthLinkElement.style.width = '50%';
// }

// //Task d d) отримує текст який зберігається в елементі з класом listElement2
//
// let listEl2txt = document.getElementsByClassName('listElement2');
// console.log(listEl2txt);
// listEl2txt[0].innerHTML = '<a href=""><b>NEW TEXT</b></a>'

// //Task e e) отримує всі елементи li та змінює ім колір фону на сірий
//
// let libg = document.getElementsByTagName('li');
// for (const libgElement of libg) {
//     libgElement.style.background='grey';
// }

// //Task f f) отримує всі елементи 'a' та додає їм клас anchor
//
// let anch = document.getElementsByTagName('a');
// for (const anch1 of anch) {
//     anch1.classList.add('anchor');
// }
// console.log(anch);

// //Task g g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//
// let g = document.getElementsByTagName('a');
// for (const gElement of g) {
//     if (gElement.innerText === 'link3'){
//         gElement.style.fontSize='40px';
//     }
// }

// //Task h h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//
// let h = document.getElementsByTagName('a');
// console.log(h);
// for (const hElement of h) {
//     let className = hElement.innerText;
//     hElement.classList.add(`element_${className}`);
// }


// //Task i i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//
// let subCol = document.getElementsByClassName('sub-header');
// for (const subColElement of subCol) {
//     subColElement.style.color = prompt('Enter color: (red,green, blue...)');
// }

// //Task j j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//
// let j = document.getElementsByClassName('sub-header');
// for (const jElement of j) {
//     if (jElement.innerText === 'content 2 segment'){
//         jElement.style.color=prompt('Enter color');
//     }
// }

// //Task k k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//
// let renameCont1 = document.getElementsByClassName('content_1');
// for (const renameCont1Element of renameCont1) {
//     renameCont1Element.innerText = prompt('Enter txt');
// }

// //Task l l) отримати елементи p та змінити їм padding на 20px
//
// let pPadd = document.getElementsByTagName('p');
// for (const pPaddElement of pPadd) {
//     pPaddElement.style.padding='20px';
// }

// //Task m m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let txtM = document.getElementsByClassName('text2');
// txtM[0].innerText = 'dec-2022';