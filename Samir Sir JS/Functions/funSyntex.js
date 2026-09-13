console.clear();
function demo(){

    console.log("Hello...");
    
}

demo();

function add(a, b){

    console.log("add called...");
    console.log("The value of a : ", a);
    console.log("The value of b : ", b);
    console.log("The value of a + b : ", a + b);    

}

add();
add(10);
add(10, 50);
add(10, 50, 7);

function avg(a, b, c){

    return (a + b + c) / 3;

}

console.log(avg());
console.log(avg(10));
console.log(avg(10, 20));
console.log(avg(10, 20, 30));

function getFullName(fname, lname){

    return fname + " " + lname;

}

console.log(getFullName());
console.log(getFullName("Vasudev"));
console.log(getFullName("Vasudev", "Sastri"));
console.log(getFullName(6, 7));


