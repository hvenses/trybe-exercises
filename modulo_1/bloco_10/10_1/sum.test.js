const sum = require('./sum');

describe('sum', () => {
  test('4 somado a 5 igual a 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('Erro quando for informado uma string', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });

  test('Zero somado a zero igual a zero', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('Mensagem de erro "parametros precisam ser numeros"', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow(/parameters must be numbers/);
  });
});