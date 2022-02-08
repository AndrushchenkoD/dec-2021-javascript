// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// - створити функцію яка повертає найбільше число з масиву
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//Task1
{
    function nummin (n1, n2, n3){
    if(n1<n2 && n1<n3){
        console.log('num1 is a minimal number');
    }else if(n2<n1 && n2<n3){
        console.log('num2 is a minimal number');
        }else{
        console.log('num3 is a minimal number');
    }
    }
    nummin(100,29,17);
}
//Task2
{
    function nummax (n1, n2, n3){
        if(n1>n2 && n1>n3){
            console.log('num1 is a maximal number');
        }else if(n2>n1 && n2>n3){
            console.log('num2 is a maximal number');
        }else{
            console.log('num3 is a maximal number');
        }
    }
    nummax(100,29,19);
}
//Task3

// let maxArray = [200,3,4,5,6,10,40000,3,600]
// function arrayMax(array) {
//     let max = array[0];
//     for (const element of array) {
//         if(element > max){
//             max = element;
//         }
//     }
//     return max;
// }
// document.write(`<h2>Найбільший елемент масиву: ${arrayMax(maxArray)}</h2>`)
{
    let maxarr =[21,22,1,3,-1,-10,1998,-342]
    function arrmax(arr) {
        let max=arr[0];
        for (const arrElement of arr) {
            if (arrElement>max){
                max=arrElement;
            }
        }
        return max;
    }
    document.write(`<h2>Найбільший елемент масиву: ${arrmax(maxarr)}</h2>`)
}
//Task4
{
    let minarr=[21,22,1,3,-1,-10,1998,-342]
    function arrmin(arr){
        let min=arr[0];
        for (const arrElement of arr) {
            if (min>arrElement){
                min=arrElement;
            }
        }
        return min;
    }
    document.write(`<h2>Найменьший елемент масиву: ${arrmin(minarr)}</h2>`)
}
//Task5
{
    let sumarr = [1, 2, 3, 4, 5, 6]
    function arrsum(arr){
        let sum=0;
        for (const arrElement of arr) {
            sum = sum+arrElement;
        }
return sum;
    }
    document.write(`<h2>Сума: ${arrsum(sumarr)}</h2>`)
}
//Task6
{
    let sumarr = [1, 2, 3, 4, 5, 6]
    function midarr(arr){
        let sum=0;
        for (const arrElement of arr) {
            sum = sum+arrElement;
        }
        return sum/arr.length
    }
    document.write(`<h2>Сума: ${midarr(sumarr)}</h2>`)
}
//Task7
{
    function Minmax(arg) {
        let min = arguments[0];
        let max = arguments[0];
        for (const element of arguments) {
            if (min > element) {
                min = element;
            }
            if (element > max) {
                max = element;
            }
        }
        console.log('max', max);
        return min;
    }
        document.write(`<h1>min ${Minmax(100,90,54,-2,40000)}</h1>`);
    }
//Task8
        {
            function randomizer(size) {
                let rarr = [];
                for (let i = 0; i < size; i++) {
                    rarr.push(Math.floor(Math.random() * 100));
                }
                return rarr;
            }

            document.write(randomizer(7));
        }
//Task9
        {
            function randomizer(size, limit) {
                let rarr = [];
                for (let i = 0; i < size; i++) {
                    rarr.push(Math.floor(Math.random() * limit));
                }
                return rarr;
            }

            document.write(randomizer(71, 1000));
        }
//Task10
        {
            function reverse(arr) {
                for (let i = arr.length - 1; i >= 0; i--) {
                    let arrElement = arr[i];
                    console.log(arr[i]);
                }
            }

            let array = reverse([1, 2, 3, true, false, 'apple', 23, 'banana']);}
