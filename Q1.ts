let altura: number = 5
let raio: number = 10

function cilindro(h: number, r: number): number {
    const volume = Math.PI * r ** 2 * h
    return volume
}

console.log(cilindro(altura, raio))
