/* Em JavaScript, um método em um objeto é simplesmente uma função que está 
associada a esse objeto. Esses métodos podem ser extremamente úteis para 
encapsular funcionalidades relacionadas ao objeto e para manipular seus dados 
internos de maneira organizada. */

/*
... (spread)
Object.values
Object.entries
Object.assign (des, any)
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.getOwnPropertyDescriptor (o, 'prop')
Object.defineProperty (define uma propriedade)
Object.defineProperties (define várias propriedades)
*/

const produto = { nome: "Caneca", preco: 1.8 };
const outraCoisa = {
  ...produto,
  material: "Porcelana",
};

outraCoisa.nome = "Outro nome";
outraCoisa.preco = 2.5;

console.log(produto);
console.log(outraCoisa);
console.log("================================================================");

/* ========================================================================== */

const produto1 = { nome: "Caneca", preco: 1.8 };
const caneca = Object.assign({}, produto, { material: "Porcelana" });

caneca.nome = "Outro nome";
caneca.preco = 2.5;

console.log(produto1);
console.log(caneca);
console.log("================================================================");

/* ========================================================================== */

const produto2 = { nome: "Caneca", preco: 1.8 };
const caneca1 = { nome: produto2.nome, preco: produto2.preco };

caneca1.nome = "Outro nome";
caneca1.preco = 2.5;

console.log(produto2);
console.log(caneca1);
console.log("================================================================");

/* ========================================================================== */

const produto3 = { nome: "Caneca", preco: 1.8 };
const caneca2 = { nome: produto3.nome, preco: produto3.preco };

console.log(Object.keys(produto3));
console.log("================================================================");

/* ========================================================================== */

const produto4 = { nome: "Produto", preco: 1.8 };

Object.freeze(produto4);
produto4.nome = "Outro nome";

console.log(produto4);
console.log("================================================================");

/* ========================================================================== */

const produto5 = { nome: "Produto", preco: 1.8 };

console.log(Object.getOwnPropertyDescriptor(produto5, "nome"));
console.log("================================================================");

/* ========================================================================== */

const produto6 = { nome: "Produto", preco: 1.8 };

Object.defineProperty(produto6, "nome", {
  writable: false,
  configurable: false,
  value: "Qualquer outra coisa",
});

console.log(Object.getOwnPropertyDescriptor(produto6, "nome"));
console.log(produto6);
console.log("================================================================");

/* ========================================================================== */

const produto7 = { nome: "Produto", preco: 1.8, material: "Porcelana" };

console.log(Object.values(produto7));
console.log("================================================================");

/* ========================================================================== */

const produto8 = { nome: "Produto", preco: 1.8, material: "Porcelana" };

for (let entry of Object.entries(produto8)) {
  console.log(entry);
}
