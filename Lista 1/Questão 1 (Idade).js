function idade() {
    let hoje = new Date();
    let born = new Date(document.getElementById("date").value);
    
    if(hoje.getMonth() <= born.getMonth() && hoje.getDate() <= born.getDate()){
        let idade = hoje.getFullYear() - born.getFullYear()
        if (idade <= 0){
            document.getElementById("resultado").innerHTML =
            "Você tem 0 anos"
        }
        else{
        document.getElementById("resultado").innerHTML =
            "Você tem " + idade + " anos"
        }
    }
    else{
        let idade = hoje.getFullYear() - born.getFullYear() - 1
        if (idade <= 0){
            document.getElementById("resultado").innerHTML =
            "Você tem 0 anos"
        }
        else{
        document.getElementById("resultado").innerHTML =
            "Você tem " + idade + " anos" 
        }
    }
}