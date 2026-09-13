var users = ["raj","parth","amit","sumit","jay"]
console.log(users);

// var upperUser = []

// for(let i = 0; i < users.length; i++){

//     upperUser.push(users[i].toUpperCase())

// }

var upperUser = users.map((u)=>{

    return u.toUpperCase();

});

console.log(upperUser);

var sales = [100,200,300,400,500]

console.log(sales);

var profitSales = sales.map((s) => {

    return s * 1.1;

});

console.log(profitSales);

