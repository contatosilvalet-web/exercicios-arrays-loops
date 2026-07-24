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
