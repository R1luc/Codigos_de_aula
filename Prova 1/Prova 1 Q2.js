function calcular(){
    let x1 = document.getElementById("x1").value
    let y1 = document.getElementById("y1").value
    let x2 = document.getElementById("x2").value
    let y2 = document.getElementById("y2").value
    let distancia = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
    document.getElementById("resultado").innerHTML =
        `A distância entre P1(${x1},${x2}) e P2(${y1},${y2}) é igual a <b>${distancia.toFixed(2)}</b>`
}