const service = require('./nAleatorio');

test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
  service.nAleatorio = jest.fn().mockReturnValue(10);

  expect(service.nAleatorio()).toBe(10);
  expect(service.nAleatorio).toHaveBeenCalled();
  expect(service.nAleatorio).toHaveBeenCalledTimes(1);
});

test("testando se a função foi chamada, e a divisão de do primeiro parametro pelo segundo", () => {
  service.nAleatorio = jest.fn().mockImplementationOnce((x, y) => x / y);
  expect(service.nAleatorio(4, 2)).toBe(2);
  expect(service.nAleatorio).toHaveBeenCalled();
  expect(service.nAleatorio).toHaveBeenCalledTimes(1);
});

test("testando se a função foi chamada, e a multiplicação de tres parametros", () => {
  service.nAleatorio = jest.fn().mockImplementationOnce((x, y, z) => x * y * z);
  expect(service.nAleatorio(4, 2, 1)).toBe(8);
  expect(service.nAleatorio).toHaveBeenCalled();
  expect(service.nAleatorio).toHaveBeenCalledTimes(1);
  expect(service.nAleatorio).toHaveBeenCalledWith(4, 2, 1);
});

