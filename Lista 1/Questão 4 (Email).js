function email(){
    let email = document.getElementById("email").value
    if(email.includes("@",".")){
        document.getElementById("resultado").innerHTML =
            `Esse é um email válido.`
    }
    else{
        document.getElementById("resultado").innerHTML =
            `Digite um email válido.`
    }
}