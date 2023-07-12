
// covert string to title caps using IIFE
var array = ["welcome to guvi"];
(function () {
  for (i = 0; i < array.length; i++) {
     let result =  array[i].toUpperCase();
            console.log(result); 
  }  
    
})();