const box = document.getElementById("box")
box.addEventListener("dblclick",()=>{
    box.remove()
})


const list = document.getElementById("list")
console.log(list.children) //li,li,li

const btn = document.getElementById("btn")
btn.addEventListener("click",()=>{

    list.removeChild(list.children[0])
    

})

