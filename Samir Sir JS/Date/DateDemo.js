// //constructor 1
// const date = new Date()
// console.log("Date() : ",date);

// const date2 = new Date("2026-10-05")
// console.log("Date(","2026-10-05",") : ",date2)

// //const3
// const date3 = new Date("2026-10-05T10:30:00")
// console.log(date3)

// //const4
// const date4 = new Date(2026, 0, 5, 10, 30, 0)
// console.log(date4)

// //const5
// const date5 = new Date(2012,1,14)
// console.log(date5)

// //const6
// const date6 = new Date()
// console.log(date6)



const date  = new Date()

// //all getter methods
// console.log("date",date.getDate())
// console.log("day",date.getDay())
// console.log("month",date.getMonth()) //index
// console.log("year",date.getFullYear())
// console.log("hours",date.getHours())
// console.log("minutes",date.getMinutes())
// console.log("seconds",date.getSeconds())
// console.log("milliseconds",date.getMilliseconds())
// console.log("time",date.getTime())

// //utc
// console.log("utc date",date.getUTCDate())
// console.log("utc day",date.getUTCDay())
// console.log("utc month",date.getUTCMonth())
// console.log("utc year",date.getUTCFullYear())
// console.log("utc hours",date.getUTCHours())
// console.log("utc minutes",date.getUTCMinutes())
// console.log("utc seconds",date.getUTCSeconds())
// console.log("utc milliseconds",date.getUTCMilliseconds())


//all setter methods

const date22 = new Date()

date22.setDate(14)
date22.setMonth(1)
date22.setFullYear(2026)
date22.setHours(10)
date22.setMinutes(30)
date22.setSeconds(0)
date22.setMilliseconds(0)
//date22.setTime(0)

console.log("date22",date22)

