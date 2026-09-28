const chooseFloor = () => {

    console.log("Choosing Floor....");
    
    const choosePromise = new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve({floor:11, door:"closed"})
        }, 2000);

    })

    return choosePromise

}

const liftCallingBtn = () => {

    console.log("Lift Called on the Same Floor");

    const openDoorPromise = new Promise((resolve, reject)=>{

        setTimeout(() => {
            resolve({doorStage:"Oppened", msg:"Opping door on same floor"})
        }, 1000);

    })

    return openDoorPromise

}

const lift = () => {

    console.log("Wlecome to the Lift");

    const currentFloor = chooseFloor()

    currentFloor.then((option)=>{

        console.log("Option : ", option);

        const calling = liftCallingBtn()
        calling.then((stage)=>{

            console.log("Door Stage : ", stage);

        })

    })

}

lift()