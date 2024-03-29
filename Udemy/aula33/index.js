const pessoa = {
  nome: 'Enzo',
  sobrenome: 'Polese',
  idade: 19,
  endereco: {
    rua: 'Av Brasil',
    numero: 320
  }
};

// Atribuição via desestruturação
const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, resto);
