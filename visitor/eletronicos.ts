import { Produtos } from './produtos';
import { Visitor } from './Visitor';

export class Eletronicos extends Produtos {
  constructor(protected preco: number) {
    super('Eletronicos', preco);
  }

  getTaxaProduto(visitor: Visitor): number {
    return visitor.calculaTotalEletronicoComTaxa(this);
  }
}
