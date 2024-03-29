/* O método forEach() em JavaScript é usado para iterar sobre os elementos de 
um array e executar uma função de retorno de chamada para cada elemento. É uma 
maneira conveniente e mais legível de percorrer um array em comparação com os 
loops tradicionais, como for ou while. */

const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let total = 0;

// Exibir o total da soma no console
a1.forEach((valor, indice, array) => {
  total += valor;
});

console.log(total);
console.log("================================================================");

/* ========================================================================== */

const frutas = ['maçã', 'banana', 'laranja'];

// Exibir cada fruta no console
frutas.forEach(function(fruta, indice) {
  console.log(`Índice ${indice}: ${fruta}`);
});