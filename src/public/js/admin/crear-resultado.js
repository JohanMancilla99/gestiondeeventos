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
        console.log(trimestresSeleccionados)
    })
})