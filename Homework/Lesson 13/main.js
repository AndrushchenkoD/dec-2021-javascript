// console.log('start');
// setTimeout(()=>{
//     let step = 1;
//     console.log('wake up',step);
//     setTimeout(()=>{
//         step ++;
//         console.log('brush my teeth',step);
//         setTimeout(()=>{
//             step++;
//             console.log('have a breakfast',step);
//             setTimeout(()=>{
//  step++;
//                 console.log('go for a walk',step);
//
//             },3500)
//         },3000)
//     },2500)
// },2000);

// let promise = new Promise((resolve,reject)=>{
//     let step = 1;
//     setTimeout(()=>{
//     console.log('wake up',step);
//     step++;
//     resolve(step);
//     },2000);
// }).then((step)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('brush teeth',step);
//             step++;
//             resolve(step);
//         },3000)
//     });
// }).then((step)=>{
//     return  new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('have a breakfast',step);
//             step++;
//             resolve(step);
//         },3500)
//     });
// }).then((step)=>{
//    return  new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('go for a walk',step);
//             step++;
//             resolve(step);
//         },4000)
//     })
// })