lowerData = "ahemdabad"
upperData = ""

for(let i = 0; i < lowerData.length; i++){

    let x = lowerData.charCodeAt(i);
    x -= 32;
    upperData += String.fromCharCode(x);

}

console.log(lowerData);
console.log(upperData);

