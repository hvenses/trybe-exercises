// Define o lucro de um produto

let custo = 50;
let venda = 100;
const lucro = venda - custo - (20 / 100) * (venda - custo);

if (custo && venda < 0) {
  console.log(
    "Erro! Os valores do custo e do lucro precisam ser maiores que zero"
  );
} else {
  console.log(lucro);
}
