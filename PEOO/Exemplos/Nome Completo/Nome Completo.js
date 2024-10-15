function nome(){
    let nome = document.getElementById("nome").value 
    let sobrenome = document.getElementById("sobrenome").value
    document.getElementById("nome completo").innerHTML =
        `Seu nome é ${nome} ${sobrenome}`
}