// Exemplo 01
const disjuntores = [false, false, true, false, false, true, false, false];

for (let i = 0; i < disjuntores.length; i++) {
    if (disjuntores[i]) {
        console.log(i);
    }
}

/* Imprime 
2
5 */

// Exemplo 02
const disjuntores = [
  false,
  true,
  true,
  false,
  false,
  true,
  false,
  false,
  true,
  true,
];

for (let i = 0; i < disjuntores.length; i++) {
    if (disjuntores[i]) {
        console.log(i);
    }
}

/* Imprime 
1
2
5
8
9
*/ 
