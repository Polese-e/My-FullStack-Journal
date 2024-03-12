/* O método map() em JavaScript é utilizado em arrays para criar um novo array 
contendo os resultados da aplicação de uma função a cada elemento do array 
original. Ele não modifica o array original, mas retorna um novo array com os 
resultados das transformações. */

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map((valor) => valor * 2);

console.log(numerosEmDobro);
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
const nomes = pessoas.map((obj) => obj.nome);
const idades = pessoas.map((obj) => obj.idade);
const comIds = pessoas.map(function (obj, indice) {
  const newObj = { ...obj };
  newObj.id = indice;
  return newObj;
});

console.log(nomes);
console.log(idades);
console.log(comIds);
