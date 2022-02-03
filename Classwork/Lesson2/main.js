// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
//
//
// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
//
//
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
//
// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else
//
//
// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
//
//
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

//Task1
{
    let a=prompt('Enter First number');
    let b=prompt('Enter Second NUmber');
    if(a>b){
        console.log(a);
    }else if(b>a){
        console.log(b);
    }else if(b==a){
        console.log(a,'=',b)
    }
}

//Task2
{
    let x=prompt('number of yours House');
    if(x > 0 && x <=20){
        console.log('Your house is in first neighbourhood');
    }else if( x>=21 && x <=48){
        console.log('Your house is in second neighbourhood');
    }else if(x>=49 && x<=90){
        console.log('Your house is in third neighbourhood')
    }else{
        console.log('You are noy my neighbor run away:)))')
    }
}

//Task3
let x=prompt('Enter a number');
if(x%10==0){
    console.log('True');
}else {
    console.log('false')
}

//Task4
{
    let x = 3;//Хотів з пропт але не вийшло як можна з промпт???
    if(typeof x === 'number'){
        console.log('1')
    }else if (typeof x === 'string'){
        console.log('2')
    }else if(typeof x ==='boolean'){
        console.log('3')
    }else if (typeof x ==='object'){
        console.log('3')
    }else{
        console.log('else')
    }
}

//Task5
{
    let temperature = prompt('Enter temperature ');
    if (temperature < 10){
        console.log('Сидимо вдома і вчимося ОНЛАЙН');
    }else if(temperature>22){
        console.log('Сидимо вдома і вчимося ОНЛАЙН');
    }else {console.log('Йдемо Вчитися!!!');}
}

//Task6
{
    let priceNumber=prompt('Enter number from 1 to 5');
    switch (priceNumber) {
        case '1':
            console.log('You win a car');
            break;
        case '2':
            console.log('You win a phone');
            break;
            case '3':
            console.log('You win a moto');
            break;
        case '4':
            console.log('You win a MacBook');
            break;
        case '5':
            console.log('You win a MyHeard');
            break;
        default:
            console.log('You enter a wrong number');
            break;
    }
}
