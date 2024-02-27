/* Closures em JavaScript é uma forma de escopo léxico usado para preservar 
variáveis ​​do escopo externo de uma função no escopo interno de uma função. 
O escopo léxico é o processo usado para definir o escopo de uma variável por 
sua posição no código-fonte. */

function retornaFuncao(nome) {
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao("Enzo");
const funcao1 = retornaFuncao("Polese");

console.dir(funcao);
console.dir(funcao1);
console.log(funcao(), funcao1());