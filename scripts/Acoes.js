"use strict";
function Acoes (conta, caixa) {
  this.conta = conta;
  this.caixa = caixa;
}

Acoes.prototype.verNomeConta = function () {
  document.getElementById('span-nome-conta').textContent = this.conta.nome;
}

Acoes.prototype.verSaldo = function () {
  document.getElementById('saldo').textContent = this.conta.getSaldo();
}

Acoes.prototype.verDinheiroCaixa = function () {
  document.getElementById('span-dinheiro-caixa').textContent = this.caixa.getSaldo();
}

Acoes.prototype.sacar = function () {
  let valor = document.getElementById("valor-saque").value;
  try {
    this.caixa.sacar(valor);
    this.conta.sacar(valor);
  } catch(err) {
    alert(err);
  } finally {
    this.verSaldo();
    this.verDinheiroCaixa();
    this.showExtrato();
  }
}

Acoes.prototype.showExtrato = function () {
  let conteudo = "";
  let extratoContent = document.getElementById("content-extrato");
  this.conta.extrato.forEach(function(item, index){
    conteudo = conteudo + item + "<br>";
  })
  extratoContent.innerHTML = conteudo;
}
