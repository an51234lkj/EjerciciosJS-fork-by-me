const numbers = [22,1,4,3,5,7,8,9,12,11];
const odd = [];
const even = []

for (let item of numbers) {
    console.log("item:", item);

    // Put your code here
    if (item%2===0){
        even.push(item);
    }
    else {
        odd.push(item);
    }
}

module.exports = {
    numbers,
    odd,
    even,
}