function calcularDiferenca(data) {
    var referencia = new Date('2025-01-01');
    var diff = data.getTime() - referencia.getTime();
    var dias_passados = Math.floor(diff / (1000 * 60 * 60 * 24));
    return dias_passados;
}
var data = new Date;
console.log(calcularDiferenca(data));
