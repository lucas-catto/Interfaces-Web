window.onload = function() {
    // Referência aos elementos do formulário
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var adi = document.getElementById('adi');
    var sub = document.getElementById('sub');
    var div = document.getElementById('div');
    var mult = document.getElementById('mult');

    // Função para limpar o formulário
    reset.onclick = function() {
        num1.value = '0';
        num2.value = '0';
        resultado.value = '0';
    };

    // Função para adição
    adi.onclick = function() {
        if (validarEntradas()) {
            resultado.value = parseFloat(num1.value) + parseFloat(num2.value);
        }
    };

    // Função para subtração
    sub.onclick = function() {
        if (validarEntradas()) {
            resultado.value = parseFloat(num1.value) - parseFloat(num2.value);
        }
    };

    // Função para divisão
    div.onclick = function() {
        if (validarEntradas()) {
            if (parseFloat(num2.value) !== 0) {
                resultado.value = parseFloat(num1.value) / parseFloat(num2.value);
            } else {
                alert("Não é possível dividir por zero");
            }
        }
    };

    // Função para multiplicação
    mult.onclick = function() {
        if (validarEntradas()) {
            resultado.value = parseFloat(num1.value) * parseFloat(num2.value);
        }
    };

    // Função para validar as entradas
    function validarEntradas() {
        if (num1.value === '' || num2.value === '') {
            alert("Por favor, preencha ambos os campos numéricos");
            return false;
        } else {
            return true;
        }
    }
};