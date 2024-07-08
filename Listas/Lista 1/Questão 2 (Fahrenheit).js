function converter(){
    let tempC = document.getElementById("celso").value
    let tempF = tempC*1.8 + 32
    document.getElementById("resultado").innerHTML =
        tempC + "C° em Fahrenheit é igual a: " + tempF + "F°"
}