const num = parseInt(process.argv[2]);

// Recursive function to compute factorial
function factorial(n) {
  if (isNaN(n) || n < 0) return 1; // Factorial of NaN or negative is 1
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

// Print the result
console.log(factorial(num));