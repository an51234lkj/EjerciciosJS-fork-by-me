const numbers = [0,99,3,121,12,1,2];
let counter = 0;
let sum = 0;
let average = 0;

// Put your code here
for (let item of numbers) {
    counter++;
    sum += item;    
}

average = sum/counter;

console.log(average)

module.exports = {
    numbers,
    counter,
    sum,
    average
}