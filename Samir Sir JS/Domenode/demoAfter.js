const root = document.getElementById("root")

const box1 = document.createElement("div")
box1.style.height="100px"
box1.style.width="100px"
box1.style.backgroundColor="yellow"


const box2 = document.createElement("div")
box2.style.height="100px"
box2.style.width="100px"
box2.style.backgroundColor="blue"

root.appendChild(box2)
box2.after(box1)

const btn = document.createElement("button")
btn.innerText = "SWAP"
root.appendChild(btn)

btn.addEventListener("click", ()=>{

    var temp = box1.style.backgroundColor
    box1.style.backgroundColor = box2.style.backgroundColor 
    box2.style.backgroundColor = temp

})

