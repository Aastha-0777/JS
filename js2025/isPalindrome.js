let str = "This is Java Script";
let revStr = "";
for(i = str.length - 1; i >= 0;i--){
    revStr = revStr + str[i];
}
if(str == revStr){
    console.log("The String is a Palindrome");
}else{
    console.log("The String is NOT a Palindrome");
}