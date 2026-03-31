function calcular_media(media1, media2, media3, media4) {
    var media = (media1 + media2 + media3 + media4) / 4;
    if (media >= 60) {
        return 'Aprovado';
    }
    else {
        var media_necessaria = 120 - media;
        return "Reprovado. Precisa tirar ".concat(media_necessaria.toFixed(2), " na final");
    }
}
console.log(calcular_media(60, 70, 50, 40));
