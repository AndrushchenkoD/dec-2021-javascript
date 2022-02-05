// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// Task 0
{
    let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
}
//Task1
{
u=0
let arr=[2,17,13,6,22,31,45,66,100,-18];
while (u < arr.length){
    console.log(arr[u]);
    u++;
}}
//Task2
{
    let arr=[2,17,13,6,22,31,45,66,100,-18];
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
//Task3
{
let arr=[2,17,13,6,22,31,45,66,100,-18];
u=0;
while (u<arr.length){

    if (arr[u] %2 !== 0){
        console.log(u);
    }
    u++;
}}
//tASK4
{let arr=[2,17,13,6,22,31,45,66,100,-18];
for (let i = 0;i<arr.length;i++){
    if (arr[i] %2 !== 0){
        console.log(i);
    }
}}
//task5
let arr=[2,17,13,6,22,31,45,66,100,-18];
u=0;
while (u<arr.length){
    if (arr[u] %2 === 0){
        console.log(arr[u]);
    }
    u++;
}
//task6
{let arr=[2,17,13,6,22,31,45,66,100,-18];
    for (let i = 0;i<arr.length;i++){
        if (arr[i] %2 === 0){
            console.log(arr[i]);
        }
    }}
//task7
{let arr=[2,17,13,6,22,31,45,66,100,-18];
    for (let i = 0;i<arr.length;i++){
        if (arr[i] %3 === 0){
            arr[i]='okten';
            console.log(arr[i],arr);
        }
    }}
//task8
{let arr=[2,17,13,6,22,31,45,66,100,-18];
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
//task9
// //task 9.1
{
let arr=[2,17,13,6,22,31,45,66,100,-18];
let i=arr.length-1;
while (i>=0){
    console.log(arr[i]);
    i--;
}
}
//Task9.2
{
    let arr=[2,17,13,6,22,31,45,66,100,-18];
    for (let i = (arr.length-1); i >=0 ; i--) {
        console.log(arr[i]);
    }
}
//Task 9.3
{
let arr=[2,17,13,6,22,31,45,66,100,-18];
u=arr.length-1;
while (u>=0){
    if (arr[u] %2 !== 0){
        console.log(u);
    }
    u--;
}}
//Task9.4
{let arr=[2,17,13,6,22,31,45,66,100,-18];
for (let i = (arr.length-1);i>=0;i--){
    if (arr[i] %2 !== 0){
        console.log(i);
    }
}}
9.5
{
let arr=[2,17,13,6,22,31,45,66,100,-18];
u=arr.length-1;
while (u>=0){
    if (arr[u] %2 === 0){
        console.log(arr[u]);
    }
    u--;
}
//Task 9.6
//task6
{let arr=[2,17,13,6,22,31,45,66,100,-18];
    for (let i = (arr.length-1);i>=0;i--){
        if (arr[i] %2 === 0){
            console.log(arr[i]);
        }
    }}
//Task 9.7
{let arr=[2,17,13,6,22,31,45,66,100,-18];
    for (let i = (arr.length-1);i>=0;i--){
        if (arr[i] %3 === 0){
            arr[i]='okten';
            console.log(arr[i],arr);
        }
    }}}