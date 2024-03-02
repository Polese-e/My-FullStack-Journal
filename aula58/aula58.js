/* funções construtoras são a base da orientação a objetos em JavaScript, 
possibilitando a criação de objetos personalizados, organização de código e 
facilitando a reutilização. */

// Factory Function => criaPessoa
// Constructor Function => Pessoa (new)

function Pessoa(nome, sobrenome) {
  // Variaveis ou Métodos Privados.
  const ID = 123456;
  const metodoInterno = () => {};

  // Variaveis ou Métodos Públicos.
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.fala = () => {
    console.log(this.nome, "está falando!");
  };
}

const pessoa1 = new Pessoa("Enzo", "Polese");
const pessoa2 = new Pessoa("Alícya", "Capucho");

console.log(pessoa1.nome, pessoa1.sobrenome);
console.log(pessoa2.nome, pessoa2.sobrenome);
pessoa1.fala();
pessoa2.fala();
