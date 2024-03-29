/* Este código em JavaScript implementa uma função ValidaCPF que verifica se um 
CPF é válido. Ele remove caracteres não numéricos, calcula os dígitos 
verificadores e compara com o CPF fornecido. O resultado da validação é impresso 
no console. */

function ValidaCPF(cpfEnviado) {
  Object.defineProperty(this, "cpfLimpo", {
    get: function () {
      return cpfEnviado.replace(/\D+/g, "");
    },
  });
}

ValidaCPF.prototype.valida = function () {
  if (typeof this.cpfLimpo === "undefined") return false;
  if (this.cpfLimpo.length !== 11) return false;
  if (this.isSequencia()) return false;

  const cpfParcial = this.cpfLimpo.slice(0, -2);
  const digito1 = this.criaDigito(cpfParcial);
  const digito2 = this.criaDigito(cpfParcial + digito1);
  const novoCpf = cpfParcial + digito1 + digito2;

  return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
  const cpfArray = Array.from(cpfParcial);
  let regressivo = cpfArray.length + 1;
  const total = cpfArray.reduce((acumulador, valor) => {
    acumulador += regressivo * Number(valor);
    regressivo--;
    return acumulador;
  }, 0);
  const digito = 11 - (total % 11);

  return digito > 9 ? "0" : String(digito);
};

ValidaCPF.prototype.isSequencia = function () {
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
  return sequencia === this.cpfLimpo;
};

const cpf = new ValidaCPF("070.987.720-03");

if (cpf.valida()) {
  console.log("CPF válido.");
} else {
  console.log("CPF inválido.");
}
