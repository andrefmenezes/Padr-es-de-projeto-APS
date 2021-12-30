import { Roupas } from './roupas';
import { Bebidas } from './bebidas';
import { Eletronicos } from './eletronicos';
import { ChinaTax } from './tax-China';
import { EUATax } from './tax-EUA';

const roupas = new Roupas(50);
const bebidas = new Bebidas(20);
const eletronicos = new Eletronicos(15);

const chinaTax = new ChinaTax();
const euaTax = new EUATax();

const cart = [roupas, bebidas, eletronicos];
const total = cart.reduce((soma, item) => item.getPrecoProduto() + soma, 0);
const totalTaxasChina = cart.reduce(
  (soma, item) => item.getTaxaProduto(chinaTax) + soma,
  0,
);
const totalTaxasEUA = cart.reduce(
  (soma, item) => item.getTaxaProduto(euaTax) + soma,
  0,
);
console.log(total);
console.log(totalTaxasChina);
console.log(totalTaxasEUA);
