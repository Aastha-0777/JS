
const root = document.getElementById("root")

const btn = document.createElement("button")
btn.innerText = "Push Number"
root.appendChild(btn)
let arr = [11, 34, 67]

btn.addEventListener("click", () => {

    var rnd = Math.floor(Math.random() * 1000)
    arr.push(rnd)
    console.log("------------");
    console.log(arr)

})


for(let i=0;i<arr.length;i++){

    console.log(arr[i]);
    var numtag = document.createElement("h1") //<h1></h1>
    root.appendChild(numtag)
    numtag.innerText=arr[i]

}