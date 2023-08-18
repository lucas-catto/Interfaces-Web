document.addEventListener("DOMContentLoaded", function(){
    fetch('lego.json')
        .then(response => response.json())
        .then(data     => {
            
            let output = '';

            data.legos.forEach(lego => {

                output += `
                    <div class="produto-item">
                        <img src="${ lego.image       }" alt="${lego.name}">
                        <h2>${       lego.name        }</h2>
                        <p>${        lego.description }</p>
                        <p>${        lego.price       }</p>
                    </div>
                `
            });
            document.getElementById('lista-produtos').innerHTML = output;
        })
    .catch(error => console.error('Erro ao buscar produtos: ', error));
});
