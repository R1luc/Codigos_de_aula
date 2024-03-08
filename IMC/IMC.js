function submeter() {
    let altura = document.getElementById("altura").value;
    let massa = document.getElementById("massa").value;
    let imc = Math.ceil(massa/(altura**2))
    let classe;
    if (imc < 18.5) classe = "Magreza";
    else if (18.5 < imc < 24.9) classe = "Normal";
    else if (24.9 < imc < 29.9) classe = "Sobrepeso";
    else if (29.9 < imc < 39.9) classe = "Obesidade";
    else classe = "Obesidade Grave";

    document.getElementById("resultado").innerHTML = 
        "<h3>Seu IMC é:</h3>" +
        "<p>" + imc + "</p>" +
        "<h1> Classificação:" + classe + "</h1>";

}
