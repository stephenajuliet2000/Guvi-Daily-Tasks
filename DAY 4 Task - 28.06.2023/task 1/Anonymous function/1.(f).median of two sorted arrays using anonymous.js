
//median of two sorted arrays using anonymous 

const arr1 = [1,2,3,4];
const arr2 = [5,6,7,8];

var median = function() {

let merge = [...arr1,...arr2];

let middle = (merge.length + 1) / 2;

console.log(middle);

}
median();

