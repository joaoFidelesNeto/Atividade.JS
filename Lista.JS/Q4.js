function fatorial(n) {
    let result = 1;

    for(let i = n; i > 0; i--) {
        result *= i;
    }

    return result;
}

let num = 5;
console.log(`O fatorial de ${num} e ${fatorial(num)}`);