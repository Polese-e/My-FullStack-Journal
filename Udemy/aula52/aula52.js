/* O escopo em JavaScript se refere à visibilidade de variáveis e funções dentro 
de um programa. Quando uma variável ou função é declarada em um determinado 
escopo, ela só pode ser acessada dentro daquele escopo ou de escopos internos a 
ele. No JavaScript tem dois tipos de escopo, o global e local. */

const nome = "Enzo";

function falaNome() {
  console.log(nome);
}

falaNome();
console.log("================================================================");

/* ========================================================================== */

const nome1 = "Enzo";

function falaNome1() {
  const nome1 = "Polese";
  console.log(nome1);
}

function usaFalaNome() {
  falaNome1();
}

usaFalaNome();
console.log("================================================================");

/* ========================================================================== */

const nome2 = "Enzo";

function falaNome2() {
  console.log(nome2);
}

function usaFalaNome1() {
  const nome2 = "Polese";
  falaNome2();
}

usaFalaNome1();
