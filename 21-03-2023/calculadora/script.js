const display      = document.querySelector('.display');
const teclas       = document.querySelector('button');
let operador       = '';
let primeiroNumero = '';
let segundoNumero  = '';

function calcular(primeiro, operador, segundo) {
    primeiro = parseFloat(primeiro);
    segundo  = parseFloat(segundo);

    switch (operador) {
        case '+':
            return primeiro + segundo;
            break;
    
        case '-':
            return primeiro - segundo;
            break;
        
        case '*':
            return primeiro * segundo;
            break;
        
        case '/':
            return primeiro / segundo;
            break;
        
        default:
            return segundo;
    }
}

teclas.forEach(tecla => {
    tecla.addEventListener('click', () => {
        const conteudo = tecla.textContent;

        if (conteudo === 'C') {
            primeiroNumero = '';
            segundoNumero  = '';
            operador       = '';
            display.value  = '';
        }
        else if(conteudo === '='){
            display.value  = calcular(primeiroNumero, operador, segundoNumero);
            primeiroNumero = display.value;
            segundoNumero  = '';
            operador       = '';
        }
        else if('+-*/'.includes(conteudo)){
            if (!operador) {
                operador       = conteudo;
                display.value += conteudo;
            }
        }
        else{
            if (!operador){
                primeiroNumero += conteudo;
            } 
            else {
                segundoNumero += conteudo;    
            }
            display.value += conteudo;
        }
    })
});