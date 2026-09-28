// const users = [
//     {
//         id: 1,
//         username: "rahul_dev",
//         name: "Rahul Sharma",
//         followers: 12500,
//         following: 850
//     },
//     {
//         id: 2,
//         username: "priya_designs",
//         name: "Priya Patel",
//         followers: 18700,
//         following: 620
//     },
//     {
//         id: 3,
//         username: "amit_fitness",
//         name: "Amit Shah",
//         followers: 9200,
//         following: 430
//     },
//     {
//         id: 4,
//         username: "neha_travels",
//         name: "Neha Mehta",
//         followers: 25600,
//         following: 910
//     },
//     {
//         id: 5,
//         username: "jay_foodie",
//         name: "Jay Joshi",
//         followers: 15300,
//         following: 720
//     }
// ];

// const posts = [
//     {
//         id: 101,
//         userId: 1,
//         caption: "Learning React is fun!",
//         likes: 1250,
//         comments: 85,
//         type: "image"
//     },
//     {
//         id: 102,
//         userId: 1,
//         caption: "My new JavaScript project 🚀",
//         likes: 980,
//         comments: 62,
//         type: "reel"
//     },
//     {
//         id: 103,
//         userId: 2,
//         caption: "New UI design today 🎨",
//         likes: 2100,
//         comments: 145,
//         type: "image"
//     },
//     {
//         id: 104,
//         userId: 2,
//         caption: "Design tips for beginners",
//         likes: 1750,
//         comments: 120,
//         type: "reel"
//     },
//     {
//         id: 105,
//         userId: 3,
//         caption: "Morning workout 💪",
//         likes: 890,
//         comments: 45,
//         type: "reel"
//     },
//     {
//         id: 106,
//         userId: 3,
//         caption: "Healthy food ideas",
//         likes: 720,
//         comments: 38,
//         type: "image"
//     },
//     {
//         id: 107,
//         userId: 4,
//         caption: "Beautiful mountains 🏔️",
//         likes: 3200,
//         comments: 210,
//         type: "image"
//     },
//     {
//         id: 108,
//         userId: 4,
//         caption: "Exploring Manali",
//         likes: 2800,
//         comments: 180,
//         type: "reel"
//     },
//     {
//         id: 109,
//         userId: 5,
//         caption: "Best pizza I tried 🍕",
//         likes: 1450,
//         comments: 95,
//         type: "image"
//     },
//     {
//         id: 110,
//         userId: 5,
//         caption: "Street food tour 🌮",
//         likes: 1900,
//         comments: 130,
//         type: "reel"
//     }
// ];



// //create 1 function fetch user by username
// //return promise

// const fetchUserByUserName = (id) => {

//     const user = users.find((u) => u.id == id)

//     const promise = new Promise((resolve, reject) => {

//         setTimeout(() => {

//             if (user) {

//                 resolve(user)

//             } else {

//                 reject("User Not Found")

//             }


//         }, 4000);

//     })

//     return promise

// }

// //create 2 function fetch post by userId
// //return promise

// const fetchPostByUserId = (userId) => {

//     const post = posts.filter((p) => p.userId = userId)

//     const promise = new Promise((resolve, reject) => {

//         setTimeout(() => {

//             if(post > 0)
//                 resolve(post)
//             else
//                 reject("No Post Found for Provieded UserId...")

//         }, 3000);

//     })

//     return promise

// }

// //pass id of founduser and if any post found return it or send error message

// const getData = async() => {

//     const userdata = await fetchUserByUserName(1)

//     console.log(userdata);

//     const postData = await fetchPostByUserId(userdata.id)
//     console.log(postData);
    

// }

// getData()

const users = [
  {
    id: 1,
    username: "rahul_dev",
    name: "Rahul Sharma",
    followers: 12500,
    following: 850
  },
  {
    id: 2,
    username: "priya_designs",
    name: "Priya Patel",
    followers: 18700,
    following: 620
  },
  {
    id: 3,
    username: "amit_fitness",
    name: "Amit Shah",
    followers: 9200,
    following: 430
  },
  {
    id: 4,
    username: "neha_travels",
    name: "Neha Mehta",
    followers: 25600,
    following: 910
  },
  {
    id: 5,
    username: "jay_foodie",
    name: "Jay Joshi",
    followers: 15300,
    following: 720
  }
];

const posts = [
  {
    id: 101,
    userId: 1,
    caption: "Learning React is fun!",
    likes: 1250,
    comments: 85,
    type: "image"
  },
  {
    id: 102,
    userId: 1,
    caption: "My new JavaScript project 🚀",
    likes: 980,
    comments: 62,
    type: "reel"
  },
  {
    id: 103,
    userId: 2,
    caption: "New UI design today 🎨",
    likes: 2100,
    comments: 145,
    type: "image"
  },
  {
    id: 104,
    userId: 2,
    caption: "Design tips for beginners",
    likes: 1750,
    comments: 120,
    type: "reel"
  },
  {
    id: 105,
    userId: 3,
    caption: "Morning workout 💪",
    likes: 890,
    comments: 45,
    type: "reel"
  },
  {
    id: 106,
    userId: 3,
    caption: "Healthy food ideas",
    likes: 720,
    comments: 38,
    type: "image"
  },
  {
    id: 107,
    userId: 4,
    caption: "Beautiful mountains 🏔️",
    likes: 3200,
    comments: 210,
    type: "image"
  },
  {
    id: 108,
    userId: 4,
    caption: "Exploring Manali",
    likes: 2800,
    comments: 180,
    type: "reel"
  },
  {
    id: 109,
    userId: 5,
    caption: "Best pizza I tried 🍕",
    likes: 1450,
    comments: 95,
    type: "image"
  },
  {
    id: 110,
    userId: 5,
    caption: "Street food tour 🌮",
    likes: 1900,
    comments: 130,
    type: "reel"
  }
];


const finduser= (username)=>{

    const foundUser = users.find((u)=>u.username==username)
    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(foundUser){
                resolve(foundUser)
            }
            else{
                reject(null)
            }
        }, 3000);
    })
    return promise
}

const findPosts = (id)=>{

    const foundPosts = posts.filter((p)=>p.userId == id)

    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
                if(findPosts.length>0){
                    resolve(foundPosts)
                }
                else{
                    reject(null)
                }
        }, 3000);
    })

    return promise
}


const insta = async()=>{
    const user = await finduser("rahul_dev")
    console.log(user)
    if(user!=null){
        const posts = await findPosts(user.id)
        console.log(posts)
    }
}

insta()

//create 1 function fetch user by username
//return promise

//create 2 function fetch post by userId
//return promise

//pass id of founduser and if any post found return it or send error message