var users = ["raj","parth","amit","sumit","jay"]

console.log(users);

console.log(users[0]);

console.log(users.length);

// for(var i = 0; i < users.length; i++){

//     console.log(users[i]);
    
// }


users.forEach((u) => {

    console.log(u);

})

var arrayLenAfterPush = users.push("Tanish")

console.log(users);
console.log(arrayLenAfterPush);

var arrayLenAfterPush = users.unshift("Vasudev")

console.log(users);
console.log(arrayLenAfterPush);

var remItem = users.pop()

console.log(users);
console.log(remItem);   

var remItem = users.shift()

console.log(users);
console.log(remItem);   

