document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("botonPrueba");
    const colores = ["aqua", "blue", "yellow", "pink", "purple"];
    
    boton.addEventListener("click", () => {
        const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        document.body.style.backgroundColor = colorAleatorio;
    });
});
