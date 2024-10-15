class Fila {
    constructor () {
        this.itens = [];
    }
    adicionar(item) {
        this.itens.push(item);
        console.log(`O item ${item} foi adicionado a fila.`)
    }

    remover() {
        if(this.itens.length === 0) {
            console.log("A fila ja esta vazia");
        }else {
            const itemREmover = this.itens.shift();
            console.log(`O Item ${itemREmover} foi removido da fila.`)
        }
    }
}
const fila = new Fila();
fila.adicionar(1);
fila.adicionar(2);
fila.adicionar(3);
fila.adicionar(4);
fila.adicionar(5);

fila.remover();
