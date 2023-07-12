// (a) . print odd numbers in an array using anonymous function
var odd = function () {
    var numbers = [1,2,3,4,5,6,7,8,9,10];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 != 0) {
          console.log(numbers[i]);
      
        }
        
    }
    
};
odd ();