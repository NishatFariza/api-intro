function loadData (){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
}
//user data
function loadUsers(){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response =>response.json())
   .then(data =>displayUsers(data))
}

function displayUsers(data){
    console.log(data)
    const ul =document.getElementById('users');
  for(const user of data){
      console.log(user.name);
      const li =document.createElement('li');
      li.innerText = `Name: ${user.name} Email: ${user.email}`;
      ul.appendChild(li);
  }
}

//post data
function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data =>console.log(data))
}
// loadPost()

//comment data
document.getElementById('load-comment').addEventListener('click', function(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => console.log(data))
})