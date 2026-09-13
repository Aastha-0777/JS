let str = "This is Java Script";
let revStr = "";
for(i = str.length - 1; i >= 0;i--){
    revStr = revStr + str[i];
}
console.log("String => " + str);
console.log("ReverseStirng => " + revStr);
