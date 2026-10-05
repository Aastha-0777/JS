const booking = {
    passenger: "Ram",
    source: "Ahmedabad",
    destination: "Mumbai",
    departure: "2026-12-25T18:30:00"
};


// Your program should calculate:
// - Days remaining
// - Hours remaining
// - Minutes remaining
// - Departure day
// - Departure date
// - Whether the booking is:
//   - "Upcoming"
//   - "Today"
//   - "Departed"

console.log(booking.departure);
const depDate = new Date(booking.departure)
console.log(depDate);

const today = new Date()
console.log(today);

const miliSec = depDate - today
const dayRemainig = miliSec / (1000*60*60*24)
console.log(dayRemainig);
const hourRemainig = miliSec / (1000*60*60)
console.log(hourRemainig);
const minRemainig = miliSec / (1000*60)
console.log(miliSec);

console.log(depDate.getDay());

if(dayRemainig > 0){

    console.log("Upcoming");

}else if(dayRemainig < 0){

    console.log("Departed");

}else{

    console.log("Today");

}

if(dayRemainig <= 24){

    console.log("Train is in Upcomming 24 Hours");

}

