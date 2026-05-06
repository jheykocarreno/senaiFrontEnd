//29042026

//FILTER
//callback
// Array.metodo((element, index, array) => {

// });

//-------------------------------------------------------------
//                              FOREACH
//-------------------------------------------------------------
// const frutas =["Maça", "Banana", "Uva"];

// frutas.forEach((element,index) => {
//     console.log(index, element);
// });
// //mesma coisa que for
// for (let i=0; i < frutas.length; i++){
//     console.log(`${i}, ${frutas[i]}`);
// }
//---------------------------------------------
// const alunos = ["Lucas", "Maria", "Joao"];

// alunos.forEach((nome, index) => {
//     console.log(`${index + 1} aluno ${nome}`);
// });
//-------------------------------------------------------------
//                              FILTER
//-------------------------------------------------------------
// const people = [
//     {name:"Lucas", age:35},
//     {name:"Maria", age:17},
//     {name:"Joao", age:18},
//     {name:"Ana", age:22}
// ];

//         // const novoArray = array.filter(element) => {
//         //     return condition;
//         // }

// const maiores = people.filter((person) => {
//     return person.age >= 18;
// })

// console.log(maiores);

//---------------------------------------------
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const pares = numeros.filter((par) => {
//     if (par % 2 === 0){
//         return par;
//     }
// })

// console.log(pares);

//-------------------------------------------------------------
//                              MAP
//-------------------------------------------------------------

//-------------------------------------------------------------
//                              REDUCE
//-------------------------------------------------------------
// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue, initialValue,
// );

// console.log(sumWithInitial);
// // Expected output: 10

//---------------------------------------------
// const numero = [10,45,7,99,32];

// const menorNum = numero.reduce((acc, val) => {
//     if (acc < val){
//         //acc = val;
//         return val;     //retorna o valor do elemento
//     }
//     return acc;         //acc toma o valor do return do IF
// });

// console.log(menorNum)

// //OUTRA MANEIRA DE FAZER O DE ACIMA
// const numeros = [10,45,7,99,32];

// const menorNums = numero.reduce((acc, val) => {
//     if (acc < val){
//         //acc = val;
//         return val;     //retorna o valor do elemento
//     }
//     return acc;         //acc toma o valor do return do IF
// },numeros[0]);

// console.log(menorNums)

//---------------------------------------------
//utilizar MAP e FILTER
// const produtos = [
//     {nome: "Mouse", preco:50},
//     {nome: "Teclado", preco:200},
//     {nome: "Monitor", preco:900},
//     {nome: "Notebook", preco:3000}
// ]

// const resultado = produtos.filter((produto) => {
//     return produto.preco > 100;
// })
// .map((produto) => {
//     return produto.nome;
// });

// console.log(resultado);

//---------------------------------------------
const filmes = [
    {nome:"Vingadores", nota:9},
    {nome:"Batman", nota:7},
    {nome:"Dragon Ball", nota:10},
    {nome:"Matrix", nota:8}
]

//Use filter para pegar as notas >= 8
const filmeFilter = filmes.filter((element) => {
    return element.nota >= 8;
})
console.log(filmeFilter);

//Use map para pegar apenas os nomes
const filmeMap = filmes.map((element) => {
    return element.nome;
})
console.log(filmeMap);

//Use find para encontrar "Batman"
const filmeFind = filmes.find((element) => {
    return element.nome === "Batman";
})
console.log(filmeFind);

//Use reduce para somar todas as notas
const filmeReduce = filmes.reduce((acc, element) => {
    return acc += element.nota;
}, 0)

console.log(filmeReduce);