const apiComments = "https://jsonplaceholder.typicode.com/comments"

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
    })

    

}
function displayError(error) {
    const commentList = document.getElementById('comment-list');
    commentList.innerHTML = `<div class="error">Ocorreu um erro: ${error.message}</div>`;
}
