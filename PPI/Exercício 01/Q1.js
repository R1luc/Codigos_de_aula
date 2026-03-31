var altura = 5;
var raio = 10;
function cilindro(h, r) {
    var volume = Math.PI * Math.pow(r, 2) * h;
    return volume;
}
console.log(cilindro(altura, raio));
