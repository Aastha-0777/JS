let sentence = "This is Java Script";
sentence = sentence.toLowerCase();
let wordCount = 0;
// for (i = 0; i < sentence.length; i++){
//     if(sentence[i] == " " && sentence[i-1] >= "a" && sentence[i-1] <= "z" || sentence[i+1] >= "a" && sentence[i+1] <= "z"){
//         wordCount++;
//     }
// }
// console.log("Total Number of Words in the Sentencea are : " + wordCount);
sentence = sentence.slice(0,sentence.trimEnd())
console.log(sentence);
