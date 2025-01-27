// calculadora básica
function calculadora(a, b, operacao) {
    switch (operacao) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return "Operação inválida";
    }
}

console.log(calculadora(10, 5, "+"));

// converte temperatura
function celsiusParaFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

console.log(celsiusParaFahrenheit(25));

// calcular fatorial
function fatorial(n) {
    if (n === 0) return 1;
    return n * fatorial(n - 1);
}

// filtrar números positivos em um array
function filtrarPositivos(array) {
    return array.filter((numero) => numero > 0);
}

console.log(filtrarPositivos([-3, 5, -1, 8]));
