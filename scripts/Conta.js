"use strict";
function Conta (nome, quantidade) {
  this.nome = nome
  this.saldo = quantidade
  this.extrato = []
}

Conta.prototype.getSaldo = function(){
  return this.saldo;
}

Conta.prototype.sacar = function(valor){
  if(this.saldo - valor < 0) {
    throw new Error("Saldo na conta insuficiente");
  } else {
    this.saldo -= valor;
    this.registraAcao("Saque - R$ "+valor);
  }
}

Conta.prototype.registraAcao = function (acao) {
  this.extrato.push(acao);
}
