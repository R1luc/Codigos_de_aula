function remover(){
    let lista = document.getElementById("lista").value.split(' ').map(function(item){
        return parseInt(item)
    })

lista = lista.sort()

for(i=0; i<lista.length; i++){
    if(lista[i] == lista[i+1]){
        lista[i+1].pop
    }
}
}