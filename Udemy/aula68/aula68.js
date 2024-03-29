/* Combinar os métodos filter(), map() e reduce() em JavaScript é uma prática 
comum e poderosa para manipulação de dados em arrays. Esses métodos podem ser 
encadeados para realizar operações complexas de filtragem, mapeamento e redução 
em coleções de dados. */

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros
  .filter((valor) => valor % 2 === 0)
  .map((valor) => valor * 2)
  .reduce((ac, valor) => ac + valor);

console.log(numerosPares);
