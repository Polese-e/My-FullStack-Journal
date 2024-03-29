/* O método filter() em JavaScript é utilizado em arrays para criar um novo 
array contendo apenas os elementos que atendem a uma determinada condição, 
especificada por uma função de retorno de chamada (callback). A função de 
callback deve retornar true para os elementos que devem ser incluídos no novo 
array e false para os elementos que devem ser excluídos. */

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter((valor, indice, array) => valor > 10);

console.log(numerosFiltrados);
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
const pessoasComNomeGrande = pessoas.filter((obj) => obj.nome.length >= 5);
const pessoasNovas = pessoas.filter((obj) => obj.idade <= 20);
const nomeTerminaComO = pessoas.filter((obj) =>
  obj.nome.toLowerCase().endsWith("o")
);

console.log(pessoasComNomeGrande);
console.log(pessoasNovas);
console.log(nomeTerminaComO);