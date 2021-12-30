const Salgada = require('./Salgada')
const Frango = require('./Frango')
const Doce = require('./Doce')
const Chocolate = require('./Chocolate')

const doce = new Doce();
const pedidoDoce = new Chocolate(doce);

const salgada = new Salgada();
const pedidoSalgado = new Frango(salgada);

console.log(pedidoSalgado.getName(),pedidoSalgado.getValor());
console.log(pedidoDoce.getName(),pedidoDoce.getValor());

