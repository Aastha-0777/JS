
var email = ["test@gmail.com", "test1@gmail.com", "test2@gmail.com", "test3@gmail.com", "test4@gmail.com"]

const checkEmail = () => {

    const outputValue = document.getElementById("output")
    const value = document.getElementById("input")
    console.log(value);
    console.log(value.value);

    var inputEmail = value.value
    
    var isTaken = email.some((e) => e == inputEmail)

    console.log(isTaken);

    if(isTaken){

        outputValue.innerText = "Email is Already Taken"
        outputValue.style.color = "red"

    }else{

        outputValue.innerText = "Email is Valied"
        outputValue.style.color = "green"

    }
    

}