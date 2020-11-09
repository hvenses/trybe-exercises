/*function fatorial(n) {
  let resultado = 1;
  for (let i = 1; i <= n; i += 1) {
    resultado *= i;
  }
  return resultado;
}
console.log(fatorial(4));*/

function fatorial(n) {
  let numero = 1;
  if (n > 1) {
    numero = n * fatorial(n - 1);
  }
  return numero;
}
console.log(fatorial(4));

/*const fatorial = (n) => {
  let resultado = 1;
  for (let i = 2; i <= n; i += 1) {
    resultado *= i;
  }
  return resultado;
};

console.log(fatorial(4));*/
