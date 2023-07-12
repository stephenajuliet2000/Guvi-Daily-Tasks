
// Convert string to title caps using anonymous funtion

var array = ["welcome to guvi"];

var caps = function () {
   for (i = 0; i < array.length; i++) {
     let result =  array[i].toUpperCase();
            console.log(result); 
  }

}
caps();