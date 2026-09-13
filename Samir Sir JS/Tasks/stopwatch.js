// const innerBox = document.getElementById("innerBox")

// innerBox.innerHTML = "00 : 00 : 00"
// innerBox.style.color = "blue"
// innerBox.style.fontSize = "67px"
// var secCounter = 0
// var minCounter = 0
// var hrCounter = 0

// const start = document.getElementById("start")
// start.addEventListener("click", () => {

//     setInterval(() => {

//         secCounter++

//         if (secCounter <= 60) {

//             innerBox.innerHTML = "00 : 00 : " + secCounter

//         } else if (secCounter == 60) {

//             minCounter++
//             secCounter = 0
//             innerBox.innerHTML = "00 : " + minCounter + " : " + secCounter

//         } else if (minCounter == 60) {

//             minCounter = 0
//             innerBox.innerHTML = hrCounter + " : " + minCounter + " : " + secCounter

//         }

//     }, 1000);

// })

let second = 0;
let min = 0
let hour = 0
let iobj=null;

const displayWatch =()=>{
    

    let h = hour<10 ? "0"+hour :hour
    let m = min<10 ? "0"+min : min
    let s = second<10 ? "0"+second : second

    const watch = document.getElementById("watch");
    watch.innerText=`${h}:${m}:${s}`
    watch.style.color = "blue"
    watch.style.fontSize = "70px"

}



const start = ()=>{

iobj = setInterval(() => {
        second++;
        if(second==60){
            min++
            second=0
        }
        if(min==60){
            hour++
            min=0
        }
        displayWatch()
}, 1000);


}
const stop = ()=>{

    clearInterval(iobj)    
    min=0
    hour=0
    second=0
    displayWatch()


}
