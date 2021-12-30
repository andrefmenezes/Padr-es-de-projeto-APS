import { Visitor } from './Visitor';
import { Bebidas } from './bebidas';
import { Eletronicos } from './eletronicos';
import { Roupas } from './roupas';

export class ChinaTax implements Visitor {

  calculaTotalRoupasComTaxa(roupas: Roupas): number {
    return roupas.getPrecoProduto() + roupas.getPrecoProduto() * 0.05;
  }

  calculaTotalBebidaComTaxa(bebidas: Bebidas): number {
    return bebidas.getPrecoProduto() + bebidas.getPrecoProduto() * 1.5;
  }

  calculaTotalEletronicoComTaxa(eletronicos: Eletronicos): number {
    return eletronicos.getPrecoProduto() + eletronicos.getPrecoProduto() * 0.5;
  }
}
