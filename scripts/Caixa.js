"use strict";
function Caixa (quantidade) {
  this.dinheiros = quantidade
}

Caixa.prototype.getSaldo = function(){
  return this.dinheiros;
}

Caixa.prototype.sacar = function(valor) {
  if(this.dinheiros - valor < 0) {
    throw new Error("Dinheiro no caixa insuficiente");
  } else {
    this.dinheiros -= valor
  }
}
