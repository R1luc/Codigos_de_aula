var listaProdutos = [];


function adicionarItem() {;
    let nomeProduto = document.getElementById("nomeProduto").value;

    let produto = {
        nomeProduto: nomeProduto,
    }
    listaProdutos.push(produto)

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
                    <td>${indice}</td>
                    <td>${produto.nomeProduto}</td>
                </tr>
            `;
        });
    }
    document.getElementById('conteudo').innerHTML = conteudo;
}

function removerItem(indice) {
    listaProdutos.splice(indice, 1)
    listarProdutos();
}
   