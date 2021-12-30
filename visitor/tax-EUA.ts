import { Visitor } from './Visitor';
import { Bebidas } from './Bebidas';
import { Eletronicos } from './eletronicos';
import { Roupas } from './roupas';

export class EUATax implements Visitor {

  calculaTotalRoupasComTaxa(roupas: Roupas): number {
    return roupas.getPrecoProduto() + roupas.getPrecoProduto() * 0.15;
  }

  calculaTotalBebidaComTaxa(bebidas: Bebidas): number {
    return bebidas.getPrecoProduto() + bebidas.getPrecoProduto() * 2;
  }

  calculaTotalEletronicoComTaxa(eletronicos: Eletronicos): number {
    return eletronicos.getPrecoProduto() + eletronicos.getPrecoProduto() * 1;
  } 

}
