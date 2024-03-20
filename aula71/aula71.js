function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: true, // Mostra a chave.
    value: estoque, // Mostra o valor.
    writable: true, // Controla se o valor pode ou não ser alterado.
    configurable: true, // Controla se o valor pode ou não ser configurável.
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true, // Mostra a chave.
      value: estoque, // Mostra o valor.
      writable: true, // Controla se o valor pode ou não ser alterado.
      configurable: true, // Controla se o valor pode ou não ser configurável.
    },
    preco: {
      enumerable: true, // Mostra a chave.
      value: preco, // Mostra o valor.
      writable: true, // Controla se o valor pode ou não ser alterado.
      configurable: true, // Controla se o valor pode ou não ser configurável.
    },
  });
}

const p1 = new Produto("Camiseta", 20, 3);

console.log(p1);
console.log(Object.keys(p1));

for (let chave in p1) {
  console.log(chave);
}