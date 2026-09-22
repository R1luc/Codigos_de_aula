import { Service, Signal, signal } from '@angular/core';
import { Itens } from './produto';

@Service()
export class CarrinhoService {
    protected itens = signal<Itens[] | undefined>(undefined);
    protected total = signal<number>(0);
    protected numeroItens = signal<number>(0);

    contarItens() {
        const itens = this.itens() || [];
        const quantidadeTotal = itens.reduce((total, item) => total + item.quantidade, 0);
        this.numeroItens.set(quantidadeTotal);
    }

    obterNumeroItens() {
        return this.numeroItens;
    }

    adicionarItem(item: Itens) {
        const itensAtuais = this.itens() || [];
        if (itensAtuais.some((i: Itens) => i.id === item.id)) {
            this.aumentarQuantidade(item.id);
        } else if (itensAtuais) {
            this.itens.set([...itensAtuais, item]);
        } else {
            this.itens.set([item]);
        }
        this.atualizarTotal();
        this.contarItens();
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
            this.atualizarTotal();
            this.contarItens();
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
            this.atualizarTotal();
            this.contarItens();
        }
        if (itensAtuais && itensAtuais.some((item: Itens) => item.id === itemId && item.quantidade === 1)) {
            this.removerItem(itemId);
            this.contarItens();
        }
    }

    removerItem(itemId: number) {
        const itensAtuais = this.itens() || [];
        if (itensAtuais) {
            const itensAtualizados = itensAtuais.filter((item: Itens) => item.id !== itemId);
            this.itens.set(itensAtualizados);
            this.atualizarTotal();
            this.contarItens();
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

    atualizarTotal() {
        this.total.set(this.obterTotal());
    }

    obterTotalSignal() {
        return this.total;
    }
}
