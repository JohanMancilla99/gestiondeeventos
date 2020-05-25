const opciones = document.querySelectorAll(".opcion h1");
const turnOff = document.querySelectorAll(".e-opciones p");
const hamb = document.querySelector(".hamb");
const menu = document.querySelector(".opciones-elementos");
const contenedores = document.querySelectorAll(".partial");

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

hamb.addEventListener("click", () => {
    hideAgain();
    hideColor();
    menu.classList.toggle("hide-menu");
});

turnOff.forEach(opcion => {
    opcion.addEventListener("click", () => {
        opcion.parentElement.classList.toggle("e-opciones-show")
        menu.classList.toggle("hide-menu");
        hideColor();
        cambiarPartial(opcion.id)
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

function cambiarPartial(id) {
    esconderPartials()
    contenedores.forEach(partial => {
        if (partial.classList.contains(id)) {
            partial.classList.toggle("esconder-partial")
        }
    })
}

function esconderPartials() {
    contenedores.forEach(partial => {
        if (!partial.classList.contains("esconder-partial"))
            partial.classList.toggle("esconder-partial")
    })
}
esconderPartials()

menu.classList.toggle("hide-menu");