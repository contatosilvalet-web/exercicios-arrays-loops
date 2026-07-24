const numeros = [3, 4, 1, 8, 11, 7, 5];
let maiorNumero = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i];
    }
}

console.log(maiorNumero);

// Imprime "11"

/* Outros exemplos
const numeros = [14,23,18,53,69];
Imprime 69.

const numeros = [3, 12, 14, -6, 17, 21];
Imprime 21.

const numeros = [-1,-2,-3,-4,-5];
Imprime -1.

const numeros = [23,42, 73, 15, 13, 19, 44, 56, 102, 1100, 158, 139];
Imprime 1100.
