/*
Primitivos (imutáveis) - string, number, boolean, undefined, 
null (bigint, symbol) - Valores copiados

Referência (mutável) - array, object, function - Passados por referência
*/
const a = {
  nome: 'Enzo',
  sobrenome: 'Polese'
};
const b = a;

b.nome = 'João';
console.log(a);
console.log(b);
