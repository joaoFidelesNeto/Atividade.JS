const ehPalindromo = (palavra) => {
    palavra = palavra.toLowerCase();

    for (let i = 0; i < palavra.length / 2; i++) {
        if (palavra[i] !== palavra[palavra.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(ehPalindromo("ana"));
console.log(ehPalindromo("arara"));
console.log(ehPalindromo("osso"));
console.log(ehPalindromo("radar"));
console.log(ehPalindromo("A mala nada na lama"));
console.log(ehPalindromo("arraia"));