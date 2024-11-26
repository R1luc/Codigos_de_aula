import { Funcionario } from "./Funcionario";
export class empresa{
    private nome: string;
    private Funcionarios: Funcionario[] = []

    adicionarFuncionario(Funcionario: Funcionario){
        this.Funcionarios.push(Funcionario);
        console.log("Funcionario adiconado!")
    }
    listarFuncionarios(){
        console.log("LISTAGEM DE FUNCIONARIOS:");
        this.Funcionarios.forEach(funcionario => {
            console.log(funcionario.descricao());
    })}
}