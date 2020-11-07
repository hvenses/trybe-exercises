const service = require('./mudaString');

test("testando se a função foi chamada, nao aumente a caixa da letra", () => {
  service.mudaString = jest.fn().mockImplementationOnce((string) => string.toLowerCase());
  expect(service.mudaString('NOME')).toBe('nome');
  expect(service.mudaString).toHaveBeenCalled();
  expect(service.mudaString).toHaveBeenCalledTimes(1);
  expect(service.mudaString).toHaveBeenCalledWith('NOME');
});

test("testando se a função foi chamada, retorna a ultima letra da palavra", () => {
  service.primeiraLetra = jest.fn().mockImplementationOnce((string) => string[string.length-1]);
  expect(service.primeiraLetra('nome')).toBe('e');
  expect(service.primeiraLetra).toHaveBeenCalled();
  expect(service.primeiraLetra).toHaveBeenCalledTimes(1);
  expect(service.primeiraLetra).toHaveBeenCalledWith('nome');
});

test("testando se a função foi chamada, retorna tres strings concatenadas", () => {
  service.concatString = jest.fn().mockImplementationOnce((s1, s2, s3) => s1.concat(s2, s3));
  expect(service.concatString('Nome', 'Sobrenome', 'Apelido')).toBe('NomeSobrenomeApelido');
  expect(service.concatString).toHaveBeenCalled();
  expect(service.concatString).toHaveBeenCalledTimes(1);
  expect(service.concatString).toHaveBeenCalledWith('Nome', 'Sobrenome', 'Apelido');
});
