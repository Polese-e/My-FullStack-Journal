// For in -> lê os índices ou chaves do objeto
//                 0       1      2
const pessoa = {
  nome: 'Enzo',
  sobrenome: 'Polese',
  idade: 19
};

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}

// for (let index in frutas) {
//   console.log(frutas[index]);
// }

// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }