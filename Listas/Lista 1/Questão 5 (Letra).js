function letra(){
    let palavra = document.getElementById("palavra").value
    let letra = document.getElementById("letra").value
    let palavram = palavra.toLowerCase()
    let letram = letra.toLowerCase()
    let contador =  0
    for(i = 0; i < palavram.length; i++){
        if(palavram[i] == letram)
            contador++
    }
    document.getElementById("resultado").innerHTML =
        `A palavra ${palavra} possui ${contador} letras "${letra}"`
}