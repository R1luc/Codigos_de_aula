function senha(){
    let senha = document.getElementById("senha").value
    let senhas = senha.split("")
    if(senhas.length >= 8){
        document.getElementById("resultado").innerHTML =
            `Sua senha é válida`
    }
    else{
        document.getElementById("resultado").innerHTML =
            `Digite uma senha com no mínimo 8 caracteres`
    }   
}