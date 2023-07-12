
// Rotate an array by k times
var nums = [1,2,3,4,5,];
var k = 3;

var rotateArray = function () {
  for (let i = 0; i < k; i++) {
      nums.unshift(nums.pop());
  }

console.log(nums);

}

rotateArray();