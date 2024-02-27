/* A instrução return encerra a execução de uma função e retorna o controle 
para a função de chamada. A execução é retomada na função de chamada no ponto 
imediatamente após a chamada. Uma instrução return pode retornar um valor à 
função de chamada. */

function criaPessoa(nome, sobrenome) {
  return { nome, sobrenome };
}

const p1 = criaPessoa("Enzo", "Polese");
const p2 = {
  nome: "Alícya",
  sobrenome: "Capucho",
};

console.log(p1, p2.nome, p2.sobrenome);
console.log("================================================================");

/* ========================================================================== */

function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + " " + resto;
  }
  return falaResto;
}

const fala = falaFrase("Olá");
const resto = fala("mundo!");
console.log(resto);
console.log("================================================================");

/* ========================================================================== */

function duplica(n) {
  return n * 2;
}
function triplica(n) {
  return n * 3;
}

function quadriplica(n) {
  return n * 4;
}

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
console.log("================================================================");

/* ========================================================================== */

function criamultiplicador(multiplicador) {
  function multiplicacao(n) {
    return n * multiplicador;
  }
  return multiplicacao;
}

const duplica1 = criamultiplicador(2);
const triplica1 = criamultiplicador(3);
const quadriplica1 = criamultiplicador(4);

console.log(duplica1(3));
console.log(triplica1(3));
console.log(quadriplica1(3));
console.log("================================================================");

/* ========================================================================== */

function criamultiplicador1(multiplicador) {
  return function (n) {
    return n * multiplicador;
  };
}

const duplica2 = criamultiplicador1(2);
const triplica2 = criamultiplicador1(3);
const quadriplica2 = criamultiplicador1(4);

console.log(duplica2(4));
console.log(triplica2(4));
console.log(quadriplica2(4));