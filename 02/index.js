//LETRA A

const letras = ["A", "a", "B", "C", "L", "z"];
let contador = 0;

for (let i = 0; i < letras.length; i++) {
    if (letras[i] === "E" || letras[i] === "e") {
        contador++; 
    }
}

if (contador === 0) {
    console.log('Nenhuma letra "E" ou "e" foi encontrada.');
} else if (contador === 1) {
    console.log('Foi encontrada 1 letra "E" ou "e".');
} else {
    console.log(`Foram encontradas ${contador} letras "E" ou "e".`);
}

// Imprime "Nenhuma letra "E" ou "e" foi encontrada."

// LETRA B
const letras = ["A", "e", "B", "C", "E", "z"];
let contador = 0;

for (let i = 0; i < letras.length; i++) {

    if (letras[i] === "E" || letras[i] === "e") {
        contador++; 
    }
}

if (contador === 0) {
    console.log('Nenhuma letra "E" ou "e" foi encontrada.');
} else if (contador === 1) {
    console.log('Foi encontrada 1 letra "E" ou "e".');
} else {
    console.log(`Foram encontradas ${contador} letras "E" ou "e".`);
}

// Imprime "Foram encontradas 2 letras "E" ou "e"."

/* Outros exemplos
const letras = ["A", "e", "B", "C", "E", "z", "e"];
Imprime "Foram encontradas 3 letras "E" ou "e"."

const letras = ["A", "e", "B", "C", "E", "z", "e", "E"];
Imprime "Foram encontradas 4 letras "E" ou "e"."
*/
