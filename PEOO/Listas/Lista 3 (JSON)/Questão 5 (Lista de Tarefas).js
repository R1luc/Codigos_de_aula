function listar() {
    const user = document.getElementById("user_id").value
    const url = `https://jsonplaceholder.typicode.com/user/${user}/todos`

    fetch(url)
        .then(response => response.json())
        .then(todos => listar_atividades(todos))       
}

function listar_atividades(todos) {
    const todoList = document.getElementById("atividades")
    todoList.innerHTML = ""
    
    todos.forEach(todo => {
        const todoElement = document.createElement('li');
        todoElement.innerHTML = `
                <p>${todo.title}</p
            `;
        if (todo.completed){
            todoElement.style.color = "green"
        }
        else{
            todoElement.style.color = "red"
        }
        todoList.appendChild(todoElement);
        }
    )
}