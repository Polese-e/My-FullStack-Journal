/* O polimorfismo em JavaScript refere-se à capacidade de objetos diferentes 
responderem ao mesmo método de forma distinta, com base em sua própria 
implementação. Isso permite que métodos com o mesmo nome se comportem de 
maneiras diferentes, dependendo do tipo de objeto que está sendo manipulado. */

function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (valor > this.saldo) {
    console.log(`Saldo insuficiente: ${this.saldo}`);
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};

Conta.prototype.verSaldo = function () {
  console.log(`Agência: ${this.agencia}`);
  console.log(`Conta: ${this.conta}`);
  console.log(`Saldo: R$${this.saldo.toFixed(2)}`);
};

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

ContaPoupanca.prototype.sacar = function (valor) {
  if (valor > this.saldo + this.limite) {
    console.log(`Saldo insuficiente: ${this.saldo}`);
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

const conta = new Conta(23, 11, 10);

conta.depositar(21);
conta.sacar(31);
conta.sacar(0.01);

console.log("================================================================");

const contacorrente = new ContaCorrente(11, 22, 0, 100);

contacorrente.depositar(10);
contacorrente.sacar(110);

console.log("================================================================");

const contapoupanca = new ContaPoupanca(12, 33, 0);

contapoupanca.depositar(10);
contapoupanca.sacar(10);
contapoupanca.sacar(1);
