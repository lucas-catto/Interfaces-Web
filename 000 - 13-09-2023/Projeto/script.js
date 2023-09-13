
document.addEventListener("DOMContentLoaded", function(){

    fetch('data.json')

        .then(response => response.json())
        .then(data => {
            
            let arrows = '';

            data.Arrow.forEach(arrow => {

                arrows += `
                    <div class="card">

                        <img src="${arrow.Imagem}">
                        
                        <div class="itens">
                            <div class="Nome">${                    arrow.Nome       }</div>
                            <div class="Habilidade">Habilidade: ${  arrow.Habilidade }</div>
                            <div class="Descricao">${               arrow.Descricao  }</div>
                            <div class="Temporada">Temporada(s): ${ arrow.Temporada  }</div>
                        </div>
                    </div>
                `;
            });
            document.getElementById('container').innerHTML = arrows;
        })
        .catch(error = console.error('Erro ao buscar personagens:', error));
});
