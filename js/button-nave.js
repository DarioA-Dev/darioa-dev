document.addEventListener('DOMContentLoaded', (event) => {
    const botones = document.querySelectorAll('.boton-enlace');


    botones.forEach(boton => {
        boton.addEventListener('click', function(e) {
            console.log(`Clic en el botón: ${e.currentTarget.querySelector('p').textContent.trim()}`);
            
        });
    });
});