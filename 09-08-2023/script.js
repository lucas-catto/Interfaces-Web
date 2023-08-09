
const botaoTrocaTema = document.getElementById('trocaTema');
const corpo          = document.body;
const texto          = document.getElementById('texto');

let temaEscuroAtivado = false;

botaoTrocaTema.addEventListener('click', () => {
    temaEscuroAtivado = !temaEscuroAtivado;
    atualizarTema();
});

function atualizarTema() {
    if(temaEscuroAtivado){
        corpo.classList.remove('tema-claro');
        corpo.classList.add('tema-escuro');
    
        botaoTrocaTema.classList.remove('fas', 'fa-sun');
        botaoTrocaTema.classList.add('far',    'fa-moon');
    
        texto.innerText = "Tema Escuro";
    }
    else{
        corpo.classList.remove('tema-escuro');
        corpo.classList.add('tema-claro');

        botaoTrocaTema.classList.remove('far', 'fa-moon');
        botaoTrocaTema.classList.add('fas',    'fa-sun');
        
        texto.innerText = "Tema Claro";
    }
}

atualizarTema();
