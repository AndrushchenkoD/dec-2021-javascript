// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
//
// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

//Task 1 -створити форму з інпутами для name та age.
// //При відправці форми записати об'єкт в localstorage

// let f1=document.forms.f1;
// let usernameInp=document.forms.f1.username;
// let ageInp=document.forms.f1.age;
// let btn=document.getElementById('btn1');
// let key='key';
//
// btn.onclick=function (){
//     let user={
//         usernameInp:usernameInp.value,
//         ageInp:ageInp.value
//     }
//     localStorage.setItem(key,JSON.stringify(user));
// }
//


//Task 2 -створити форму з інпутами для model,type та volume автівки.
// //при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

// let cars= JSON.parse(localStorage.getItem('cars')) || [];
// let f2=document.forms.f2;
// f2.onsubmit=function (e){
//     e.preventDefault();
//     let model=e.target.model.value;
//     let type=e.target.type.value;
//     let volume=e.target.volume.value;
//
//     let car={model,type,volume}
//     cars.push(car);
//     localStorage.setItem('cars',JSON.stringify(cars));
// }





