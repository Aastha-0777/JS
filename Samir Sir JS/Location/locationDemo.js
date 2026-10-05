window.navigator.geolocation.getCurrentPosition((position) => {

    console.log(position.coords)
    console.log(position.coords.latitude)
    console.log(position.coords.longitude)
    console.log(position.coords.accuracy)



})

const checkRadious = () => {

    const longi = document.getElementById("long")
    console.log(longi.value);
    const latit = document.getElementById("lati")
    console.log(latit.value);

    const radius = 6371 * Math.cos(latit * (3.14 / 180))
    console.log(radius);
    

}