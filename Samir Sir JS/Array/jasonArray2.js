var data =[
    {
        name:"India",
        states:[
            {
                name:"gujarat",
                cities:["Ahmedabad","Rajkot","Surat"],
                population:20000000
            },
            {
                name:"mah",
                cities:["Mumbai","Pune","Nashik"],
                population:25000000
            },
        ]
    },
    {
        name:"USA",
        states:[
            {
                name:"california",
                cities:["LA","San Fra","San DIAGO"],
                population:30000000
            },
            {
                name:"Texas",
                cities:["Houston","Austin","San Antonio"],
                population:5000000
            },
        ]
    }
]

var india = data.find((c) => c.name = "India")
console.log(india);

var indianStates = data.find((c) => c.name = "India").states.map((s) => s.name)
console.log(indianStates);

var indianCity = data.find((c) => c.name = "India").states.map((s) => s.cities)
console.log(indianCity);

var indianCity = data.find((c) => c.name = "India").states.map((s) => s.cities).flatMap((c) => c)
console.log(indianCity);
