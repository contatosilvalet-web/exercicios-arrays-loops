const numeros = [8, 11, 4, 1];
let maiorNumero = numeros[0];
let menorNumero = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i];
    }
    if (numeros[i] < menorNumero) {
        menorNumero = numeros[i];
    }
}

const maiorDiferenca = maiorNumero - menorNumero;

console.log(maiorDiferenca);

// Imprime 10.

/* Outros exemplos
const numeros = [16, 18, 26, 33];
Imprime 17.

const numeros = [2,15,23,48,79,336];
Imprime 334. */
