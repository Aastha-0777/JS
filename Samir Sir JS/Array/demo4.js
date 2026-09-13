var data = [1,2,3,4,5,6,6,7,88,9,9,9,10];

console.log(data);

evenElement = data.filter((e) => {

    return e % 2 == 0;

});

console.log(evenElement);

var users = ["amit","sumit","raj","parth","jay","ajay","kunal"]

console.log(users);

// newUsers = users.filter((u) => {

//     return u.length > 4

// })

// console.log(newUsers);

filterUser2 = users.filter((f) => {

    return f.includes("i")

})

console.log(filterUser2);

filterUser3 = users.filter((f) => {

    return f.endsWith("it")

})

console.log(filterUser3);