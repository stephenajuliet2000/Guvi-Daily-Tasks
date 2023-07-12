var arr = [3, 6, 1, 5, 8];
 
var add = function(arr) {
    return arr.reduce((a, b) => a + b, 0);
};
 

var sum = add(arr);
console.log(sum)