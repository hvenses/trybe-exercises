const { throws } = require('assert');
// Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5)

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
assert.throws(() => {sum(4, "5"); }, );
