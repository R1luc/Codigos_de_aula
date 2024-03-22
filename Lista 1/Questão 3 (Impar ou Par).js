function impopar(){
    let numero = document.getElementById("numero").value
    if(numero%1 != 0){
        document.getElementById("resultado").innerHTML =
            `Digite um número inteiro!`
    }
    else{
        if(numero%2 == 0){
            document.getElementById("resultado").innerHTML =
                `${numero} é um número par!`
        }
        else{
            document.getElementById("resultado").innerHTML =
                `${numero} um número ímpar!`
        }
    }
} 