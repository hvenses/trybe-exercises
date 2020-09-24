//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let lista = [];

for (let i = 1; i <= 25; i += 1) {
  lista.push(i);
}

for (let i = 0; i < lista.length; i += 1) {
  console.log(lista[i] / 2);
}
