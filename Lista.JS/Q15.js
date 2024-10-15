const sumMatriz = (matriz) => {
    let sumNumMatriz = 0;

    for(let i = 0; i < matriz.length; i++) {
        for(let j = 0; j < matriz[i].length; j++) {
            sumNumMatriz += matriz[i][j];
        }
    }

    return sumNumMatriz;
}

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(`A soma dos elementos da matriz e ${sumMatriz(matriz)}`)
