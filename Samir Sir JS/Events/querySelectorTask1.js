const dice = document.querySelector("#box")
const rollBtn = document.querySelector("#btn")


rollBtn.addEventListener("click", () => {

    var randNo = Math.floor(Math.random() * 10)
    console.log(randNo);
    

    if(randNo == 1){

        dice.innerHTML = "&bull;"

    }else if(randNo == 2){

        dice.innerHTML = "&bull;" + "<br>" + "&bull;"

    }else if(randNo == 3){

        dice.innerHTML = "&bull;" + "<br>" + "&bull;" + "<br>" + "&bull;"

    }else if(randNo == 4){

        dice.innerHTML = "&bull;" + "<br>" + "&bull;" + "<br>" + "&bull;" + "<br>" + "&bull;"

    }else if(randNo == 5){

        dice.innerHTML = "&bull; <span></span> &bull;" + "<br>" + "&bull;" + "<br>" + "&bull;" + "<br>" + "&bull;" + "<br>" + "&bull;"

    }else if(randNo == 6){

        dice.innerHTML = "&bull; <span></span> &bull;" + "<br>" + "&bull; <span> </span> &bull;" + "<br>" + "&bull; <span> </span> &bull;"

    }

})