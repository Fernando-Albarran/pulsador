document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("botonPrueba");
    const colores = ["red", "blue", "yellow", "green", "white"];
    
    boton.addEventListener("click", () => {
        const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        document.body.style.backgroundColor = colorAleatorio;
    });
});