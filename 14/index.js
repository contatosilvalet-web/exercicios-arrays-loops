// Exemplo 01
const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];

for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] < arrayB[i]) {
        console.log(arrayA[i]);
    } else {
        console.log(arrayB[i]);
    }
}

/* Imprime
5
4
3
2
1 */

// Exemplo 02 
const arrayA = [1, 3, 3, 44, 11];
const arrayB = [57, 4, 21, 32, 13];

for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] < arrayB[i]) {
        console.log(arrayA[i]);
    } else {
        console.log(arrayB[i]);
    }
}

/* Imprime
1
3
3
32
11 */

/* Outros exemplos
const arrayA = [2,12,45,68,73];
const arrayB = [69,79,85,89,99];

Imprime 
2
12
45
68
73

const arrayA = [6,13,18,19,23];
const arrayB = [30,36,45,57,61];
Imprime
6
13
18
19
23
*/

/* Também tem como fazer o exercício usando a ferramenta do JavaScript Math.min()

const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];

for (let i = 0; i < arrayA.length; i++) {
    console.log(Math.min(arrayA[i], arrayB[i]));
}

Imprime
5
4
3
2
1
*/
