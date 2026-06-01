export enum TipoContato {
  Amigo = 'Amigo',
  Familia = 'Família',
  Trabalho = 'Trabalho',
  Outro = 'Outro'
}

export class Contato {
  private nome: string;
  private telefone: string;
  private email: string;
  private aniversario: string; // armazenamos como string para simplificar
  private tipo: TipoContato | string;

  constructor(
    nome: string,
    telefone: string,
    email: string,
    aniversario: string,
    tipo: TipoContato | string
  ) {
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.aniversario = aniversario;
    this.tipo = tipo;
  }

  // getters
  getNome(): string {
    return this.nome;
  }
  getTelefone(): string {
    return this.telefone;
  }
  getEmail(): string {
    return this.email;
  }
  getAniversario(): string {
    return this.aniversario;
  }
  getTipo(): TipoContato | string {
    return this.tipo;
  }

  // setters
  setNome(nome: string): void {
    this.nome = nome;
  }
  setTelefone(telefone: string): void {
    this.telefone = telefone;
  }
  setEmail(email: string): void {
    this.email = email;
  }
  setAniversario(aniversario: string): void {
    this.aniversario = aniversario;
  }
  setTipo(tipo: TipoContato | string): void {
    this.tipo = tipo;
  }
}
