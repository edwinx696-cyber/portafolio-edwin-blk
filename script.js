document.addEventListener('DOMContentLoaded', () => {
    // Confirmación en consola para saber que todo cargó
    console.log("Portafolio de Edwin Sánchez Art cargado correctamente.");

    // Opcional: Cerrar otros 'details' cuando uno se abre en las FAQ
    const details = document.querySelectorAll("details");
    details.forEach((targetDetail) => {
        targetDetail.addEventListener("click", () => {
            details.forEach((detail) => {
                if (detail !== targetDetail) {
                    detail.removeAttribute("open");
                }
            });
        });
    });
});
