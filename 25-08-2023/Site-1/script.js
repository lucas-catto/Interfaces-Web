
document.addEventListener('DOMContentLoaded', function() {
    
    var xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'noticias.xml', true);
    
    xhr.onreadystatechange = function() {

        if (xhr.readyState == 4 && xhr.status == 200) {
            
            var xml = xhr.responseXML;

            var noticiasDiv = document.getElementById('noticias');
            var noticias    = xml.getElementsByTagName('noticia');
            
            for (var i = 0; i < noticias.length; i++) {
                var titulo    = noticias[i].getElementsByTagName('titulo')[0].textContent;
                var descricao = noticias[i].getElementsByTagName('descricao')[0].textContent;
                var imagem    = noticias[i].getElementsByTagName('imagem')[0].textContent;

                var noticiaDiv = document.createElement('div');
                noticiaDiv.innerHTML = `
                    <h2 class="titulo">${titulo}</h2>
                    <img src="${imagem}" alt="${titulo}" class="foto"/>
                    <p class="descricao">${descricao}</p>
                `;
                noticiasDiv.appendChild(noticiaDiv);
            }
        }
    };
    xhr.send();
});
