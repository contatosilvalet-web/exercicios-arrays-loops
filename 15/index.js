// Usando o for

const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

for (let numero of original) {
    if (numero % 2 === 0) {
        pares.push(numero);
    } else {
        impares.push(numero);
    }
}

console.log(pares);
console.log(impares);

/* Imprime
[ 2, 4, 6, 8, 10 ]
[ 1, 3, 5, 7, 9 ] */

/* Usando outros exemplos de loops que aprendemos 

Usando o While 
const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

let i = 0;

while (i < original.length) {
    const numeroAtual = original[i];
    
    if (numeroAtual % 2 === 0) {
        pares.push(numeroAtual);
    } else {
        impares.push(numeroAtual);
    }
    
    i++; 
}

console.log(pares);
console.log(impares);

Imprime 
[ 2, 4, 6, 8, 10 ]
[ 1, 3, 5, 7, 9 ]

Usando o for...of
const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

for (let numero of original) {
    if (numero % 2 === 0) {
        pares.push(numero);
    } else {
        impares.push(numero);
    }
}

console.log(pares);
console.log(impares);

Imprime 
[ 2, 4, 6, 8, 10 ]
[ 1, 3, 5, 7, 9 ] */
