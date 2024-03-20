/* Getters e setters são comuns em várias linguagens, no javascript não seria 
diferente, eles nos ajudam a encapsular/proteger/isolar propriedades e facilitar 
o trabalho com objetos. Normalmente utilizamos quando precisamos fazer 
validações ou tratamentos antes de salvar um dados. O mesmo acontece para 
recuperá-los. */

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: true, // Mostra a chave.
    configurable: true, // Controla se o valor pode ou não ser configurável.
    get: function () {
      return estoquePrivado;
    },
    set: function (valor) {
      if (typeof valor !== "number") {
        console.log("Bad value");
        return;
      }

      estoquePrivado = valor;
    },
  });
}

function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      valor = valor.replace("coisa. ", "");
      nome = valor;
    },
  };
}

const p1 = new Produto("Camiseta", 20, 3);
const p2 = criaProduto("Camiseta");

p1.estoque = 500;

console.log(p1.estoque);
console.log(p2.nome);
