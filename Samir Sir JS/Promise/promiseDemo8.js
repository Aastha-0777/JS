const payment1 = ()=>{
    const promise = new Promise((reslove,reject)=>{
        setTimeout(() => {
            reslove("payment 1 done")
        }, 3000);
    })
    return promise
}

const payment2 = ()=>{
    const promise = new Promise((reslove,reject)=>{
        setTimeout(() => {
            reslove("payment 2 done")
        }, 1000);
    })
    return promise
}

const payment3 = ()=>{
    const promise = new Promise((reslove,reject)=>{
        setTimeout(() => {
            reslove("payment 3 done")
        }, 5000);
    })
    return promise
}

const order = async() => {

    const [p1, p2, p3] = await Promise.all([payment1(), payment2(), payment3()])

    console.log(p1);
    console.log(p2);
    console.log(p3);

}

order()