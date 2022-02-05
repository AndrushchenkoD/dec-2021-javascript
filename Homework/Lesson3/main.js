// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

//Task1
{
    let arr1=[1,7,12,14,21];
    console.log(arr1);
    let arr2=['apple','Banana','peanut','orange','pineapple'];
    console.log(arr2);
    let arr3=[24,'apple',true,false,'banana'];
    console.log(arr3);
}
//Task2
{let arr=[];
    arr[0]=true;
    arr[1]=false;
    arr[2]='banana';
    arr[3]='apple';
    arr[4]=1;
    console.log(arr)
}
//Task3.1
{for (let i = 0;i<10;i++) {
    document.write(`<div>вивести 10 блоків</div>`);}}
//
{   for (let i = 0;i<10;i++) {
    document.write(`<div>вивести 10 блоків ${i}</div>`);}
}
//
{
    let i=0;
    while (i < 20) {
        document.write(`<h1>вивести 20 блоків</h1>`);
    i++;
    }
}
//
{
    let i=0;
    while (i < 20) {
        document.write(`<h1>вивести 20 блоків${i}</h1>`);
        i++;
    }
}
//Task3.2
{
    let arr = [1,54,321,0.5,0.22222222,4545,314,3.14,4000000,10];
for(i=0;i<10;i++){
    console.log(arr[i]);
}
}
//
{
    let arr = ['ivan','dima','petya','fedya','stepan','max','mark','john','anjey','andruxa'];
    for(i=0;i<10;i++){
        console.log(arr[i]);
    }
}
//
{
    let arr = [8,'dima','petya','fedya',1,true,2,false,332,3.14];
    for(i=0;i<10;i++){
        console.log(arr[i]);
    }
}
//
{
    let arr = [8,'dima','petya','fedya',1,true,2,false,332,3.14];
    for(i=0;i<10;i++){
        if(typeof arr[i]==='number'){
            console.log(arr[i]);
        }
    }
}
//
{
    let arr = [8,'dima','petya','fedya',1,true,2,false,332,3.14];
    for(i=0;i<10;i++){
        if(typeof arr[i]==='string'){
            console.log(arr[i]);
        }
    }
}
//
{
    let arr = [8,'dima','petya','fedya',1,true,2,false,332,3.14];
    for(i=0;i<10;i++){
        if(typeof arr[i]==='boolean'){
            console.log(arr[i]);
        }
    }
}
//Task 3.3
{
    let ab=[];
    ab[0]=12;
    ab[1]=22;
    ab[2]=45;
    ab[3]=true;
    ab[4]=56;
    ab[5]=false;
    ab[6]='banana';
    ab[7]='apple';
    ab[8]=true;
    ab[9]=false;
    console.log(ab);
}
//
{for (let i =0;i<10;i++)
{
    console.log('step:',i);
    document.write('step:',i);
}
}
//
{for (let i =0;i<100;i++)
{
    console.log('step:',i);
    document.write('step:',i);
}
}
//
// {
    {for (let i =0;i<100;i++)
    {
        console.log('step:',i);
        document.write('step:',i);
        i+=1;
    }
}
//
{for (let i =0;i<100;i++)
{
    if(i%2===0){
        console.log('step:',i);
    }}
}
//
{for (let i =0;i<100;i++)
{
    if(i%2!==0){
        console.log('step:',i);
    }}
}