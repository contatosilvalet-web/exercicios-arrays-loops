// EXEMPLO 01
const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

while (filaDeDentro.length < 5 && filaDeFora.length > 0) {
    const proximaPessoa = filaDeFora.shift();
    filaDeDentro.push(proximaPessoa);
}

console.log(filaDeDentro);
console.log(filaDeFora);

/* Imprime [ 'Jose', 'Maria', 'Joao', 'Joana', 'Roberta' ]
[ 'Marcos', 'Felipe' ] */

// EXEMPLO 02

const filaDeDentro = ["Jose", "Joao"];
const filaDeFora = ["Joana", "Roberta"];

while (filaDeDentro.length < 5 && filaDeFora.length > 0) {
    const proximaPessoa = filaDeFora.shift();
    filaDeDentro.push(proximaPessoa);
}

console.log(filaDeDentro);
console.log(filaDeFora);

/* Imprime [ 'Jose', 'Joao', 'Joana', 'Roberta' ]
[] */ 

/* Outros exemplos
const filaDeDentro = ["Jose", "Joao", "Carla", "Vitor", "Lucia"];
const filaDeFora = ["Joana", "Roberta", "Pedro", "Paulo", "Pietro"];

Imprime [ 'Jose', 'Joao', 'Carla', 'Vitor', 'Lucia' ]
[ 'Joana', 'Roberta', 'Pedro', 'Paulo', 'Pietro' ] 

const filaDeDentro = ["Vitor", "Lucia"];
const filaDeFora = [];

Imprime [ 'Vitor', 'Lucia' ]
[]
*/ 

