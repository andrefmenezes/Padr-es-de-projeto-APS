import { Produtos } from './produtos';
import { Visitor } from './Visitor';

export class Roupas extends Produtos {
  constructor(protected preco: number) {
    super('Roupas', preco);
  }

  getTaxaProduto(visitor: Visitor): number {
    return visitor.calculaTotalRoupasComTaxa(this);
  }
}
