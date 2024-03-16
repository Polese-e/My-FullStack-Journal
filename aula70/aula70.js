/* Em JavaScript, um objeto é uma coleção de pares chave-valor, onde as chaves 
são strings (ou símbolos) e os valores podem ser de qualquer tipo de dado, como 
números, strings, arrays, funções ou até mesmo outros objetos. Os objetos em 
JavaScript são uma das principais estruturas de dados da linguagem e são 
amplamente utilizados para representar dados estruturados de forma organizada 
e acessível. */

const pessoa = {
  nome: "Enzo",
  sobrenome: "Polese",
};

console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log("================================================================");

/* ========================================================================== */

const pessoa1 = {
  nome: "Alícya",
  sobrenome: "Capucho",
};
const chave = "sobrenome";

console.log(pessoa["nome"]);
console.log(pessoa[chave]);
console.log("================================================================");

/* ========================================================================== */

const pessoa2 = new Object();

pessoa2.nome = "Enzo";
pessoa2.sobrenome = "Polese";

console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);

delete pessoa2.nome;

console.log(pessoa2);
console.log("================================================================");

/* ========================================================================== */

const pessoa3 = new Object();

pessoa3.nome = "Alícya";
pessoa3.sobrenome = "Capucho";
pessoa3.idade = 18;
pessoa3.falarnome = function () {
  console.log(`Meu nome é ${this.nome}.`);
};
pessoa3.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

for (let chave in pessoa3) {
  console.log(pessoa3[chave]);
}

pessoa3.falarnome();
console.log(pessoa3.getDataNascimento());