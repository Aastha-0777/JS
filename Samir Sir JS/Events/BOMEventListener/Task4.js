var leftCounter = 0
var arrivalCounter = 0

window.addEventListener("DOMContentLoaded", () => {

    const boxvalue1 = document.getElementById("box1")
    const boxvalue2 = document.getElementById("box2")
    window.addEventListener("blur", () => {

        leftCounter++
        boxvalue1.innerHTML = "Left Count : " + leftCounter

    })

    window.addEventListener("blur", () => {

        arrivalCounter++
        boxvalue2.innerHTML = "Arrival Count : " + arrivalCounter

    })

})