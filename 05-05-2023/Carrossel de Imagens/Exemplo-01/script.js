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

setInterval(mostrarProximaImagem, 5000);
