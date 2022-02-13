// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
//
//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
//
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// //Task 1.1
// let lone='hello world';
// console.log(lone.length);
//
// //Task 1.2
// let ltwo='lorem ipsum';
// console.log(ltwo.length);
//
// //Task 1.3
// let lthree='javascript is cool';
// console.log(lthree.length);

// //Task 2.1
// let str1='hello world';
// let oneUp =str1.toLocaleUpperCase();
// console.log(oneUp);
//
// //Task 2.2
// let str2='lorem ipsum';
// let twoUp =str2.toLocaleUpperCase();
// console.log(twoUp);
//
// //Task 2.3
// let str3='javascript is cool';
// let threeUp =str3.toLocaleUpperCase();
// console.log(threeUp);

// //Task 3.1
// let str1='HELLO WORLD';
// let oneUp =str1.toLocaleLowerCase();
// console.log(oneUp);
//
// //Task 3.2
// let str2='LOREM IPSUM';
// let twoUp =str2.toLocaleLowerCase();
// console.log(twoUp);
//
// //Task 3.3
// let str3='JAVASCRIPT IS COOL';
// let threeUp =str3.toLocaleLowerCase();
// console.log(threeUp);

// //Task 4
// let str = ' dirty string   ';
// let clearStr =str.trim();
// console.log(clearStr);

// // Task5
// //let str = 'Каждый охотник желает знать';
// //let arr = stringToarray(str);
// //document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
//
// let strToarr = (str)=>{
//     return str.split(' ');
// }
// let str = 'Каждый охотник желает знать';
// let arr = strToarr(str);
// console.log(arr);
// document.write(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// //Task6
// // - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// //     let str = 'Каждый охотник желает знать';
// // document.writeln(delete_characters(str, 7)); // Каждый

// let delCh=(str,index)=>str.substr(0,index);
// let str = 'Каждый охотник желает знать';
// document.write(delCh(str,7));

// // Task 7
// let str = 'HTML JavaScript PHP';
// let tirePlusUpper = (string)=>{
//   let a=  string.split(' ').join('-').toLocaleUpperCase()
//     return a;
// }
// console.log(tirePlusUpper(str));

// //Task 8
// let firstLetter = (str)=>{
//     if(!str)return str;
//     return str[0].toUpperCase(0)+str.slice(1);
// }
// document.write(firstLetter('amamamamamamamama'));

//task 9
let capitalize = (str)=>{
    return str
        .split(' ')
        .map(word=>word.charAt(0)
            .toUpperCase()+word.slice(1))
        .join(' ');
}
document.write(capitalize('apap apapap ap'));