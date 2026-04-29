//---------------------------------------------------------------
//WHILE - Em quanto a condião for TRUE, continua
//---------------------------------------------------------------
// 1- Contagem progresiva
// let contador = 1;

// while (contador <= 5) {
//     console.log(`${contador}`);
//     contador++;
// }

//2- Contagem regresiva
// let cont = 10;

// while (cont > 0) {
//     console.log("Cont: ", cont);
//     cont--;
// }

//3- Validacão de senha
// const senha = "12345";
// let tentativas;


// while (tentativas !== senha){
//     tentativas = prompt("Digite a senha: ");

//     if (tentativas == senha){
//         console.log("Sucesso");
//     } else {
//         console.log("Tente novamente");
//     }
// }

//4- Somar numeros até 100
// let soma = 0;
// let numero = 1;

// while (numero <= 100){
//     soma += numero;
//     numero++;
// }

// console.log(`Soma= ${soma}`);

// //5- Tabuada
// const numero = Number(prompt("Digite um numero: "));

// if (Number.isNaN(numero)){
//     console.log("Digite um numero valido");
// } else {
//     let mult = 1;
//     console.log(`Tabuada do ${numero} \n`);

//     while (mult <= 10){
//         const resultado = numero * mult;
//         console.log(`${numero} x ${mult} = ${resultado}`);
//         mult++;
//     }
// }

//---------------------------------------------------------------
//DO - WHILE
//---------------------------------------------------------------
// 1- 
// let x = 10;
// while(x < 5){
//     console.log("Isso não vai aparecer");
//     x--;
// }

// let y = 10;
// do {
//     console.log("Isso vai aparecer pelo menos 1 vez");
// }
// while(y < 5)

//2-
// let opcao;

// do{
//     console.log("\n======== MENU ========");
//     console.log("\n1 - Ver Saldo");
//     console.log("\n2 - Fazer Deposito");
//     console.log("\n3 - Fazer Saque");
//     console.log("\n0 - EXIT");
//     console.log("\======================");

//     opcao = prompt("Digite uma opção");

//     if (opcao == "1"){
//         console.log("Su saldo é de 1000");
//     } else if (opcao == "2"){
//         console.log("Deposito realizado");
//     } else if (opcao == "3") {
//         console.log("Saque realizado");
//     } else if (opcao == "0"){
//         console.log("Até logo");
//     } else {
//         console.log("Opcao invalida");
//     }
// } while (opcao !== "0");

//3 - Palpite
// let numSecreto = Math.floor(Math.random() * 10) - 1;

// if (numSecreto < 0){
//     numSecreto = 0;
// } else {
//     numSecreto +=2;
// }

// let palpite;
// let tentativas = 0;

// console.log("Adivinhe o numero entre 0 e 10")

// do {
//     palpite = Number(prompt("Seu palpite: "))
//     tentativas++;

//     if (Number.isNaN(palpite)){
//         console.log("Digite um numero valido");
//     } else if (palpite < numSecreto){
//         console.log("Muito baixo! Tente novamente")
//     } else if (palpite > numSecreto){
//         console.log("Muito alto! Tente novamente");
//     } else {
//         console.log("Acertou!!!")
//     }
// } while (palpite != numSecreto);

//---------------------------------------------------------------
//FOR
//---------------------------------------------------------------
//1- TABUADA
// const numero = Number(prompt("Tabuada de que numero: "));

// if (Number.isNaN(numero)){
//     console.log("Não é numero");
// } else {
//     for (let i=0; i<=10; i++){
//         const resultado = numero * i;
//         console.log(`${numero} * ${i} = ${resultado}`);
//     }
// }

//2- NUMEROS PARES DE 0 A 20
// for (let i =0; i <=20; i++){
//     const ePar = i % 2;
    
//     if (ePar == 0) {
//         console.log(`O numero ${i} é PAR`);
//     }
// }

