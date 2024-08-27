function repetir(){
    let texto = document.getElementById("texto").value 
    let numero = document.getElementById("numero").value
    let textofinal = texto
    if(numero<=0){
        document.getElementById("resultado").innerHTML =
            `Digite um número maior do que zero!!!`
    }
    else{
        for(i = 0; i < numero; i++){
            document.getElementById("resultado").innerHTML =
                `${textofinal}`
            textofinal = textofinal + texto
        }
    }
}
