
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

//Task 1

// function Car (model,producer,yearofproduction,maxSpeed,capacityEngine){
//
//     this.model=model;
//     this.producer=producer;
//     this.yearofproduction=yearofproduction;
//     this.maxSpeed=maxSpeed;
//     this.capacityEngine=capacityEngine;
//  this.drive=function (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//  this.info=function (){
//      for (let key in this) {
//          if(typeof this[key] !== 'function'){
//          console.log(`${key} - ${this[key]}`)}
//      }
//  }
//  this.increaseMaxSpeed = function (newSpeed){
//      console.log(this.maxSpeed+newSpeed);
//     };
//  this.changeYear = function (newValue){
//      console.log(this.yearofproduction = newValue);
//  }
//  this.addDriver = function (driver){
//      console.log(this.driver = driver);
//  }
// }
// let addCar = new Car('Peugeot', 'France', 2000, 270, 2.0);
// console.log(addCar);
// addCar.drive();
// addCar.info();
// addCar.increaseMaxSpeed(30);
// addCar.changeYear(2003);
// addCar.addDriver('ivan');

//Task 2

// class Car{
//     constructor(model, producer, yearofproduction, maxSpeed, capacityEngine) {
//         this.model = model;
//         this.producer = producer;
//         this.yearofproduction = yearofproduction;
//         this.maxSpeed = maxSpeed;
//         this.capacityEngine = capacityEngine;
//         this.drive=function (){
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//         };
//         this.info=function (){
//             for (let key in this) {
//                 if(typeof this[key] !== 'function'){
//                     console.log(`${key} - ${this[key]}`)}
//             }
//         }
//         this.increaseMaxSpeed = function (newSpeed){
//             console.log(this.maxSpeed+newSpeed);
//         };
//         this.changeYear = function (newValue){
//             console.log(this.yearofproduction = newValue);
//         }
//         this.addDriver = function (driver){
//             console.log(this.driver = driver);
//         }
//     }
// }
// let addCar = new Car('Peugeot', 'France', 2000, 270, 2.0);
// console.log(addCar);
// addCar.drive();
// addCar.info();
// addCar.increaseMaxSpeed(30);
// addCar.changeYear(2003);
// addCar.addDriver('ivan');

//Task 3

class popelushka{
    constructor(Popname, Age, Footsize) {
        this.Popname = Popname;
        this.Age = Age;
        this.Footsize = Footsize;
    }
}
let popelushkaArray = [
    new popelushka('igor', 22, 46),
    new popelushka('nina', 21, 25),
    new popelushka('ira', 24, 30),
    new popelushka('lesia', 26, 31),
    new popelushka('nadia', 29, 32),
    new popelushka('genia', 90, 58),
    new popelushka('lola', 87, 34),
    new popelushka('goha', 34, 39),
];
console.log(popelushkaArray);

class princ{
    constructor(princName, Age, Tuflya) {
        this.princName = princName;
        this.Age = Age;
        this.Tuflya = Tuflya;
    }
}
let prince = new princ('Stefkoo', 45, 46);

let lubow= (popelushkaArray,prince)=>{
    for (let item of popelushkaArray) {
        if (item.Footsize === prince.Tuflya){
            return `tv${item.Popname}`;
        }
    }};
console.log(lubow(popelushkaArray,prince));

const emptyPrincess = popelushkaArray.find((item) => item.footsize === prince.findShose);
console.log(emptyPrincess);