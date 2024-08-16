const apiPosts = "https://jsonplaceholder.typicode.com/posts"
const apiUsers = 'https://jsonplaceholder.typicode.com/users';

let users = ['usuarios']

fetch(apiUsers)
    .then(response => response.json())
    .then(json_data => {
        json_data.forEach(user => {
            users.push(user.name)
        })
    })

fetch(apiPosts)
    .then(response => response.json())
    .then(posts => displayPosts(posts))
    .catch(error => displayError(error))
    
/*fetch(apiUrl)
    .then(response => response.json())
    .then(users => displayUsers(users))
    .catch(error => displayError(error));*/

function displayPosts(posts) {
    const postList = document.getElementById('post-list');
    postList.innerHTML = '';
    
    posts.forEach(post => {
        const postElement = document.createElement('div');
        //userElement.classList.add('user');
        postElement.innerHTML = `
                <h2>User: @${users[post.userId]} #${post.id}</h2>
                <p>Id: ${post.userId}</p>
                <p>Titulo: ${post.title}</p>
                <p>Texto: ${post.body}</p>
            `;
        postList.appendChild(postElement);
    });
}
    
function displayError(error) {
    const postList = document.getElementById('post-list');
    postList.innerHTML = `<div class="error">Ocorreu um erro: ${error.message}</div>`;
}