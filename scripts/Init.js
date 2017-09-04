"use strict";
(function Init(){
  let caixa = new Caixa(1000);
  let conta = new Conta("João da Silva", 2000.00);

  let acoes = new Acoes(conta, caixa);
  acoes.verSaldo();
  acoes.verNomeConta();
  acoes.verDinheiroCaixa();
  acoes.showExtrato();

  document.getElementById("btn-confirmar-saque").onclick = function() {
    acoes.sacar()
  };

  document.getElementById("btn-toggle-form").onclick = function() {
    document.querySelector('.div-saque').classList.toggle('hidden');
  };

})()
