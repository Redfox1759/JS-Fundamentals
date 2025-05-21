function factorial(n) {
  if (isNaN(n)) {
    return 1;
    } else{
        n * factorial(n - 1);
    }   
}

const firstArg = process.argv[2];

const numberToFactorial = parseInt(firstArg, 10);

console.log(factorial(numberToFactorial));
