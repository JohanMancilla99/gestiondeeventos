const opciones = document.querySelectorAll(".opcion h1");
const turnOff = document.querySelectorAll(".e-opciones p");
const hamb = document.querySelector(".hamb");
const menu = document.querySelector(".opciones-elementos");

function hideAgain() {
    turnOff.forEach(opcion => {
        if (opcion.parentElement.classList.contains("e-opciones-show")) {
            opcion.parentElement.classList.toggle("e-opciones-show");
        }
    })
}

function hideColor() {
    opciones.forEach(opcion => {
        if (opcion.classList.contains("opcion-h1-color")) {
            opcion.classList.toggle("opcion-h1-color")
        }
    })
}

menu.classList.toggle("hide-menu");
hamb.addEventListener("click", () => {
    hideAgain();
    hideColor();
    menu.classList.toggle("hide-menu");
});

turnOff.forEach(opcion => {
    opcion.addEventListener("click", () => {
        opcion.parentElement.classList.toggle("e-opciones-show")
        hideColor();
    })
})

opciones.forEach(opcion => {
    opcion.addEventListener("click", () => {
        const padre = opcion.parentElement;
        const otrasOpciones = padre.children[1];
        if (!otrasOpciones.classList.contains("e-opciones-show")) {
            hideAgain();
            hideColor();
        }
        otrasOpciones.classList.toggle("e-opciones-show");
        opcion.classList.toggle("opcion-h1-color");
    });
});