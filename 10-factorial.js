const args = process.argv.slice(2);

const num = parseInt(args[0], 10);  
function factorial(n) {
  if (n === 0 || n === 1) {
    console.log(1);
  }
    console.log(n * factorial(n - 1));
}
factorial(num);