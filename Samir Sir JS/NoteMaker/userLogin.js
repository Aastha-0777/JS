var loggedInUser = localStorage.getItem("loggedinuser")

const submitHendaler = (event) => {

    event.preventDefault();

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const users = JSON.parse(localStorage.getItem("userObj"))
    console.log(users);

    if (users != null) {

        const foundUser = users.find((u) => u.email == email && u.password == password)
        if (foundUser) {
            if(loggedInUser){

                loggedInUser = ""

            }
            localStorage.setItem("loggedinuser", JSON.stringify(foundUser))
            alert("login success")
        }
        else {
            alert("invalid cred..")
        }

    }
    else {
        alert("app down..")
    }

}