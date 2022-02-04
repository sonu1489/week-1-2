// const posts=[
//     {title:'post one', body:'this is post one'},
//     {title:'post two', body:'this is post two'}
// ]
// function getPosts(){
// setTimeout(()=>{
//     let output='';
//     posts.forEach((post, index)=>{
//         output +=`<li>${post.title}</li>`;
//     });
//     document.body.innerHTML= output;
// }, 1000);
// }

//  function createPost(post, callback) {
//     setTimeout(()=>{
//         posts.push(post);
//         callback();
//     }, 2000);
// }

// createPost({title: 'post three', body:'this is post three'}, getPosts);

// async / await
// async function init(){
//     await createPost({title: 'post three', body:'this is post three'});
//     getPosts();
// }
// init();

//******** */ async  /  await /  fetch

async function fetchUsers(){
    const res= await fetch ('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();
    console.log(data);
}
fetchUsers();


// *********promise all

// const promise1 = promise.resolve('hello world');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject)=>
// setTimeout(resolv,2000,'goodbye')
// );
// const promise4 = fetch
// ('https://jsonplaceholder.typicode.com/users').then(res=>res.json());

// Promise.all([promise1, promise2, promise3,promise4]).then(values=>console.log(values));