const storeData = () => {

    localStorage.setItem("data", "abcd")
    var loggedInuser = { name: "amit", time: "whatever" }
    // localStorage.setItem("user",loggedInuser)
    localStorage.setItem("user", JSON.stringify(loggedInuser))

    sessionStorage.setItem("Time", "10:01")

}

const getData = () => {

    var d1 = localStorage.getItem("data")
    console.log(d1);

    var u1 = localStorage.getItem("user")
    console.log(u1);
    // console.log(u1.name); -> not possible 'cause it is a string

    var userObj = JSON.parse(u1)
    console.log(userObj);
    console.log(userObj.name);   

    var t1 = sessionStorage.getItem("Time")
    console.log(t1);
    
}

const clearStorage = () => {

    localStorage.removeItem("user")
    // localStorage.clear()
    // sessionStorage.clear()

}