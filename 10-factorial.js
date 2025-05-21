const args = process.argv[0].slice(2);

const numberToFactorial = parseInt(args[0], 10);


function factorial(n) {
  if (isNaN(n)) {
    console.log(1);
    } else{
        console.log(n * factorial(n - 1));
    }   
}

factorial(numberToFactorial);
