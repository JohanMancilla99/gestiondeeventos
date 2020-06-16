
const switchPartial = () => {

    const buttons = document.querySelectorAll(".opciones option");
    const partials = document.querySelectorAll(".partial");

    const hideAllPartials = () => {
        partials.forEach(partial => {
            if (!partial.classList.contains("hidePartials")) {
                partial.classList.toggle("hidePartials");
            }
        });
    }

    const showCurrentPartial = (id) => {
        partials.forEach(partial => {
            if (partial.classList.contains(id)) {
                partial.classList.toggle("hidePartials");
            }
        })
    }

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            hideAllPartials();
            showCurrentPartial(button.id);
        });
    });

    hideAllPartials();

}

const showMenu = () => {

    const burger = document.querySelector(".opciones-burger");
    const optiones = document.querySelector(".crear-elementos-menu");

    burger.addEventListener("click", () => {
        optiones.classList.toggle("show-options-d");
    })

}

showMenu();
switchPartial();

// Programa

const adjustTerm = () => {

    const selectTag = document.querySelector(".cp-2 select");
    const termTag = document.querySelector(".cp-4 input");

    selectTag.addEventListener("change", () => {

        if (selectTag.value == "Tecnico") {
            termTag.value = 3;
        } else {
            termTag.value = 6;
        }
    })

}

adjustTerm();

// Ficha

const disableDateTag = () => {

    const input = document.querySelector(".cf-3-fecha");
    const button = document.querySelector(".cf-activador");

    const disable = () => {
        button.classList.toggle("desactivar");
        input.classList.toggle("desactivar-fecha");
    }

    button.addEventListener("click", () => {
        disable();
    })

    disable();

}

const formatDate = () => {

    const form = document.querySelector(".cf-form")
    const button = document.querySelector(".cf-activador");
    const dateInput = document.querySelector(".cf-3-fecha input");

    form.addEventListener("submit", (e) => {

        if (dateInput.value === "0000-00-00") {
            let fecha = new Date();
            let newDate = `${fecha.getFullYear()}-`

            let mes = fecha.getMonth() + 1
            if (mes < 10) {
                newDate += ("0" + mes.toString() + "-")
            } else {
                newDate += mes.toString() + "-"
            }

            let dia = fecha.getDate()
            if (dia < 10) {
                newDate += ("0" + dia.toString())
            } else {
                newDate += dia.toString()
            }

            dateInput.value = newDate;
        }

    });
}

formatDate();
disableDateTag();

// competencia 

const selectAndSendPrograms = () => {

    const form = document.querySelector(".cc-form");
    const selectors = document.querySelectorAll(".cc-seleccionar-programa");
    let selectedPrograms = []

    selectors.forEach(selector => {
        selector.addEventListener("click", () => {
            selector.classList.toggle("programa-seleccionado")
            const id = selector.parentElement.parentElement.firstElementChild.innerHTML;
            if (!selectedPrograms.includes(id)) {
                selectedPrograms.push(id)
            } else {
                selectedPrograms.splice(selectedPrograms.indexOf(id), 1)
            }
        })
    })

    form.addEventListener("submit", (e) => {
        if (selectedPrograms.length > 0) {
            const sender = document.createElement("input");
            const size = document.createElement("input");
            sender.style.display = "none"
            size.style.display = "none"
            sender.setAttribute("name", "programas")
            size.setAttribute("name", "size")
            sender.value = selectedPrograms
            size.value = selectedPrograms.length;
            form.appendChild(sender);
            form.appendChild(size);
        } else {
            e.preventDefault()
            alert("Debe seleccionar un programa primero")
        }
    })

}

selectAndSendPrograms();

// Resultados

const changeBg = () => {

    const form = document.querySelector(".cr-form");
    const options = document.querySelectorAll(".cr-trimestres div");
    const selected = []

    options.forEach(option => {
        option.classList.toggle("ts");
        option.addEventListener("click", () => {
            option.classList.toggle("ts");
            if (selected.includes(option.id)) {
                selected.splice(selected.indexOf(option.id), 1);
            } else {
                selected.push(option.id)
            }
        })
    })

    form.addEventListener("submit", (e) => {
        if (selected.length > 0) {
            // input to send data
            const input = document.createElement("input")
            input.setAttribute("name", "trimestres");
            input.value = selected.toString();
            input.style.display = "none";
            form.appendChild(input);
        } else {
            alert("Selecciona al menos un trimestre para el resultado")
            e.preventDefault();
        }
    })
}

changeBg();

// Instructor 

const sendData = () => {

    const form = document.querySelector(".ci-form");
    const options = document.querySelectorAll(".ci-seleccionar");
    let selected = []

    options.forEach(option => {
        option.addEventListener("click", () => {
            option.classList.toggle("ci-seleccionado")
            id = option.parentElement.parentElement.firstElementChild.innerHTML;
            if (selected.includes(id)) {
                selected.splice(selected.indexOf(id), 1);
            } else {
                selected.push(id)
            }
        })
    })

    form.addEventListener("submit", (e) => {
        if (selected.length > 0) {
            const toSend = document.createElement("input");
            toSend.setAttribute("name", "programas");
            toSend.style.display = "none";
            toSend.value = selected.toString();
            form.appendChild(toSend);
        } else {
            e.preventDefault();
            alert("Debe seleccionar al menos un programa");
        }
    })
}

sendData();