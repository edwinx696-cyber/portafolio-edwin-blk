// Esperar a que cargue el contenido
document.addEventListener('DOMContentLoaded', () => {
    
    // Efecto de aparición suave para las imágenes al hacer scroll
    const images = document.querySelectorAll('.gallery-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transform = 'translateY(20px)';
        img.style.transition = 'all 0.6s ease-out';
        observer.observe(img);
    });

    console.log("Portafolio de Edwin Sánchez Art cargado correctamente.");
});
