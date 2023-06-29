let obj1 = {name : "person 1",age:5};
let obj2 = {age:5,name : "person 1"};


function compareJSON() {

    // compare the no of properties
    if(Object.keys(obj1).length !== Object.keys(obj2).length ) {
        return false;
    }

    // compare the actual properties
    for(var key in obj1) {
        if(!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]){
            return false;
        }
    }
    return true;
}

let result = compareJSON();
console.log(result);