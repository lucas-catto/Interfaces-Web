function calcularTempoRestante(data) {
    var agora      = new Date();
    
    var dataEvento = new Date(data);
    var diferenca  = dataEvento.getTime() - agora.getTime();

    var segundos   = Math.floor(diferenca / 1000);
    var minutos    = Math.floor(segundos / 60);
    var horas      = Math.floor(minutos / 60);
    var dias       = Math.floor(horas / 24);

    horas    %= 24;
    minutos  %= 60;
    segundos %= 60;

    return{
        total:    diferenca,
        dias:     dias,
        horas:    horas,
        minutos:  minutos,
        segundos: segundos
    };
}

function atualizarContador(){
    var data = document.getElementById("data").value;
    var tempoRestante = calcularTempoRestante(data);
    if (tempoRestante.total <= 0) {
        clearInterval(intervaID);
        document.getElementById("contador").innerHTML = "O evento já ocorreu.";
        return;
    }

    var dias     = tempoRestante.dias;
    var horas    = ("0" + tempoRestante.horas).slice(-2);
    var minutos  = ("0" + tempoRestante.minutos).slice(-2);
    var segundos = ("0" + tempoRestante.segundos).slice(-2);
    var contador = dias + " dias, " + horas + ":" + minutos + ":" + segundos;
    document.getElementById("contador").innerHTML = contador;
}

function iniciarContagem() {
    var data = document.getElementById("data").value;
    if (!data) {
        alert("Por favor, informe uma data válida.");
        return;
    }
    intervaID = setInterval(atualizarContador, 1000);
}