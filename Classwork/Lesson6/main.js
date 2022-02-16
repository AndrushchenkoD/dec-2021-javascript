// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
//
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
//
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// //Task 1
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
//
// let name = (str, symbol) => {
//     let newArr = [];
//     if (str.includes(symbol)) {
//         let a = str.split(symbol)
//         a.forEach((item) => {
//             if (item) newArr.push(item);
//         })
//         console.log(newArr.join(' '))
//     }
// }
// name(n3, '_');





// //Task 2
// let randomizer = (length,num)=>{
//     let arr=[];
//     for (let i = 0; i < length; i++) {
//         arr.push( Math.floor(Math.random(length)*num));
//     }
//     return arr;
// }
// console.log(randomizer(10,100));

// //Task 3
// let randomizer = (length,num)=>{
//     let arr=[];
//     for (let i = 0; i < length; i++) {
//         arr.push( Math.floor(Math.random()*num));
//     }
//     return arr;
// };
// let brr =randomizer(10,100);
// console.log(brr);
// brr.sort(( a, b )=>a - b);
// console.log(brr);
// brr.sort(( a, b )=>b - a);
// console.log(brr);

// //Task 4
//
// let randomizer = (length,num)=>{
//     let arr=[];
//     for (let i = 0; i < length; i++) {
//         arr.push( Math.floor(Math.random(length)*num));
//     }
//     return arr.filter((a)=>(a%2===0));
// }
// let crr=(randomizer(10,100));
// console.log(crr);

// //Task 5
// let randomizer = (length,num)=>{
//     let arr=[];
//     for (let i = 0; i < length; i++) {
//         arr.push( Math.floor(Math.random(length)*num));
//     }
//     return arr.map(value => value.toString());
// }
// console.log(randomizer(10,100));

// //Task 6
// let nums = [11,21,3];
// let numsSort = (arr,direction)=>{
//        if (direction === '>'){
//         arr.sort((a,b)=>a-b);
//        }else if (direction === '<'){
//            arr.sort((a,b)=>b-a);
//        }
//        return arr;
// }


// //Task 7
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let sortForT6 = coursesAndDurationArray.sort((a,b)=>{
//     return b.monthDuration-a.monthDuration;
// });
// console.log(sortForT6);

// //Task 8
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let filterForT7 = coursesAndDurationArray.filter(function (course){
//    return  course.monthDuration>5;
// });
// console.log(filterForT6);
// //