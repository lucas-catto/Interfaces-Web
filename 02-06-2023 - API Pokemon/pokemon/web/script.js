fetch('http://localhost:3000/pokemons')
.then(response => response.json())
.then(data => {
    
    let pokemonDiv = document.getElementById('pokemonList');

    data.forEach(pokemon => {

        let pokemonCard = document.createElement('div');

        pokemonCard.classList.add('pokemon-card');
        pokemonCard.innerHTML = `
            <h2>${pokemon.Nome}</h2>
            <img src="img/${pokemon.ID}.png" alt="${pokemon.Nome}">
            <p><strong>Tipo:</strong> ${pokemon.Tipo}</p>
            <p><strong>Altura:</strong> ${pokemon.Altura} m</p>
            <p><strong>Peso:</strong> ${pokemon.Peso} kg</p>
            <p><strong>Geração:</strong> ${pokemon.Geracao}</p>
            <p><strong>Descrição:</strong> ${pokemon.Descricao}</p>
        `;
        pokemonDiv.appendChild(pokemonCard);
    });
})
.catch(error => console.error(error));
