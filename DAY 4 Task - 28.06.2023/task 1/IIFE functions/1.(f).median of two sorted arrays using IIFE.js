
//median of two sorted arrays using IIFE 

const arr1 = [1,2,3,4];
const arr2 = [5,6,7,8];


(function median (){
    let merge = [...arr1,...arr2];

let middle = (merge.length + 1) / 2;
let roundoff = Math.round(middle);

console.log(roundoff);
})();

