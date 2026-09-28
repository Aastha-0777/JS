// const bookRide = () => {

//     const promise = new Promise((resolve, reject) => {

//         setTimeout(() => {
            
//             resolve("your cab booked...")

//         }, 2000);
//     })

//     console.log(promise);
//     promise.then((data) => {

//         console.log(data);

//     })

// }

// bookRide()

// const bookRide = () => {

//     const promise = new Promise((resolve, reject) => {

//         setTimeout(() => {
            
//             resolve("your cab booked...")

//         }, 2000);
//     })

//    return promise

// }

// var x = bookRide() // x == promise.
// console.log(x);
// x.then((data) => {
//     console.log(data);
// })


const bookRide = () => {

    const promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            
            resolve({car:"sedan",price:200,message:"your ride has been booked"})

        }, 2000);
    })

    return promise

}

var x = bookRide() // x == promise
console.log(x);

x.then((data) => {

    console.log(data);
    
})


