// Adicionar efeitos de parallax suaves para as seções
window.addEventListener('scroll', function() {
    let offset = window.pageYOffset;
    document.querySelectorAll('.section').forEach(section => {
        let speed = parseInt(section.getAttribute('data-speed'));
        section.style.backgroundPositionY = -offset * speed + 'px';
    });
});

// Adicionar funcionalidade de mudança de cor de fundo