//3 - CONTAGEM REGRESIVA
// for(let i = 20; i>=0; i--){
//     console.log(`${i}`);
// }

// const altura =5;

// for(linha = 1; linha<=altura; linha++){
//     let asteriscos = "";

//     for (i=1; i<=linha; i++){
//         asteriscos += "* ";
//     }

//     console.log(asteriscos);
// }

//---------------------------------------------------------------
//ARRAY
//---------------------------------------------------------------
// const frutas=["Maça","Pera","Banana","Laranja","Uva"];

// console.log(frutas[0]);

// console.log(frutas.length);

// // FOR OF - Ele pasa 1x1 no array
// for (const fruta of frutas) {
//     console.log(`- ${fruta}`);
// }

//1- Suma de todos os numero do array
// const numeros = [10, 25, 8, 42, 15, 7]
// let resultado=0;
// for (const numero of numeros){
//     resultado += numero;
// }
// console.log(resultado);

//---------------------------------------------------------------
// OBJETOS
//---------------------------------------------------------------
// const pessoa = {
//     nome: "Jheyko",
//     idade: 43,
//     cidade: "São Paulo",
//     prodissao: "Estudante"
// };

// console.log(pessoa.nome);
// console.log(pessoa["idade"]);
//---------------------------------------------------------------
// //FOR IN - Ele pasa 1x1 em objetos
// for (const chave in pessoa){

// }

// const aluno = {
//     nome: "Maria Silva",
//     matricula: "20223401",
//     curso: "Desenvolvedor Web",
//     nota: 9.5
// };

// console.log("Dados do aluno:\n");

// for(const chave in aluno){
//     const valor = aluno[chave];
//     console.log(`${chave}: ${valor}`);
// }

//Estoque de produtos
// const estoque = {
//     "Notebook": 15,
//     "Mouse": 50,
//     "Teclado": 30,
//     "Monitor": 8,
//     "WebCam": 22
// }

// for(const chave in estoque){
//     const valor = estoque[chave];

//     if (valor < 10){
//         console.log(`${chave}: ${valor} ---> Abaixo de 10`);
//     } else {
//         console.log(`${chave}: ${valor}`);
//     }
// }

//---------------------------------------------------------------
//BREAK - Senha com limite de 3 tentativas
// const senhaCorreta ="abc123";

// const maxTentativas = 3;

// for (let i=1; i<=maxTentativas; i++){
//     const senha = prompt(`Tentativa ${i}/${maxTentativas} - Digite sua senha`);

//     if(senhaCorreta === senha){
//         console.log("Acesso liberado");
//         break;
//     } else {
//         console.log("Senha incorreta");

//         if (i===maxTentativas){
//             console.log("Acesso bloqueado");
//         }
//     }
// }
//---------------------------------------------------------------
//CONTINUE - Pula as seguintes instruções apos do Continue
// for (let i = 1; i<=10; i++){
//     if (i%2===0){
//         continue;
//     } 
//     console.log(`${i}`);
    
// }

// const alunos = [
//     {nome: "Ana", nota: 8.5},
//     {nome: "Bruno", nota: 5.0},
//     {nome: "Carlos", nota: 9.0},
//     {nome: "Diana", nota: 4.5},
//     {nome: "Eduardo", nota: 7.5}
// ];

// console.log("Alunos aprovados:\n");

// for (const aluno of alunos){
//     if (aluno.nota < 7){
//         continue;
//     }

//     console.log(`${aluno.nome}: ${aluno.nota}`);
// }

//---------------------------------------------------------------

const frase = prompt("Digite uma frase");

const vogais = "aeiouAEIOU";

let contador = 0;
let vogaisEncontrados=[];

for (const letra of frase){
    if (vogais.includes(letra)){
        contador++;
        vogaisEncontrados.push(letra);
    }
}
console.log(frase)
console.log(`Vogais encontrados ${contador}`);
console.log(vogaisEncontrados);