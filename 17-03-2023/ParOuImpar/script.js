function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return numero + " é um número PAR.";
    } else {
        return numero + " é um número ÍMPAR.";
    }
}

function verificarNumero(){
    var numero = document.getElementById("numero").value;
    var resultado = parOuImpar(numero);
    document.getElementById("resultado").innerHTML = resultado;
}