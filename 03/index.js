// LETRA A

const numeros = [54, 22, 14, 87, 284];
let posicaoDoDez = -1;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === 10) {
        posicaoDoDez = i; 
        break; 
    }
}

console.log(posicaoDoDez);

// Imprime -1.

// LETRA B
const numeros = [54, 22, 14, 10, 284];
let posicaoDoDez = -1;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === 10) {
        posicaoDoDez = i; 
        break;
    }
}

console.log(posicaoDoDez);

// Imprime 3.

/* Outros exemplos
const numeros = [10, 22, 14, 87, 284];
Imprime 0.

const numeros = [54, 22, 14, 87, 10];
Imprime 4.
*/


