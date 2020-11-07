let n = 5;
let codigo = "*";
let saida = "";
let posicao = n;

for (let i = 0; i < n; i += 1) {
  for (let j = 0; j <= n; j += 1) {
    if (j < posicao) {
      saida = saida + " ";
    } else {
      saida = saida + codigo;
    }
  }
  console.log(saida);
  saida = "";
  posicao -= 1;
}
