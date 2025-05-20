const messages = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

let finalOutput = '';

for (let i = 0; i < messages.length; i++) {
  finalOutput += messages[i] + '\n';
}

console.log(finalOutput);