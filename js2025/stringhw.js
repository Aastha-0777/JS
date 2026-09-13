let str = "RoyaL9988 Technosoft0800";
let digitsCount = 0;
for (i = 0; i < str.length; i++) {
    if (str[i] >= 0 && str[i] <= 9) {
        digitsCount++;
    }
}
console.log("Total Number of Digits in the String is : " + digitsCount);
