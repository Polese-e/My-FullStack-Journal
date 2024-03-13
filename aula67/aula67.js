/* O método reduce() em JavaScript é utilizado em arrays para reduzir todos os 
elementos de um array a um único valor, aplicando uma função acumuladora a cada 
elemento sequencialmente. Ele retorna o valor final do acumulador. */

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function (acumulador, valor, indice, array) {
  acumulador += valor;
  return acumulador;
}, 0);

console.log(total);
console.log("================================================================");

/* ========================================================================== */

const numeros1 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total1 = numeros1.reduce(function (acumulador1, valor1, indice1, array1) {
  if (valor1 % 2 === 0) acumulador1.push(valor1);
  return acumulador1;
}, []);

console.log(total1);
console.log("================================================================");

/* ========================================================================== */

const numeros2 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total2 = numeros2.reduce(function (acumulador2, valor2, indice2, array2) {
  acumulador2.push(valor2 * 2);
  return acumulador2;
}, []);

console.log(total2);
console.log("================================================================");

/* ========================================================================== */

const pessoas = [
  { nome: "Enzo", idade: 19 },
  { nome: "Alícya", idade: 18 },
  { nome: "Igor", idade: 20 },
  { nome: "Gabriel", idade: 22 },
  { nome: "Gustavo", idade: 23 },
  { nome: "João", idade: 26 },
  { nome: "Pedro", idade: 30 },
];
const maisVelha = pessoas.reduce(function (
  acumulador3,
  valor3,
  indice3,
  array3
) {
  if (acumulador3.idade > valor3.idade) return acumulador3;
  return valor3;
});

console.log(maisVelha);