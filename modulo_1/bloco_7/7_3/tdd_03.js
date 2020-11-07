// Escreva a função addAllnumbers para passar nos testes já implementados.

const assert = require('assert');
// escreva a função addAllnumbers aqui

const addAllnumbers = (array) => {
  let output = 0;
  for (let index = 0; index < array.length; index += 1) {
    output += array[index];
  }
  return output;
}


const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);