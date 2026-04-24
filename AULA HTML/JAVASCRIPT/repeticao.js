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
for(let i = 20; i>=0; i--){
    console.log(`${i}`);
}