var listaProdutos = [];
var emAlteracao = false;

function gravarProduto(event) {
    event.preventDefault();
    let nomeProduto = document.getElementById("nomeProdutos").value;
    let qtdProduto = document.getElementById("qtdProdutos").value;
    let valorProduto = document.getElementById("valorProdutos").value;
    let fornecedorProduto = document.getElementById("fornecedorProdutos").value;

    let produto = {
        nomeProduto: nomeProduto,
        qtdProduto: qtdProduto,
        valorProduto: valorProduto,
        fornecedorProduto: fornecedorProduto,
    }
    if (emAlteracao) {
        listaProdutos[indiceElementoAlteracao] = produto;
        emAlteracao = false;
    }
    else {
        listaProdutos.push(produto)
    }

    listarProdutos();
    limpar();
}

function listarProdutos() {
    let conteudo = '';
    if (listaProdutos.length === 0) {
        conteudo = '<tr><td colspan="7">Nenhum produto cadastrado até o momento</td></tr>'
    } else {
        listaProdutos.forEach((produto, indice) => {
            conteudo += `
                <tr>
                    <td>${indice}</td>
                    <td>${produto.nomeProduto}</td>
                    <td>${produto.qtdProduto}</td>
                    <td>${produto.valorProduto}</td>
                    <td>${produto.fornecedorProduto}</td>
                    <td><button type"button" onclick="alterar(${indice})">Alterar</button></td> 
                    <td><button type"button" onclick="excluir(${indice})">Excluir</button></td> 
                </tr>
            `;
        });
    }
    document.getElementById('conteudo').innerHTML = conteudo;
}

function excluir(indice) {
    if (confirm('Deseja realmente excluir este produto?'))
    listaProdutos.splice(indice, 1);
    listarProdutos();
}

function alterar(indice) {
    emAlteracao = true;
    indiceElementoAlteracao = indice;
    document.getElementById('nomeProduto').value = listaProdutos[indice].nomeProduto;
    document.getElementById('qtdProduto').value = listaProdutos[indice].qtdProduto;
    document.getElementById('valorProduto').value = listaProdutos[indice].valorProduto;
    document.getElementById('fornecedorProduto').value = listaProdutos[indice].fornecedorProduto;
}

function limpar() {
    document.getAnimations('meuForm').reset();
}