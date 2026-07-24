const original = [1, 4, 12, 21, 53, 88, 112];
let pares = [];

for (let i = 0; i < original.length; i++) {
    if (original[i] % 2 === 0) {
        pares.push(original[i]);
    }
}

console.log(pares);

// Imprime [ 4, 12, 88, 112 ].

/* Outros exemplos
const original = [2, 8, 12, 20, 52, 86, 120];
Imprime [ 2,  8,  12, 20,b52, 86, 120 ].

const original = [3,9,15,17];
Imprime []

const original = [26, 30, 33, 67, 89, 110];
Imprime [ 26, 30, 110 ] */

