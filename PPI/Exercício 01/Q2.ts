function calcular_media(media1: number, media2: number, media3: number, media4: number): string {
    const media = (media1 + media2 + media3 + media4) / 4

    if (media >= 60) {
        return 'Aprovado'
    } else {
        const media_necessaria = 120 - media
        return `Reprovado. Precisa tirar ${media_necessaria.toFixed(2)} na final`
    }
}

console.log(calcular_media(60, 70, 50, 40))
