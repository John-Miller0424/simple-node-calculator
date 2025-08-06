// calculator.js
const [,, operation, num1, num2] = process.argv;

if (!operation || !num1 || !num2) {
  console.log('Usage: node calculator.js <add|sub|mul|div> <num1> <num2>');
  process.exit(1);
}

const a = parseFloat(num1);
const b = parseFloat(num2);

let result;
switch (operation) {
  case 'add':
    result = a + b;
    break;
  case 'sub':
    result = a - b;
    break;
  case 'mul':
    result = a * b;
    break;
  case 'div':
    result = b !== 0 ? a / b : 'Error: Divide by zero';
    break;
  default:
    result = 'Unknown operation';
}

console.log('Result:', result);
