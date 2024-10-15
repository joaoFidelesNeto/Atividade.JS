const quadradoNumInteiros = (numeros) => {
    for(let i = 0; i < numeros.length; i++) {
        if(numeros[i] * numeros[i] > 10) {
            numeros[i] = numeros[i] * numeros[i];
        }
    }

    return numeros
}
const numeros = [1, 2, 3, 5, 8, 10, 50, 20];
console.log(`Saida: ${quadradoNumInteiros(numeros).map((num) => num)}`);