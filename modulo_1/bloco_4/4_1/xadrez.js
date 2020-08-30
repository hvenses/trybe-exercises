// Peça de xadrez e seus movimentos

let peca = "BISPO";

switch (peca.toLowerCase()) {
  case "peao":
    console.log("Movimento uma casa pra frente e come uma casa diagonal");
    break;
  case "torre":
    console.log("Movimento horizontal e vertical a vontade");
    break;
  case "cavalo":
    console.log("Movimento em L");
    break;
  case "bispo":
    console.log("Movimento diagonal a vontade");
    break;
  case "rainha":
    console.log("Movimento para todos os lados a vontade");
    break;
  case "rei":
    console.log("Movimento para todos os lados, porem uma casa apenas");
    break;
  default:
    console.log("Nome digitado não corresponde a nenhuma peça do xadrez");
}
