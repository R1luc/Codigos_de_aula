function adicionar() {
    let nome = document.getElementById("nome").value;
    let preço = document.getElementById("preço").value;
    let categoria = document.getElementById("categoria").value;
    let descricao = document.getElementById("descrição").value;

    let tabela = document.getElementById("tabela")
    let linha = tabela.insertRow();
    linha.insertCell(0).textContent = nome;
    linha.insertCell(1).textContent = preço;
    linha.insertCell(2).textContent = categoria;
    linha.insertCell(3).textContent = descricao
}