function gerarSenha(tamanho) {
    var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%*(){}[]-=+.,<>|:;";

    var senha = "";

    for (let i = 0; i < tamanho; i++) {
        var randomIndex  = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[randomIndex];
    }
    return senha;
}

function exibirSenha() {
    var tamanho = document.getElementById("tamanho").value;
    if (tamanho < 1) {
        alert("Por favor informe um tamanho válido para a senha!")
    }

    var senha = gerarSenha(tamanho);
    document.getElementById("senha").innerHTML = senha;
}