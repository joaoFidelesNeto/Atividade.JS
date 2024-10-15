let array = [1, 2, 3, 4, 5, 6];

const resultPares = array.filter((num) => array[num] % 2 != 0);
console.log(`Os numeros pares da lista sao ${resultPares}`);

const resultDobro = resultPares.map((num) => num * 2);
console.log(`O dobro dos pares sao ${resultDobro}`)