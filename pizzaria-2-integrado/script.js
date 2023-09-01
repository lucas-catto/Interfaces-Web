document.addEventListener("DOMContentLoaded", function () {
    
    fetch("pizzas.json")
        .then(Response => Response.json())
        .then(data => {
            
            let pizza = '';

            data.pizzas.forEach(item => {

                pizza += `
                    <div class="pizza">
                        <img src="{item.image}">
                        nome
                        ingredientes
                        preco
                    </div>
                `
                
            });

        });
        doc
});
