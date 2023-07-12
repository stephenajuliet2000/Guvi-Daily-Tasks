

// remove duplicates from an array using IIFE

 
 
 // remove duplicates from an array using IIFE
 var arr = ["apple","orange","mango","orange","mango"];

let temp = [];
(function (){

var duplicate = arr.forEach ( (element) => {
    if(!temp.includes(element)) {
      temp.push(element);
    }
});

console.log(temp);
})();
       