/* IIFE, que significa "Immediately Invoked Function Expression" em inglês, é 
uma expressão de função que é executada imediatamente após ser definida. Essa 
construção é frequentemente utilizada em JavaScript para criar escopos isolados 
e evitar a poluição do escopo global. */

const nome = "Polese";

(function () {
  const nome = "Alícya";
  console.log(nome);
})();

console.log(nome);
console.log("================================================================");

/* ========================================================================== */

const nome1 = "Alícya";
const sobrenome = "Capucho";
const idadePesoAltura = [17, 45, 1.55];

(function (idade, peso, altura) {

  const sobrenome = "Polese";
  
  function criaNome(nome1) {
    return `${nome1} ${sobrenome}: ${idade},${peso},${altura}.`;
  }

  function falaNome() {
    console.log(criaNome("Enzo"));
  }

  falaNome();

})(19, 55, 1.67);

console.log(`${nome1} ${sobrenome}: ${idadePesoAltura}.`);