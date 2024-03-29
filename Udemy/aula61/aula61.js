/* Uma função geradora em JavaScript é uma função especial que pode ser pausada 
e retomada posteriormente, permitindo a produção de uma sequência de valores ao 
longo do tempo. Ela é declarada usando a palavra-chave function* e utiliza a 
palavra-chave yield para retornar valores sem encerrar a função.  */

function* geradora1() {
  //Código qualquer...
  yield "valor 1";
  //Código qualquer...
  yield "valor 2";
  //Código qualquer...
  yield "valor 3";
}

const g1 = geradora1();

console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log("================================================================");

/* ========================================================================== */

function* geradora2() {
  let i = 0;

  while (true) {
    yield i;
    i++;
  }
}

const g2 = geradora2();

console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log("================================================================");

/* ========================================================================== */

function* geradora3() {
  yield 0;
  yield 1;
  yield 2;
}

function* geradora4() {
  yield* geradora3();
  yield 3;
  yield 4;
  yield 5;
}

const g4 = geradora4();

for (let valor of g4) {
  console.log(valor);
}

console.log("================================================================");

/* ========================================================================== */

function* geradora5() {
  yield function () {
    console.log("Vim do yield 1.");
  };

  yield function () {
    console.log("Vim do yield 2.");
  };
}

const g5 = geradora5();

const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();

console.log("================================================================");

/* ========================================================================== */

function* geradora6() {
  yield function () {
    console.log("Vim do yield 1.");
  };

  return function () {
    console.log("Vim do return.");
  };

  yield function () {
    console.log("Vim do yield 2.");
  };
}

const g6 = geradora6();

const funca1 = g6.next().value;
const funca2 = g6.next().value;

funca1();
funca2();