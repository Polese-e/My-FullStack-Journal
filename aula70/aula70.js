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