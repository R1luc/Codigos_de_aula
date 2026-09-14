import { Service, Signal, signal } from '@angular/core';
import { Itens } from './produto';

@Service()
export class CarrinhoService {
    protected itens = signal<Itens[] | undefined>(undefined);

    adicionarItem(item: Itens) {
        const itensAtuais = this.itens();
        if (itensAtuais) {
            this.itens.set([...itensAtuais, item]);
        } else {
            this.itens.set([item]);
        }
    }

    aumentarQuantidade(itemId: number) {
        const itensAtuais = this.itens();
        if (itensAtuais) {
            const itensAtualizados = itensAtuais.map(item => {
                if (item.id === itemId) {
                    return { ...item, quantidade: item.quantidade + 1 };
                }
                return item;
            });
            this.itens.set(itensAtualizados);
        }
    }

    diminuirQuantidade(itemId: number) {
        const itensAtuais = this.itens();
        if (itensAtuais) {
            const itensAtualizados = itensAtuais.map(item => {
                if (item.id === itemId && item.quantidade > 1) {
                    return { ...item, quantidade: item.quantidade - 1 };
                }
                return item;
            });
            this.itens.set(itensAtualizados);
        }
    }

    removerItem(itemId: number) {
        const itensAtuais = this.itens();
        if (itensAtuais) {
            const itensAtualizados = itensAtuais.filter(item => item.id !== itemId);
            this.itens.set(itensAtualizados);
        }
    }

    obterItens(): Signal<Itens[] | undefined> {
        return this.itens;
    }

    obterTotal(): number {
        const itensAtuais = this.itens();
        if (itensAtuais) {
            return itensAtuais.reduce((total, item) => total + item.produto.preco * item.quantidade, 0);
        }
        return 0;
    }
}
