
const hdfc = (amount) => {

    console.log("Amount Transfered from HDFC Bank : ", amount);

    return amount * 1.2;    

}

const sbi = (amount) => {

    console.log("Amount Transfered from SBI Bank : ", amount);

    return amount * 1.1;    

}

const upi = (cb, amount) =>{

    console.log("Upi called...");
    
    //console.log("Total trans amount : ", cb(amount));
    
    return cb(amount);

}

var amount = 67000;

var trans = upi(hdfc, amount);  

console.log("Total Trans : ", trans);
