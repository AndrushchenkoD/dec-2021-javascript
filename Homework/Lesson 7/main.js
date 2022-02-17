// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// )- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

//Task 1
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname, email, phone) {
    this.id = id,
        this.name = name,
        this.surname = surname,
        this.email = email,
        this.phone = phone
}

//Task 2 // створити пустий масив, наповнити його 10 об'єктами new User(....)
let user1 = new User(1,'petya','pupkin','pup.com',+3809090909);
let user2 = new User(2,'petya','pupkin','pup.com',+3809090909);
let user3 = new User(3,'petya','pupkin','pup.com',+3809090909);
let user4 = new User(4,'petya','pupkin','pup.com',+3809090909);
let user5 = new User(5,'petya','pupkin','pup.com',+3809090909);
let user6 = new User(6,'petya','pupkin','pup.com',+3809090909);
let user7 = new User(7,'petya','pupkin','pup.com',+3809090909);
let user8 = new User(8,'petya','pupkin','pup.com',+3809090909);
let user9 = new User(9,'petya','pupkin','pup.com',+3809090909);
let user10 = new User(10,'petya','pupkin','pup.com',+3809090909);
let usersarray=[user1,user2,user4,user3,user6,user5,user7,user8,user9,user10];
console.log(usersarray);
//Task 3 Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filterArr = usersarray.filter((user)=>{
    if(user.id %2 === 0){
        return user;
    }});
console.log(filterArr);
//Task4 Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(usersarray.sort((a,b)=>a.id-b.id));
//Task 5- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів
class Client{
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let client1 = new Client(1,'petya','pupkin','pup.com',+3809090909,['pipka','pupka']);
let client2 = new Client(2,'petya','pupkin','pup.com',+3809090909,['kuku']);
let client3 = new Client(3,'petya','pupkin','pup.com',+3809090909,['kuku','pipku','pupku']);
let client4 = new Client(4,'petya','pupkin','pup.com',+3809090909,['okuni','chai','tea','sholders']);
let client5 = new Client(5,'petya','pupkin','pup.com',+3809090909,['milka','roshen']);
let client6 = new Client(6,'petya','pupkin','pup.com',+3809090909,['phone','iphone','sumsung','xiaomi','redmi']);
let client7 = new Client(7,'petya','pupkin','pup.com',+3809090909,['pipku','kuku']);
let client8 = new Client(8,'petya','pupkin','pup.com',+3809090909,['kuku','pupka']);
let client9 = new Client(9,'petya','pupkin','pup.com',+3809090909,['milku']);
let client10 = new Client(10,'petya','pupkin','pup.com',+3809090909,['router']);
let clientsarray = [client1,client2,client3,client4,client5,client6,client7,client8,client9,client10];
//Task 6  - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню.
let sortClients= clientsarray.sort((a,b)=> a.order.length - b.order.length );
console.log(sortClients);