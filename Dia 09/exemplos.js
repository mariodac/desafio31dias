// fatorial de um numero
function fatorial(n) {
    if (n === 0) return 1; // Caso base
    return n * fatorial(n - 1); // Chamada recursiva
}

console.log(fatorial(5));

//   sequência de Fibonacci
function fibonacci(n) {
    if (n <= 1) return n; // Caso base
    return fibonacci(n - 1) + fibonacci(n - 2); // Chamada recursiva
}

console.log(fibonacci(6));

// navegando em uma estrutura de diretórios
function listarArquivos(diretorio) {
    for (let item of diretorio) {
        if (Array.isArray(item)) {
            listarArquivos(item); // Chamada recursiva
        } else {
            console.log(item); // Arquivo
        }
    }
}

let arquivos = ["index.html", ["css", "style.css"], ["js", "script.js"]];
listarArquivos(arquivos);

// inverter uma string
function inverterString(str) {
    if (str === "") return ""; // Caso base
    return inverterString(str.slice(1)) + str[0]; // Chamada recursiva
}

console.log(inverterString("recursão"));

// soma de elementos de um array
function somaArray(array) {
    if (array.length === 0) return 0; // Caso base
    return array[0] + somaArray(array.slice(1)); // Chamada recursiva
}

console.log(somaArray([1, 2, 3, 4]));

// potenciação
function potencia(base, expoente) {
    if (expoente === 0) return 1; // Caso base
    return base * potencia(base, expoente - 1); // Chamada recursiva
}

console.log(potencia(2, 3));
