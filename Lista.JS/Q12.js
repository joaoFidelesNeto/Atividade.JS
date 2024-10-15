const calcSumAllElementArray = (numeros) => {
    const initialValue = 0;
    const sum = numeros.reduce((accumulator, currentValue) => 
        accumulator + currentValue, initialValue);

    return sum;
}

const numeros = [1, 2, 3, 5, 8, 10, 50, 20];
console.log(`A soma total dos elementos e ${calcSumAllElementArray(numeros)}`)