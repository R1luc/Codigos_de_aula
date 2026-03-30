function calcularDiferenca(data: Date): number {
    const referencia = new Date('2025-01-01')
    
    const diff = data.getTime() - referencia.getTime()
    
    const dias_passados = Math.floor(diff / (1000 * 60 * 60 * 24))
    
    return dias_passados
}

const data = new Date
console.log(calcularDiferenca(data))
