const trimestres = document.querySelectorAll(".cr-trimestres div");
let trimestresSeleccionados = []

trimestres.forEach(trimestre => {
    trimestre.addEventListener("click", () => {
        trimestre.classList.toggle("ts")
        if (!trimestresSeleccionados.includes(trimestre.id)) {
            trimestresSeleccionados.push(trimestre.id)
        } else {
            trimestresSeleccionados.splice(trimestresSeleccionados.indexOf(trimestre.id), 1)
        }
    })
})

const boton = document.querySelector(".cr-7 button")
const newInput = document.createElement("input")
const referenceItem = document.querySelector(".cr-5")
const mainContainer = document.querySelector(".cr-form")
mainContainer.insertBefore(newInput, referenceItem)
newInput.setAttribute("name", "trimestres")
newInput.setAttribute("type", "hidden")

boton.addEventListener("mouseover", () => {
    newInput.value = trimestresSeleccionados
    console.log(newInput.value);
})



