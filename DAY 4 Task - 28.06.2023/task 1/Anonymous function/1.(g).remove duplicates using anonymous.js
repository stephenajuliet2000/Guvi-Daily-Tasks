

// remove duplicates from an array using anonymous function

var removeDuplicates = function () {
    var arr = ["apple","orange","mango","orange","mango"];
    
    let temp = [];
    
    var duplicate = arr.forEach ( (element) => {
        if(!temp.includes(element)) {
          temp.push(element);
        }
    });
    
    console.log(temp);
    }
    removeDuplicates();
    
    
    
    