// recursão é uma técnica onde uma função se chama repetidamente até atingir uma condição que interrompa essa chamada

function contarRegressivamente(numero) {
    if (numero === 0) {
        console.log("Fim! 🚀");
        return;
    }

    console.log(numero);
    contarRegressivamente(numero - 1); // A função chama a si mesma
}

contarRegressivamente(5);

// estrutura da recursão
// 1. caso base, condição que interrompe a recursão, sem isso entraria em loop infinito
// 2. chamada recursiva, chama a si mesma com um valor atualizado

function somaAte(numero) {
    if (numero === 1) return 1; // Caso base
    return numero + somaAte(numero - 1); // Chamada recursiva
}

console.log(somaAte(5)); 

// pilha de chamada
// recursão utilizar uma estrutura pilha de chamadas. Cada chamada é adicionada na pilha de chamadas, quando o caso base é atingido, as chamadas começam a ser resolvidas em ordem inversa.
// visualizando a pilha
// 1. somaAte(5) chama somaAte(4)
// 2. somaAte(4) chama somaAte(3)
// 3. somaAte(3) chama somaAte(2)
// 4. somaAte(2) chama somaAte(1)
// 5. somaAte(1) , que retorna 1
// 6. as chamadas começam a ser resolvidas: 1 + 2 + 3 + 4 + 5

// cuidados com a recursão
// 1. evitar loops infinitos, garantindo o caso base, se o caso base não for atingido, o loop não irá parar o que pode causa um estouro de pilha
// 2. evite recursões profundas: se o problema envolve muitas chamadas, prefira usar um loop, contornando problemas de desempenho
// 3. compare com iteração: nem todo problema precisa de recursão, compare a eficiência entre loop e recursão

