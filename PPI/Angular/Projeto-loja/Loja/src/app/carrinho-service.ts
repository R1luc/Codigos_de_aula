import { Service, Signal, signal } from '@angular/core';
import { Itens } from './produto';

@Service()
export class CarrinhoService {
    protected itens = signal<Itens[] | undefined>(undefined);

    adicionarItem(item: Itens) {
        const itensAtuais = this.itens() || [];
          if (itensAtuais.some((i: Itens) => i.id === item.id)) {
            this.aumentarQuantidade(item.id);
          }
          else if (itensAtuais) {
            this.itens.set([...itensAtuais, item]);
        } else {
            this.itens.set([item]);
        }
    }

    aumentarQuantidade(itemId: number) {
        const itensAtuais = this.itens() || [];
        if (itensAtuais) {
            const itensAtualizados = itensAtuais.map((item: Itens) => {
                if (item.id === itemId) {
                    return { ...item, quantidade: item.quantidade + 1 };
                }
                return item;
            });
            this.itens.set(itensAtualizados);
        }
    }

    diminuirQuantidade(itemId: number) {
        const itensAtuais = this.itens() || [];
        if (itensAtuais) {
            const itensAtualizados = itensAtuais.map((item: Itens) => {
                if (item.id === itemId && item.quantidade > 1) {
                    return { ...item, quantidade: item.quantidade - 1 };
                }
                return item;
            });
            this.itens.set(itensAtualizados);
        }
        if (itensAtuais && itensAtuais.some((item: Itens) => item.id === itemId && item.quantidade === 1)) {
            this.removerItem(itemId);
        }
    }

    removerItem(itemId: number) {
        const itensAtuais = this.itens() || [];
        if (itensAtuais) {
            const itensAtualizados = itensAtuais.filter((item: Itens) => item.id !== itemId);
            this.itens.set(itensAtualizados);
        }
    }

    obterItens(): Signal<Itens[] | undefined> {
        return this.itens;
    }

    obterTotal(): number {
        const itensAtuais = this.itens() || [];
        if (itensAtuais) {
            return itensAtuais.reduce((total: number, item: Itens) => total + item.produto.preco * item.quantidade, 0);
        }
        return 0;
    }
}
