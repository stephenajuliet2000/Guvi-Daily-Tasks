
// return palindrome using IIFE function
var array = ["guvi"];

(function () {
      for (var i = 0; i < array.length; i++) {
    let reversed = array[i].toString().split("").reverse().join("");
   
    if(array == reversed) {
      console.log(reversed,"is a palindrome");
    } else {
      
      console.log(reversed,"is not a palindrome");
    }
  }
    
})();
