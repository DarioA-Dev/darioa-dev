function iniciarDescargasMultiples(enlace1, enlace2) {
    window.open(enlace1, '_blank');
    setTimeout(function() {
        window.open(enlace2, '_blank');
    }, 1000); 
}