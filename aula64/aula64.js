const primeiroArray = [1, 2, 3];
const segundoArray = [4, 5, 6];

const terseiroArray = primeiroArray.concat(segundoArray, [7, 8, 9], "Enzo");

console.log(terseiroArray);
console.log("================================================================");

/* ========================================================================== */

const primeiroArray1 = [1, 2, 3];
const segundoArray1 = [4, 5, 6];

const terseiroArray1 = [...primeiroArray1, ...segundoArray1];

console.log(terseiroArray);
console.log("================================================================");
