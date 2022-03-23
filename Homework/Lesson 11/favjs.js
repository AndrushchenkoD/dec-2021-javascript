let newArr=JSON.parse(localStorage.getItem('users'));
console.log(newArr);
let divfav=document.getElementById('favdiv');
divfav.innerHTML=JSON.stringify(newArr);