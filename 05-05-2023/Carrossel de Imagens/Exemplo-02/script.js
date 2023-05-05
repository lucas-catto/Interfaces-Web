const carrosselContainer = document.querySelector('.carrossel-container');
const carrosselImagens = carrosselContainer.querySelectorAll('.carrossel-imagem');

let imagemAtual = 0;

const alturaImagemAtiva = carrosselImagens[imagemAtual].getBoundingClientRect().height;
carrosselContainer.style.height = `${alturaImagemAtiva}px`;

function mostrarProximaImagem()
{
    carrosselImagens[imagemAtual].classList.remove('ativa');
    imagemAtual++;
    if (imagemAtual >= carrosselImagens.length) {
        imagemAtual = 0;
    }
    carrosselImagens[imagemAtual].classList.add('ativa');
}

function mostrarAnteriorImagem()
{
    carrosselImagens[imagemAtual].classList.remove('ativa');
    imagemAtual--;
    if (imagemAtual < 0) {
        imagemAtual = carrosselImagens.length - 1;
    }
    carrosselImagens[imagemAtual].classList.add('ativa');
}

const botaoAnterior = document.querySelector('.botao-anterior');
botaoAnterior.addEventListener('click', mostrarProximaImagem);

const botaoProximo = document.querySelector('.botao-proximo');
botaoProximo.addEventListener('click', mostrarAnteriorImagem);
