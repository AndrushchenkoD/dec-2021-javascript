
// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json();
    })
    .then(posts => {
        console.log(posts);
        let wrap = document.createElement('div');
        wrap.classList.add('wrap');
        for (let post of posts) {
            let divPost=document.createElement('div');
            divPost.classList.add('post')
            divPost.innerHTML=`
            <h1>${post.id}</h1>
            <p>${post.title}</p>
            <p>${post.body}</p>
            
            `;

            let btn1 = document.createElement('button');
            btn1.innerText = 'Click Comments';
             btn1.addEventListener('click',(id)=>{
                 fetch('https://jsonplaceholder.typicode.com/posts/'+post.id+'/comments')
                     .then(response => response.json())
                     .then(comments => {
                         for (let comment of comments) {
                             if (post.id=== comment.postId){
                                 let comDiv = document.createElement('div');
                                 comDiv.classList.add('comDiv');
                                 comDiv.innerHTML=`
                                 <h2>${comment.id}</h2>
                                 <p>${comment.name}</p>
                                 <p>${comment.email}</p>
                                 <p>${comment.body}</p>
                                 `;
document.body.appendChild(comDiv);
                             }
                             btn1.disabled = true;
                         }
                     });
             })
             divPost.append(btn1);
            wrap.append(divPost);
            document.body.append(wrap);
        }
    });






