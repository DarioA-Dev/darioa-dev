document.addEventListener('DOMContentLoaded', (event) => {
    // 1. Selecciona todos los elementos <details> con la clase 'acordeon'
    const acordeones = document.querySelectorAll('.acordeon');

    acordeones.forEach(acordeonActivo => {
        // 2. Agrega un oyente de eventos al evento 'toggle' (abrir/cerrar)
        acordeonActivo.addEventListener('toggle', () => {
            
            // 3. Verifica si el acordeón se está abriendo
            if (acordeonActivo.open) {
                
                // 4. Itera sobre todos los acordeones
                acordeones.forEach(acordeonCerrar => {
                    
                    // 5. Si no es el que acabamos de abrir, ciérralo
                    if (acordeonCerrar !== acordeonActivo) {
                        acordeonCerrar.removeAttribute('open');
                    }
                });
            }
        });
    });
});