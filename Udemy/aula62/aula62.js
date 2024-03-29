/* Em JavaScript, um array é um tipo de objeto que é usado para armazenar e 
organizar coleções de valores. Ele é uma estrutura de dados que permite 
armazenar elementos de qualquer tipo, incluindo números, strings, objetos e até 
mesmo outros arrays. Os elementos em um array são organizados em uma sequência 
indexada, começando do índice 0. */

const nomes = ["Enzo", "Alícya", "Igor"];

nomes[1] = "João";
delete nomes[2];

console.log(nomes);
console.log("================================================================");

/* ========================================================================== */

const nomes1 = new Array("Enzo", "Alícya", "Igor");

nomes1[1] = "João";
delete nomes1[2];

console.log(nomes1);
console.log("================================================================");

/* ========================================================================== */

const nomes2 = ["Enzo", "Alícya", "Igor"];
const novo = nomes2;

novo.pop();

console.log(novo);
console.log(nomes2);
console.log("================================================================");

/* ========================================================================== */

const nomes3 = ["Enzo", "Alícya", "Igor"];
const novo1 = [...nomes3];

novo1.pop();

console.log(novo1);
console.log(nomes3);
console.log("================================================================");

/* ========================================================================== */

const nomes4 = ["Enzo", "Alícya", "Igor"];
const removido = nomes4.pop();

console.log(nomes4, removido);
console.log("================================================================");

/* ========================================================================== */

const nomes5 = ["Enzo", "Alícya", "Igor"];

nomes5.push("Augusto");
nomes5.unshift("João");

console.log(nomes5);
console.log("================================================================");

/* ========================================================================== */

const nomes6 = ["Enzo", "Alícya", "Igor", "Augusto", "João"];
const novo2 = nomes6.slice(1, 4);

console.log(novo2);
console.log("================================================================");

/* ========================================================================== */

const nome = "Enzo Polese Damasceno";
const nomeCortado = nome.split(" ");

console.log(nome);
console.log(nomeCortado);
console.log("================================================================");

/* ========================================================================== */

const nomeArray = ["Enzo", "Polese", "Damasceno"];
const nomeJunto = nomeArray.join(" ");

console.log(nomeArray);
console.log(nomeJunto);
