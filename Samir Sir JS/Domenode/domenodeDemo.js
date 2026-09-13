const root = document.getElementById("root")

const h1tag = document.createElement("h1")
h1tag.innerText = "This is h1 tag Created in JS"
root.appendChild(h1tag)

const googleLink = document.createElement("a")
googleLink.href = "http://www.google.com"
googleLink.innerText = "Google"
root.appendChild(googleLink)

const myBtn = document.createElement("button")
myBtn.innerText = "Click Here"
root.appendChild(myBtn)

myBtn.addEventListener("click", ()=>{

    alert("Button Clicked..");

})

const box = document.createElement("div")
box.style.height = "200px"
box.style.height = "200px"
box.style.backgroundColor = "brown"