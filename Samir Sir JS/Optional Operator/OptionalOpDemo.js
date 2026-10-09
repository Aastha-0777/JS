var user ={
    id:1,
    name:"raj",
    age:23
}

console.log(user);
console.log(user.name.toUpperCase());
// console.log(user.email.toUpperCase()); --> it will give error and crash the server
//solution : 
// console.log(user.email && user.email.toUpperCase()); --> it was done before
//latest 
console.log(user.email?.toUpperCase()); // ?. is know as optional op

var employees = [
    {
        id:1,
        name:"raj",
        age:23
    },
    {
        id:101
    },
    {
        id:102,
        name:"parth"
    }
]

console.log(employees)

// var names = employees.map((emp) => emp.name.toUpperCase()) --> it will give error and crash the server

// var names = employees.map((emp) => emp.name && emp.name.toUpperCase())

var names = employees.map((emp) => emp.name?.toUpperCase())
console.log(names);
