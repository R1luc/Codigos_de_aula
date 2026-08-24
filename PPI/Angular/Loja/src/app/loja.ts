export type Loja = {
      id: number,
      nome: string,
      marca: string,
      descricao: string,
      preco: number,
      foto: string,
      quantidade: number
}

export type LojaResponse = {
    dados: Loja[]
}