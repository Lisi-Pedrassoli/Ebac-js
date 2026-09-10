function calcularMDC(numero1, numero2) {
    let mdc = 1;

    for (let i = 1; i <= numero1 && i <= numero2; i++) {
        if (numero1 % i === 0 && numero2 % i === 0) {
            mdc = i;
        }
    }

    return mdc;
}

console.log(calcularMDC(12, 18));