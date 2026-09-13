const changeText = () => {

    const text = document.getElementById("text") //h1

    console.log(text.innerText);
    
    text.innerText = "HI"
    text.style.color = "Blue"

}

const changeLink = () => {

    const link = document.getElementById("link") //<a>...
    link.innerText="Netflix"
    link.href = "https://www.netflix.com"
    link.target ="_blank"

}

const changeShape = () =>{

    const box = document.getElementById("box")

    if(box.style.borderRadius == "50%"){

        box.style.borderRadius = "0%"
        box.style.backgroundColor = "violet"

    }else{

        box.style.borderRadius = "50%"
        box.style.backgroundColor = "green"

    }

}