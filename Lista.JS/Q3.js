const rl = require("../configs/readline");

rl.question("Digite sua idade: ", (answer) => {
    if(parseInt(answer) >= 18) {
        console.log("Maior de idade");
    }else {
        console.log("Menor de idade");
    }

    rl.close();
});