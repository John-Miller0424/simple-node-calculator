const child_process = require('child_process');

function runCalculator(args) {
  return child_process.execSync(`node calculator.js ${args}`).toString().trim();
}

test('add 2 + 3', () => {
  expect(runCalculator('add 2 3')).toMatch(/Result: 5/);
});

test('divide by zero', () => {
  expect(runCalculator('div 5 0')).toMatch(/Divide by zero/);
});
