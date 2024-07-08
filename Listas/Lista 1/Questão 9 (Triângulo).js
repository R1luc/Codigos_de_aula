function area(){
    let altura = document.getElementById("altura").value
    let largura = document.getElementById("largura").value
    let area = (altura*largura)/2
    document.getElementById("resultado").innerHTML =
        `A área de um triângulo com essas características é igual á: ${area}`
}