//solution of nesting then 
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

const phonepe = async() => {

    console.log("welocme to phonepe")
    // const pay = payment() //pay == promise

    const pay = await payment();

    console.log(pay);
 
    const res = await genReceipt(pay.amount)

    console.log(res);

}

phonepe()