

// print prime numbers in an array using arrow function

const newArray = [1,2,3,4,5,6,7,8,9,10]; 
const isPrime = num => { for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
    } 
    return num !== 1; };
    const myPrimeArray = newArray. filter(element => isPrime(element));
    console.log(myPrimeArray);