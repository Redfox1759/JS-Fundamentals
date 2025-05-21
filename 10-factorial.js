const args = process.argv.slice(2);

const num = parseInt(args[0], 10);  
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
const result = factorial(num);