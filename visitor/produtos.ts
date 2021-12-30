import { Visitor } from './Visitor';

export abstract class Produtos {
  constructor(protected nome: string, protected preco: number) {}

  getNomeProduto(): string {
    return this.nome;
  }

  getPrecoProduto(): number {
    return this.preco;
  }

  abstract getTaxaProduto(visitor: Visitor): number;
}
