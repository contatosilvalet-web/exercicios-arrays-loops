const nomes = ["Ana", "Joana", "Carlos", "amanda"];
let nomesComA = [];

for (let i = 0; i < nomes.length; i++) {
    const nomeAtual = nomes[i];
    if (nomeAtual[0] === "A" || nomeAtual[0] === "a") {
        nomesComA.push(nomeAtual);
    }
}

console.log(nomesComA);

// Imprime "[ 'Ana', 'amanda' ]"

/* Outros exemplos
const nomes = ["Ameli", "ananda", "Julia", "Angelo", "Leticia"];
Imprime "[ 'Ameli', 'ananda', 'Angelo' ]"

const nomes = ["Lucas, Carlos, Vera, Luiza"];
Imprime "[]"

const nomes = ["Vera", "Ana Julia", "aninha", "Carlos", "Pedro", "Sophia", "Anastacia", "Junior", "Vitor", "Luzia", "ariel", "Andre", "Augusto", "Luz"];
Imprime "[ 'Ana Julia', 'aninha', 'Anastacia', 'ariel', 'Andre', 'Augusto' ]". */

