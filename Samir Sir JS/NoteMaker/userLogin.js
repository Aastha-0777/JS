const submitHendaler = (event) => {

    event.priventDefault();

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const users = JSON.parse(localStorage.getItem("userObj"))

    if (users != null) {

        const foundUser = users.find((u) => u.email == email && u.password == password)
        if (foundUser) {
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