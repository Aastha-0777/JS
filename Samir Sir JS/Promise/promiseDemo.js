// console.log("line 1");
// console.log("line 2");
// console.log("line 3");

// console.log("line 1");

// setTimeout(() => {
//     console.log("line 2");
// }, 2000);

// console.log("line 3");


//resolve() || success() || xyz()
//reject() || faild() || pqr()


// const promise = new Promise((resolve, reject) => {

//     resolve("The Promise has been resolved!!")

// })

// console.log(promise);

const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        
        resolve("The Promise has been resolved!!")
        
    }, 3000);

})

console.log(promise);

//if promise get resolve it will alwasy goto find then block,,
//-->in data variable promise resolve data has been store

console.log("before then...");

promise.then((data) => {

    console.log("data : ", data);

})

console.log("after then...");
