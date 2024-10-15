const removeFruit = (fruta) => {
    frutas.splice(1, 1);
    frutas.splice(1, 0, fruta);
}

const frutas = ['maçã', 'laranja', 'banana', 'açaí'];

removeFruit("abacaxí")
console.log(frutas)