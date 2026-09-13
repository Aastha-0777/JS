
window.addEventListener("DOMContentLoaded", () => {

    window.addEventListener("scroll", () => {

        const boxValue = document.getElementById("box")
        boxValue.style.transform = 'translateY(' + window.scrollY + 'px)'
        boxValue.style.borderRadius = Math.random() * 50 + 'px'

    })

})