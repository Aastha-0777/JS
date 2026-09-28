//zomato..
//search food.. --> 3 second
//add to cart --> 1 second
//payment --> 4 second
//delivery --> 1 second

// so if we use the setTimeout function there will logical problems 

// setTimeout(() => {
//     console.log("food has been searched pizza")
// }, 5000);

// setTimeout(() => {
//     console.log("pizza added to cart")
// }, 1000);

// setTimeout(() => {
//     console.log("payment done..")
// }, 4000);

// setTimeout(() => {
//     console.log("delivary partner has been assigned..")
// }, 1000);

// code execution : 
// pizza added to cart
// delivary partner has been assigned..
// payment done..
// food has been searched pizza

const searchFood = () => {

    const promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            
            resolve("Food has been Searched...")

        }, 3000);

    })

    return promise

}

var x = searchFood()
console.log("x--> ", x);

x.then((data) => {

    console.log("Data : ", data);

})