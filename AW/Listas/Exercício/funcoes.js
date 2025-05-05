var listaProdutos = [];

function gravarProduto() {
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

    listaProdutos.push(produto);
    listarProdutos();
}

function listarProdutos() {
    let conteudo = '';
    if (listaProdutos.length === 0) {
        conteudo = '<tr><td colspan="7">Nenhum produto cadastrado até o momento</td></tr>'
    } else {
        listaProdutos.forEach((produto, indice) => {
            conteudo += `
                <tr>
                    <td></td>
                    <td>${produto.nomeProduto}</td>
                    <td>${produto.qtdProduto}</td>
                    <td>${produto.valorProduto}</td>
                    <td>${produto.fornecedorProduto}</td>
                </tr>
            `;
        });
    }
    document.getElementById('conteudo').innerHTML = conteudo;
}
