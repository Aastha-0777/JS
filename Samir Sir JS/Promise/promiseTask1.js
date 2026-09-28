const players = [
  {
    id: 1,
    name: "Virat Kohli",
    age: 37,
    country: "India",
    role: "Batsman",
    runs: 28000,
    wickets: 8
  },
  {
    id: 2,
    name: "Rohit Sharma",
    age: 39,
    country: "India",
    role: "Batsman",
    runs: 19500,
    wickets: 12
  },
  {
    id: 3,
    name: "Jasprit Bumrah",
    age: 32,
    country: "India",
    role: "Bowler",
    runs: 500,
    wickets: 450
  },
  {
    id: 4,
    name: "Ravindra Jadeja",
    age: 37,
    country: "India",
    role: "All-Rounder",
    runs: 6500,
    wickets: 550
  },
  {
    id: 5,
    name: "Joe Root",
    age: 35,
    country: "England",
    role: "Batsman",
    runs: 22000,
    wickets: 75
  },
  {
    id: 6,
    name: "Ben Stokes",
    age: 35,
    country: "England",
    role: "All-Rounder",
    runs: 12000,
    wickets: 300
  },
  {
    id: 7,
    name: "Babar Azam",
    age: 31,
    country: "Pakistan",
    role: "Batsman",
    runs: 15000,
    wickets: 5
  },
  {
    id: 8,
    name: "Shaheen Afridi",
    age: 26,
    country: "Pakistan",
    role: "Bowler",
    runs: 700,
    wickets: 350
  },
  {
    id: 9,
    name: "Pat Cummins",
    age: 33,
    country: "Australia",
    role: "Bowler",
    runs: 2500,
    wickets: 300
  },
  {
    id: 10,
    name: "Steve Smith",
    age: 37,
    country: "Australia",
    role: "Batsman",
    runs: 18000,
    wickets: 50
  }
];

const findPlayerByName = (id)=>{

    //find logic
    //3 sec player object return in resolve 
    //if player not found then reject

    const foundPlayer = players.find((p)=>p.id == id)

    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(foundPlayer){
                resolve(foundPlayer)
            }
            else{
                reject("player not found")
            }
        }, 3000);
    })

    //return promise
    return promise

}


const getData = async()=>{

    const player = await findPlayerByName(1)
    console.log(player)
}

getData()