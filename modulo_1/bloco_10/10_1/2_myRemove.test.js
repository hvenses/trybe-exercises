const myRemove = require('./2_myRemove');

describe('myRemove', () => { 
  test('Retorna um array sem o item que esta fora da matriz', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('Retorna um array diferente dos itens dentro da matriz', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })

  test('Verifica se o array padrao nao sofreu alteração', () => {
    const arr = [1, 2, 3, 4];
    myRemove(arr, 1);
    expect(arr).toEqual([1, 2, 3, 4]);
  })

  test('Retorna um array identico se o item nao pertence a ele', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});