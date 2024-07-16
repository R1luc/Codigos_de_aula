function criar(){
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value 
    let senha = document.getElementById("senha").value 
    let conf_senha = document.getElementById("conf_senha").value
    const regex = /^(?=.*[a-zA-Z\d]).{8,}$/
    if(!nome){
        document.getElementById("cadastro").innerHTML =
            `Preencha o nome!`
    }
    else{
        if(email.includes("@") && email.includes(".")){
            if(regex.test(senha)){
                if(senha == conf_senha){
                    document.getElementById("cadastro").innerHTML =
                        `Seu cadastro foi concluído com sucesso!`
                }
                else{
                    document.getElementById("cadastro").innerHTML =
                        `A senha e a confirmação de senha estão diferentes!`
                }
            }
            else{
                document.getElementById("cadastro").innerHTML =
                    `Digite uma senha com no mínimo 8 caracteres!`
            }   
        }
        else{
            document.getElementById("cadastro").innerHTML =
                `Digite um email válido!`
        }
    }
}