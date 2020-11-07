let listaNumerica = [2, 3, 6, 7, 10, 1];

function maiorValor(listaNumerica) {
  let numeroMaior = 0;
  for (let valores in listaNumerica) {
    if (listaNumerica[valores] > listaNumerica[numeroMaior]) {
      numeroMaior = valores;
    }
  }
  console.log(
    "O maior número é " +
      listaNumerica[numeroMaior] +
      "\n" +
      "Seu indice é " +
      numeroMaior
  );
}
maiorValor(listaNumerica);
