function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(Response => Response.json())
    .then(data => displayPost(data))
}

loadPost();
function displayPost(posts){
    console.log(posts)
    const postContainer =document.getElementById('posts')
    for (const post of posts){
        const div =document.createElement('div')
        div.classList.add('post');
        div.innerHTML =`<h3>${post.title}</h3>
           <p>${post.body}</p>
        `
        postContainer.appendChild(div)
    }
   
}