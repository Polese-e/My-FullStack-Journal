/* O método splice() em JavaScript é utilizado para modificar o conteúdo de um 
array, adicionando ou removendo elementos em posições específicas. A principal 
característica do método é a capacidade de realizar alterações diretas no array 
original. */

const nomes = ["Enzo", "Alícya", "Igor", "João", "Gabriel"];

const removidos = nomes.splice(3, 1);

console.log(nomes, removidos);
console.log("================================================================");

/* ========================================================================== */

const nomes1 = ["Enzo", "Alícya", "Igor", "João", "Gabriel"];

nomes1.splice(5, 0, "Luiz");

console.log(nomes1,);
console.log("================================================================");

/* ========================================================================== */

const nomes2 = ["Enzo", "Alícya", "Igor", "João", "Gabriel"];

const removidos1 = nomes2.splice(-1, 1);

console.log(nomes2, removidos1);
