var marks = [21,24,23,19,24,25]

flag1 = marks.some((m) => {

    return m >= 24

})

console.log(flag1);

var marks = [21,24,23,19,24,25]

flag2 = marks.every((m) => {

    return m >= 20

})

console.log(flag2);