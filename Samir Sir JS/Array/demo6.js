var numbers = [[1,2],[3,4,5],[6,7,8]]

var num = numbers.flatMap((n) => n)

console.log(num);

//map + filter

var users = ["kunal","sumit","raj","jaya","sushma","priya","nirma","amita","jwala"]

console.log(users);

newUsers = users.filter((u) => u.length > 4).map((u) => u.toUpperCase())

console.log(newUsers);

// flatMap + map + filter

var users = [["raj","parth"],["amit","sumit"]]

console.log(users);

newUsers2 = users.flatMap((u) => u).filter((u) => u.includes("i")).map((u) => u.toUpperCase())

console.log(newUsers2);