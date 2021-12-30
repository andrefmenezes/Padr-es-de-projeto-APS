import { Roupas } from './roupas';
import { Eletronicos } from './eletronicos';
import { Bebidas } from './bebidas';

export interface Visitor {
  calculaTotalRoupasComTaxa(roupa:Roupas): number 
  calculaTotalBebidaComTaxa(bebida:Bebidas): number 
  calculaTotalEletronicoComTaxa(eletronico:Eletronicos): number
}
