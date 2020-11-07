let palavra = "arara";

function palindromo(palavra) {
  // Declarando a função com nome relacionado ao que se espera saber
  let palavraInvertida = ""; // Criação de uma variavel vazia que recebera o valor da variavel "palavra" para comparação
  for (i = palavra.length - 1; i >= 0; i -= 1) {
    //Criação do loop que irá percorrer a variavel "palavra" iniciando da ultima letra, até chegar na primeira letra com passo negativo.
    palavraInvertida += palavra[i]; //Atribuição das letras da variavel "palavra" para a variavel "palavraInvertida" sendo da ultima letra até a primeira.
  }
  if (palavraInvertida === palavra) {
    //Condição para verificar se a palavraInvertida é igual a palavra.
    return true; //Retornando o true se for verdade.
  } else {
    return false; //Retornando falso se não for verdade.
  }
}
console.log(palindromo(palavra)); //Impressão da resposta se baseando na função declarada.
