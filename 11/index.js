// LETRA A
const original = [5, 7, 13, 17, 26, 34, 118, 245];
let filtrados = [];


for (let i = 0; i < original.length; i++) {
    let numero = original[i];
    if ((numero >= 10 && numero <= 20) || numero > 100) {
        filtrados.push(numero);
    }
}

console.log(filtrados);

// Imprime [ 13, 17, 118, 245 ].

// LETRA B
const original = [5, 7, 10, 13, 17, 21, 26, 34, 100, 118, 245];
let filtrados = [];


for (let i = 0; i < original.length; i++) {
    let numero = original[i];
    if ((numero >= 10 && numero <= 20) || numero > 100) {
        filtrados.push(numero);
    }
}

console.log(filtrados);

// Imprime [ 10, 13, 17, 118, 245 ].

/* Outros exemplos
const original = [6, 19, 66, 99];
Imprime [ 19 ]

const original = [12, 14, 19, 23, 26, 27, 30, 45, 60];
Imprime [ 12, 14, 19 ]. 

const original = [12, 14, 16, 113 ];
Imprime [ 12, 14, 16, 113 ] */ 

