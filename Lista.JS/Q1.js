const rl = require("../configs/readline");

let num1, num2;

rl.question("Digite o primeiro numero: ", (answer1) => {
    num1 = parseFloat(answer1);
    rl.question("Digite o segundo numero: ", (answer2) => {
        num2 = parseFloat(answer2);

        let sum = num1 + num2
        console.log(`A soma do numero e ${sum % 2 == 0 ? "par" : "impar"}`);

        if (num1 > num2) {
            console.log(`O maior numero é ${num1}`);
        } else if (num2 > num1) {
            console.log(`O maior numero é ${num2}`);
        } else {
            console.log(`Os numeros são iguais`);
        }

        rl.close();
    });
});