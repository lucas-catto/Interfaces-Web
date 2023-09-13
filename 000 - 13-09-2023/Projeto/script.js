
document.addEventListener("DOMContentLoaded", function(){

    fetch('data.json')

        .then(response => response.json())
        .then(data => {
            
            let arrow = '';

            data.Arrow.forEach(arrow => {
                arrow += `
                    <div class="card">
                        <img src="${arrow.imagem}">
                        
                        ${arrow.Numero}
                        
                        ${arrow.Nome}
                        
                        ${arrow.Habilidade}
                        
                        ${arrow.Descricao}
                        
                        ${arrow.Imagem}
                        
                        ${arrow.Temporada}
                    </div>
                `;
            });
            document.getElementById('container').innerHTML = pizzas;
        })
        .catch(error = console.error('Erro ao buscar pizzas:', error));
});
