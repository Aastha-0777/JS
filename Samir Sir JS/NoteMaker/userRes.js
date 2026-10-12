var users = JSON.parse(localStorage.getItem("userObj"))
if(users == null){
    users = []
}
console.log(users);

const submitHendaler = (event) => {

    event.priventDefault();

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const userObj = {

        id: Math.floor(Math.random() * 10000),
        name: name,
        email:email,
        password:password

    }

    users.push(userObj)

    localStorage.setItem("userObj", JSON.stringify(users))

}