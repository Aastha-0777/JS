//revision of promise 
const payment = () => {

    console.log("Payment has been processing...");
    
    const promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve({message:"payment success",amount:1000})
        }, 3000);

    })

    return promise

}

const genReceipt = (amount)=>{

    console.log("generating receipt...")
    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
                resolve({message:"ok",amount:amount})
        }, 4000);
    })
    return promise
}


const phonepe = () => {

    console.log("welocme to phonepe")
    const pay = payment() //pay == promise

    pay.then((paymentData) => {

        console.log("payment dtaa ",paymentData);

        const res = genReceipt(paymentData.amount)

        res.then((resData) => {

            console.log(resData);

        })

    })

}

phonepe()