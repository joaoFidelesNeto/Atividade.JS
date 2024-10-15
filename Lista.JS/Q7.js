/*
* Tem o .sort() mais ai não teria emoção
*/
function ordenarFrutas(frutas) {
    for(let i = 0; i < frutas.length; i++) {
        for(let j = 0; j < frutas.length - 1 - i; j++) {
            if(frutas[j] > frutas[j + 1]) {
                let temp = frutas[j];
                frutas[j] = frutas[j + 1];
                frutas[j + 1] = temp;
            }
        }
    }

    return frutas;
}

const frutas = ['maçã', 'laranja', 'banana', 'açaí'];
console.log(ordenarFrutas(frutas));