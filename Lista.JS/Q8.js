function numMultiplosDeTres(num) {
    let qtnNumMultiplos = 0;
    let numMultiplos = [];

    for (let i = 0; i < num.length; i++) {
        if (num[i] % 3 == 0) {
            qtnNumMultiplos += 1;
            numMultiplos.push(num[i]);
        }
    }

    return { numMultiplos, qtnNumMultiplos };
}

const numeros = [1, 3, 5, 6, 9, 12];
const { numMultiplos, qtnNumMultiplos } = numMultiplosDeTres(numeros)
console.log(`Os numeros multiplos de 3 sao ${numMultiplos} e ha ${qtnNumMultiplos}`)