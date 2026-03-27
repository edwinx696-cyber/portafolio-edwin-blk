// Animación de entrada para las fotos
const observarImagenes = () => {
    const images = document.querySelectorAll('.gallery-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    images.forEach(img => {
        img.style.opacity = "0";
        img.style.transform = "translateY(30px)";
        img.style.transition = "all 0.8s ease-out";
        observer.observe(img);
    });
};

document.addEventListener("DOMContentLoaded", observarImagenes);