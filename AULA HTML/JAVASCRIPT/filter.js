//29042026

//FILTER
//callback
// Array.metodo((element, index, array) => {

// });

//-------------------------------------------------------------
//foreach
// const frutas =["Maça", "Banana", "Uva"];

// frutas.forEach((element,index) => {
//     console.log(index, element);
// });
// //mesma coisa que for
// for (let i=0; i < frutas.length; i++){
//     console.log(`${i}, ${frutas[i]}`);
// }
//-------------------------------------------------------------
// const alunos = ["Lucas", "Maria", "Joao"];

// alunos.forEach((nome, index) => {
//     console.log(`${index + 1} aluno ${nome}`);
// });
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

//-------------------------------------------------------------

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numeros.filter((par) => {
    if (par % 2 === 0){
        return par;
    }
})

console.log(pares);

//-------------------------------------------------------------