var user = {
    id:1,name:"raj"
}
// console.log(user)
// user.city = "ahmedabad"
// console.log(user)

// var newuser = user
// newuser.city = "ahmedabad"
// console.log(newuser)

var newuser = {...user, city : "ahmedabad"}
console.log(newuser)


var emp = {id:1,name:"kunal",city:"delhi",age:24}
var newEmp = {...emp, email:"kunal@gmail.com",city:"mumbai"}

console.log(newEmp)

var colors = ["red","pink"]

// colors.push("White")
console.log(colors);

var newColour = [...colors, "white", "black"]
console.log(newColour);


