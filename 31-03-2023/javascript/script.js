var contador = document.getElementById("contador");

function contagem() {
    for (let n = 0; n < 1000; n++) {
        setTimeout(function(){
            contador.innerHTML = n;
        }, n * 100);
    } 
}
