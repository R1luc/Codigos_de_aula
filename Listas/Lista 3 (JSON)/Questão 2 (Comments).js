const url_posts = 'https://jsonplaceholder.typicode.com/posts';
fetch(url_posts)
  .then(response => response.json())
  .then(posts => list_posts(posts));

function list_posts(posts) {
  let select = document.getElementById('post');
  for (let post of posts) {
    let option = new Option(post.title, post.id);
    select.options[select.options.length] = option;
  }
}

function mostrar_posts() {
let post_id = document.getElementById('post').value;
let apiComments = `https://jsonplaceholder.typicode.com/comments?postId=${post_id}`;

fetch(apiComments)
    .then(response => response.json())
    .then(comments => displayComments(comments))
    .then(error => displayError(error))

function displayComments(comments){
    const commentsList = document.getElementById("comment-list")
    commentsList.innerHTML = ''
    
    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.innerHTML = `
                <p>PostID: ${comment.postId}</p>
                <p>Id: ${comment.id}</p>
                <p>Name: ${comment.name}</p>
                <p>Email: ${comment.email}</p>
                <p>Body: ${comment.body}</p>
            `;
        commentsList.appendChild(commentElement);
        }
    )
}
function displayError(error) {
    const commentList = document.getElementById('comment-list');
    commentList.innerHTML = `<div class="error">Ocorreu um erro: ${error.message}</div>`;
}
}