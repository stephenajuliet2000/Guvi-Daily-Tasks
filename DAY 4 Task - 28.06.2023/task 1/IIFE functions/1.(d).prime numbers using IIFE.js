

// print prime number using IIFE

(function (){
    for (var counter = 0; counter <= 20; counter++) {

    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
       console.log(counter);
    }
}
    
})();