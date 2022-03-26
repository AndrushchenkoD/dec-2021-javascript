// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => {
//         return response.json();
//     })
//     .then(posts => {
//         console.log(posts);
//         let wrap = document.createElement('div');
//         wrap.classList.add('wrap');
//         for (let post of posts) {
//             let divPost = document.createElement('div');
//             divPost.classList.add('post');
//             divPost.innerHTML=`
//             <h3>${post.id}</h3>
//             <p>${post.title}</p>
//             <p>${post.body}</p>
//             `;
//             wrap.appendChild(divPost);
//             document.body.appendChild(wrap);
//         }
//     });
//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => {
        return response.json();
    })
    .then(comments => {
        console.log(comments);
        let wrap = document.createElement('div');
        wrap.classList.add('wrap');
        for (let comment of comments) {
            let divCom=document.createElement('div');
            divCom.classList.add('post');
            divCom.innerHTML=`
            <h1>${comment.id}</h1>
            <p>${comment.postId}</p>
            <p>${comment.name}</p>
            `;
            wrap.appendChild(divCom);
            document.body.appendChild(wrap);
        }
    })
