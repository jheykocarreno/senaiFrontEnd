// #######################    Exercícios Map, Find, Filter e Reduce    #######################
 
// //##########################     FILTER()     //##########################

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

const media = numeros3.reduce((acc, elemento, index, array) => {
    
    acc += elemento;

    if (index === array.length - 1){
        return acc / array.length;
    }

    return acc;
},0 );

console.log(media);

//##########################    DESAFIOS (misturando funções)    ##########################

// 1. Dado o array
const livros = [
  { titulo: "Dom Casmurro", paginas: 300 },
  { titulo: "O Hobbit", paginas: 295 },
  { titulo: "A Revolução dos Bichos", paginas: 112 }
];

//- Filtre apenas os livros com mais de 200 páginas.
const livro200 =  livros.filter((elemento => {
    return elemento.paginas > 200;
}))
console.log(livro200);

//- Crie um array apenas com os títulos.
const livroTitulo = livros.map((elemento => {
    return elemento.titulo;
}))
console.log(livroTitulo);

//- Calcule o total de páginas de todos os livros.
const totalPaginas = livros.reduce((acc, elemento) => {
    acc += elemento.paginas;
    return acc;
},0);
console.log(totalPaginas);


// 2. Dado o array
const carrinho = [
  { produto: "Notebook", preco: 2500 },
  { produto: "Mouse", preco: 100 },
  { produto: "Teclado", preco: 200 }
];


//- Use `map` para criar uma lista de strings no formato `"Produto: X - R$ Y"`.
const listaString = carrinho.map((elemento) => {
    return "Produto: " + elemento.produto + " - R$ " + elemento.preco;
})
console.log(listaString);

//- Use `reduce` para calcular o valor total da compra.
const totalCompra = carrinho.reduce((acc, elemento) => {
    acc += elemento.preco;
    return acc;
},0);
console.log(totalCompra)

//- Use `find` para encontrar o produto chamado `"Mouse"`.
const mouseFind = carrinho.find((elemento => {
    return elemento.produto === "Mouse";
}))
console.log(mouseFind);



const tenico = {
    nome:"" ,
    qtde: 0
}
const tecnicos[3];
