const writeOnStickNote = (event)=>{

    event.preventDefault();
    const text = document.getElementById("text")
    const root = document.getElementById("sticky-note")

    root.innerText = text.value
    

}