
const showLinks = () => {
    const burguer = document.querySelector(".header-burger")
    const links = document.querySelector(".links")

    burguer.addEventListener("click", () => {
        links.classList.toggle("show-links")
    })

}

showLinks()