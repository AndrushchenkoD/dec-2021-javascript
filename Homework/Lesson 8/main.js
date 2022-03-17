// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
// -- отримує текст з блоку з id "rules"
// -- замініть текст параграфа з id 'content' на будь-який інший
// -- замініть текст параграфа з id 'rules' на будь-який інший
// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// -- поміняти колі р тексту у всіх елементів fc_rules на червоний

//Task 1 -- отримує текст з параграфа з id "content"

let contById =  document.getElementById('content');
console.log(contById);

//Task 2 -- отримує текст з блоку з id "rules"

let rulesBuId = document.getElementById('rules');
console.log(rulesBuId);

//Task 3 -- замініть текст параграфа з id 'content' на будь-який інший

contById.innerHTML = 'bla bla test 1';

//Task 4 -- замініть текст параграфа з id 'rules' на будь-який інший

rulesBuId.innerHTML = 'bla bre bru test2';

//Task 5 -- змініть кожному елементу колір фону на червоний

{
let elementBg= document.body.children;
for (const elementBgElement of elementBg) {
    elementBgElement.style.background = 'red';
}}

//Task 6 -- змініть кожному елементу колір фону на синій

{
let elementBg = document.body.children;
for (const elementBgElement of elementBg) {
    elementBgElement.style.background = 'blue';
}}

//Task 7 -- отримати весь список класів елемента з id=rules і вивести їх в console.log

{
    let clasesRule = document.getElementById('rules');
    console.log(clasesRule.classList);
}

//Task 8 -- поміняти колі р тексту у всіх елементів fc_rules на червоний

let fcRules = document.getElementsByClassName('fc_rules');
for (const fcRule of fcRules) {
    fcRule.style.color = 'red';
}