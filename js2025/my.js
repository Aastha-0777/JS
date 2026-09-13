let arr = [22,11,55,66,33,99,80,90,10,9,27];

divBy3 = arr.filter(x => x%3 == 0);
divBy9 = arr.filter(x => x%9 == 0);

console.log("div by 3 =>"+divBy3);
console.log("div by 9 =>"+divBy9);

divByboth = arr.filter(x => x%3 == 0 && x%9 == 0);
console.log("div by both =>"+divByboth);