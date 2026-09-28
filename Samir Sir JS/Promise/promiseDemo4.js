const searchFood = () => {

    console.log("Searching FOOD....");
    
    const Searchpromise = new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve({name:"Burgur", price:300})
        }, 3000);

    })

    return Searchpromise

}

const payment = (amount) => {

    console.log("Payment has been Processing...");
    const payPromise = new Promise((resolve, reject)=>{

        setTimeout(() => {
            resolve({amount:amount, status:"Success"})
        }, 4000);

    })

    return payPromise

}

const zomato = () => {

    console.log("Welcome to ZOMATO!!");

    const food = searchFood() // food == Searchpromise
    //console.log(food);
    food.then((order) => {

        console.log("Order : ", order)
        //payment -> 

        const pay = payment(order.price)// pay = payPromise
        pay.then((paymentData) => {

            console.log("Payment Data : ", paymentData);

        })

    })

}

zomato()