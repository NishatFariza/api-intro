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
        div.classList.add('post');//css style add and
        div.innerHTML =`<h3>${post.title}</h3> 
           <p>${post.body}</p>
        `
        postContainer.appendChild(div)// container er moddhe div ta pathiye dilam
    }
   
}


//add post
function addPost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(res => res.json())
    .then((data) => console.log(data));
}