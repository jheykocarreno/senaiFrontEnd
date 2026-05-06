// #######################    Exercícios Map, Find, Filter e Reduce    #######################
 
// ### **FILTER()**

// 1. Dado o array `const notas = [4, 7, 9, 3, 10, 5];`, filtre apenas as notas maiores ou iguais a 7.
const notas = [4, 7, 9, 3, 10, 5];

const aprovados = notas.filter((elemento => {
    return elemento >= 7;
}))
console.log(aprovados);


// 2. Dado o array const palavras = ["sol", "mar", "computador", "lua", "código"];, filtre apenas as palavras com mais de 4 letras.
const palavras = ["sol", "mar", "computador", "lua", "código"];

const fourLetter = palavras.filter((elemento => {
    return elemento.length > 4;
}))
console.log(fourLetter);

// 3. Dado o array const animais = ["gato", "cachorro", "peixe", "elefante", "abelha"];, filtre apenas os animais cujo nome começa com a letra "c".
const animais = ["gato", "cachorro", "peixe", "elefante", "abelha"];

const animaisC = animais.filter((elemento => {
    return elemento[0] === "c";

}))
console.log(animaisC);

//##########################      FIND()     #######################

// 1. Dado o array `const filmes = ["Avatar", "Batman", "Vingadores", "Matrix", "Barbie"];`, encontre o primeiro filme que começa com a letra **"B"**.
const filmes = ["Avatar", "Batman", "Vingadores", "Matrix", "Barbie"];

const filmeB = filmes.find((elemento => {
    return elemento[0] === "B";
}))
console.log(filmeB);

// 2. Dado o array const numeros = [2, 4, 6, 9, 12, 15];, encontre o primeiro número ímpar.
const numeros = [2, 4, 6, 9, 12, 15];

const numImpar = numeros.find((elemento => {
    if (elemento % 2 != 0){
        return elemento;
    }
}))
console.log(numImpar);

// 3.Dado o array const alunos = [{nome: "Ana", nota: 8}, {nome: "Carlos", nota: 5}, {nome: "Beatriz", nota: 9}];, encontre o primeiro aluno com nota maior ou igual a 7.
const alunos = [
    {nome: "Ana", nota: 8}, 
    {nome: "Carlos", nota: 5}, 
    {nome: "Beatriz", nota: 9}
];

const nota7 = alunos.find((elemento => {
    return elemento.nota >= 7;
}))
console.log(nota7);

//##########################      MAP()    #######################
// 1. Dado o array const temperaturas = [20, 25, 30, 15];, crie um novo array convertendo para Fahrenheit (C * 1.8 + 32).
const temperaturas = [20, 25, 30, 15];

const tempFahrenheit = temperaturas.map((elemento => {
    return (elemento * 1.8) + 32;
}))
console.log(tempFahrenheit);

// 2. Dado o array const produtos = ["camisa", "calça", "sapato"];, crie um novo array com os nomes em maiúsculo e prefixo "Produto: ".
const produtos = ["camisa", "calça", "sapato"];

const prefixo = produtos.map((elemento => {
    return "Produto: " + elemento;
}))
console.log(prefixo);

// Dado o array const numeros = [1, 2, 3, 4];, crie um novo array com cada número elevado ao quadrado (x ** 2).
const numeros2 = [1, 2, 3, 4];

const numAoQuadrado = numeros2.map((elemento => {
    return elemento ** 2;
}))
console.log(numAoQuadrado);

//##########################      REDUCE()    #######################
// 1. Dado o array const valores = [100, 200, 50, 150];, calcule o total (como se fosse uma soma de compras).
const valores = [100, 200, 50, 150];

const somaCompras = valores.reduce((acc, elemento) => {
    return acc += elemento;
}, 0);
console.log(somaCompras);

// 2. Dado o array const palavras = ["JS", "é", "muito", "legal"];, use reduce para juntar tudo em uma única frase.
const palavras2 = ["JS", "é", "muito", "legal"];

const concatenar = palavras2.reduce((acc, elemento) => {
    return acc = acc + " " + elemento;   
})
console.log(concatenar);

// 3. Dado o array const numeros = [1, 2, 3, 4, 5];, use reduce para calcular a média.
const numeros3 = [1, 2, 3, 4, 5];

const media = numeros3.reduce((acc, elemento) => {
    
    acc += elemento;
})