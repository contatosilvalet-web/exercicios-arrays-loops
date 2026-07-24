const numeros = [3, 4, 7, 8, 1, 6, 5, 10];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        soma += numeros[i]; 
    }
}

console.log(soma);

// Imprime "28"

/* Outros exemplos
const numeros = [12, 16, 22, 25, 30, 31, 45, 48];
Imprime 128.

const numeros = [2,4,6];
Imprime 12.

const numeros = [15,27,35,41];
Imprime 0.

const numeros = [13, 25, 30, 33, 45];
Imprime 30. */
