import { Produtos } from './produtos';
import { Visitor } from './Visitor';

export class Bebidas extends Produtos {
  constructor(protected preco: number) {
    super('Bebidas', preco);
  }

  getTaxaProduto(visitor: Visitor): number {
    return visitor.calculaTotalBebidaComTaxa(this);
  }
}
