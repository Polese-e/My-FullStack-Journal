/* Em JavaScript, os prototypes são um mecanismo fundamental para a herança 
e o compartilhamento de propriedades e métodos entre objetos. Cada objeto em 
JavaScript tem um protótipo associado, que é essencialmente um objeto a partir 
do qual ele herda propriedades e métodos.
Quando você acessa uma propriedade ou método em um objeto, o JavaScript primeiro 
verifica se o próprio objeto possui essa propriedade ou método. Se não, ele 
busca no protótipo desse objeto e continua a busca até encontrar a propriedade 
ou método desejado ou até chegar ao objeto Object.prototype, que é o protótipo 
padrão de todos os objetos em JavaScript. */

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => "ORIGINAL: " + this.nome + " " + this.sobrenome;
}

Pessoa.prototype === pessoa1.__proto__;

Pessoa.prototype.nomeCompleto = function () {
  return this.nome + " " + this.sobrenome;
};

const pessoa1 = new Pessoa("Luiz", "O."); // <- Pessoa = Função construtora
const data = new Date(); // <-- Date = Função construtora

console.dir(pessoa1);
console.dir(data);
