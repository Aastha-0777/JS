let Str = "This is Java Script!!"
let vowelCount = 0;
Str = Str.toLowerCase();
for (i = 0; i < Str.length; i++) {
    if (Str[i] == "a" || Str[i] == "e" || Str[i] == "i" || Str[i] == "o" || Str[i] == "u") {
        vowelCount++;
    }
}
console.log("Total Number of Vovel in the String are : " + vowelCount);
