

// return palindrome using arrow function
var string = ["level"];

let notpalindrome = ["teststring"];

const checkpalindrome = string => 
string.toString().split("").reverse().join("");
if(checkpalindrome != string){
    console.log(checkpalindrome(notpalindrome),"is not a palindrome");
}
console.log(checkpalindrome(string),"is palindrome");
 