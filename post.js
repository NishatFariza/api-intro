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
        console.log(post.title)
    }

}