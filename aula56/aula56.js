/* Factory Function é a implementação em JS de um dos padrões de projetos 
criacionais, o Factory Method, existente como em outras linguagens orientadas 
a objetos. Este padrão encapsula a criação de objetos a partir de um de seus 
métodos, funcionando como uma fábrica de objetos propriamente dita. */

const p1 = criaPessoa("Enzo", "Polese", 1.67, 55);
const p2 = criaPessoa("Alícya", "Capucho", 1.55, 45);

function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    fala: function (assunto) {
      return `${this.nome} está ${assunto}.`;
    },
    altura,
    peso,
    imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

console.log(p1.fala("Falando sobre JS."));
console.log(p1.imc());
console.log(p2.fala("Falando sobre JS."));
console.log(p2.imc());
console.log("================================================================");

/* ========================================================================== */

const p11 = criaPessoa1("Enzo", "Polese", 1.67, 55);
const p21 = criaPessoa1("Alícya", "Capucho", 1.55, 45);

function criaPessoa1(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    altura,
    peso,

    //Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    //Setter
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
    },
    fala(assunto = "falando nada") {
      return `${this.nome} está ${assunto}.`;
    },

    get imc1() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

p11.nomeCompleto = "Igor Nobre Lopes";

console.log(p11.nome);
console.log(p11.sobrenome);
console.log(p11.fala());