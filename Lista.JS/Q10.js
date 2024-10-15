const numerosPrimos = (num) => {
    if(num >= 1) {
        for (let i = 2; i < num**0.5; i++) {
            if(num % i === 0) {
                console.log("Esse numero nao e primo")
                return;
            }
        }
        console.log("Esse numero e primo")
        return;
    }else {
        console.log("Esse numero nao e primo");
        return;
    }
};
numerosPrimos(1)