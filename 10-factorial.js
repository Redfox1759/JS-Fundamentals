function factorial(n) {
  if (isNaN(n)) {
    console.log(1);
    } else{
        console.log(n * factorial(n - 1));
    }   
}

const firstArg = process.argv[2];

const numberToFactorial = parseInt(firstArg, 10);

factorial(numberToFactorial);
