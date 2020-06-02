
const showNav = () => {
    const burger = document.querySelector(".burger")
    const nav = document.querySelector(".links")

    burger.addEventListener("click", () => {
        nav.classList.toggle("show-nav")
    })
}

const hideNav = () => {
    const nav = document.querySelector(".links")

    this.addEventListener("scroll", () => {
        if (nav.classList.contains("show-nav")) {
            nav.classList.toggle("show-nav")
        }
    })
}

hideNav()
showNav()
