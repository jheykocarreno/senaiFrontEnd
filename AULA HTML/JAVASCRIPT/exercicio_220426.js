// ### **Nível Básico**

// 1. **Verificar maioridade:**
//     1. Peça ao usuário uma idade.
//     2. Use um `if-else` para verificar se ele é maior ou menor de idade.

// const idade = Number(prompt("Inserir idade: "));

// if (idade >= 18){
//     console.log("Maior de idade");
// } else if (idade < 0) {
//     console.log("Idade incorreta");
// } else {
//     console.log("Menor de idade")
// }

//**********************************************************************************************/
// 2. **Verificar se um número é positivo ou negativo:**
//     - Peça ao usuário para inserir um número.
//     - Use um `if-else` para verificar se o número é positivo, negativo.
//     - OBS: *Por hora* considere o 0 como sendo um número negativo.

// const numero = Number(prompt("Inserir numero: "));

// if (numero > 0){
//     console.log("Numero positivo");
// } else if (numero < 0) {
//     console.log("Numero negativo");
// } else {
//     console.log("ZERO");
// }

//**********************************************************************************************/
// 3. **Aprovação em uma prova:**
//     - O usuário insere a nota de um aluno (0 a 100).
//     - Se a nota for maior ou igual a 60, exibir "Aprovado", senão "Reprovado".


// const nota = Number(prompt("Inserir nota: "));

// if ((nota >= 60) && (nota <= 100)){
//     console.log("Aprovado");
// } else if ((nota < 60) && (nota >=0)){
//     console.log("Reprovado");
// } else {
//     console.log("Nota incorreta");
// }

//**********************************************************************************************/
// 4. **Verificar se um número é positivo, negativo ou zero:**
//     - Peça ao usuário para inserir um número.
//     - Use um `if-else` para verificar se o número é positivo, negativo ou zero.

// const numero = Number(prompt("Inserir numero: "));

// if (numero > 0){
//     console.log("Numero positivo");
// } else if (numero < 0) {
//     console.log("Numero negativo");
// } else {
//     console.log("ZERO")
// }

//**********************************************************************************************/
// 5. **Classificação de idade:**
//     - Peça ao usuário para inserir sua idade.
//     - Exiba se ele é "Criança" (0-12), "Adolescente" (13-17) ou "Adulto" (18+).

// const idade = Number(prompt("Inserir idade: "));

// if (idade >= 18){
//     console.log("Adulto");
// } else if ((idade > 13) && (idade < 18)) {
//     console.log("Adolescente");
// } else if ((idade >=0 ) && (idade < 13)) {
//     console.log("Criança");
// } else {
//     console.log("Idade incorreta");
// }

//**********************************************************************************************/
// 6. **Verificar se um número é par ou ímpar:**
//     - Peça ao usuário para inserir um número.
//     - Use o operador `%` para verificar se o número é divisível por 2.

// const numero = Number(prompt("Inserir numero"));

// if (numero % 2 == 0){
//     console.log("Numero par");
// } else {
//     console.log("Numero impar");
// }

//**********************************************************************************************/

// ### **Nível Intermediário**

// 1. **Calculadora simples:**
//     - Peça dois números e uma operação (`+`, `-`, `*`, `/`).
//     - Use um `if-else` para calcular o resultado e exibi-lo.

// const oper = prompt ("Inserir operador + - * /");
// if ((oper != '+') && (oper != '-') && (oper != '*') && (oper != '/')){
//     console.log("Operador incorreto");
// } else {

//     const numero = Number(prompt("Inserir numero"));
//     if (Number.isNaN(numero)){
//         console.log("Não é numero")
//     } else {
//         const numero2 = Number(prompt("Inserir outro numero"));
//         if (Number.isNaN(numero2)){
//             console.log("Não é numero");
//         } else {
//             // const resultado = 0;
//             if (oper == '+') {
//                 const resultado = numero + numero2;
//                 console.log(`${numero} ${oper} ${numero2} = ${resultado}`);
//             } else if (oper == '-') {
//                 const resultado = numero - numero2;
//                 console.log(`${numero} ${oper} ${numero2} = ${resultado}`);
//             } else if (oper == '*') {
//                 const resultado = numero * numero2;
//                 console.log(`${numero} ${oper} ${numero2} = ${resultado}`);
//             } else {
//                 if ((oper == '/') && (numero2 == 0)){
//                     console.log("O divisor não pode ser 0 - ZERO");
//                 } else {
//                     const resultado = numero / numero2;
//                     console.log(`${numero} ${oper} ${numero2} = ${resultado}`);
//                 }
//             }
//         }
//     }
// }

//**********************************************************************************************/
// 2. **Maior entre três números:**
//     - O usuário insere três números.
//     - Use `if-else` para determinar e exibir o maior.

    // const num1 = Number(prompt("Inserir num1"));
    // const num2 = Number(prompt("Inserir num2"));
    // const num3 = Number(prompt("Inserir num3"));

    // if ((num1 >= num2) && (num1 >= num3)) {
    //     console.log(`num1 ${num1} é maior`);
    // } else if (num2 >= num3){
    //     console.log(`num2 ${num2} é maior`);
    // } else {
    //     console.log(`num3 ${num3} é maior`);
    // }

//**********************************************************************************************/
// 3. **Desconto em compras:**
//     - Se o valor da compra for maior que R$ 100, aplique 10% de desconto.
//     - Caso contrário, exiba o valor normal.

// const compra = Number(prompt("Valor da compra: "));

// if (compra > 100){
//     const valor = compra - (compra * 0.1);
//     console.log(`O valor da compra é ${valor}`);
// } else {
//     const valor = compra;
//     console.log(`O valor da compra é ${valor}`);
// }

//**********************************************************************************************/
// 4. **Sistema de login simples:**
//     - O usuário insere um nome de usuário e senha.
//     - Se `usuario == "admin"` e `senha == "1234"`, exibir "Login bem-sucedido", caso contrário "Acesso negado".

// const usuario = "admin";
// const senha = "1234";

// const usuEnt = prompt("Inserir usuario: ").toLocaleLowerCase;
// const senEnt = prompt("Inserir senha: ");

// if ((usuario == usuEnt) && (senha == senEnt)){
//     console.log("Login bem-sucedido");
// } else {
//     console.log("Acesso negado");
// }

//**********************************************************************************************/
// ### **Nível Avançado**

// 1. **Classificação de triângulos:**
//     - O usuário insere três lados.
//     - Verifique se forma um triângulo e classifique como equilátero, isósceles ou escaleno.

// const lado1 = Number(prompt("Lado 1"));
// const lado2 = Number(prompt("Lado 2"));
// const lado3 = Number(prompt("Lado 3"));

// if ((lado1 == lado2) && (lado1 == lado3) && (lado2 == lado3)){
//     console.log("Triangulo Equilatero");
// // } else if (((lado1 == lado2) && (lado1 == lado3) && (lado2 != lado3)) || ((lado2 == lado3) && (lado1 == lado3) && (lado2 != lado3))){
// } else if ((lado1 != lado2) && (lado1 != lado3) && (lado2 != lado3)){
//     console.log("Triangulo Escaleno");
// } else {
//     console.log("Triangulo Isosceles");
// }

//**********************************************************************************************/
// 2. **Conversão de notas para conceitos:**
//     - O usuário insere uma nota (0-100).
//     - Converta para conceitos:
//     - `A` (90-100), `B` (80-89), `C` (70-79), `D` (60-69), `F` (<60).

// const nota = Number(prompt("Inserir nota do 0 ao 100: "));

// if ((nota >= 90) && (nota <= 100)) {
//     console.log("A")
// } else if ((nota >= 80) && (nota < 90)){
//     console.log("B");
// } else if ((nota >= 70) && (nota < 80)){
//     console.log("C");
// } else if ((nota >= 60) && (nota < 70)){
//     console.log("D");
// } else {
//     console.log("F");
// }

//**********************************************************************************************/
// 3. **Cálculo de IMC:**
//     - Peça peso e altura.
//     - Calcule o IMC e classifique como abaixo do peso, normal, sobrepeso ou obesidade.

// const pesoUsuario = Number(prompt("Inserir seu peso em KG"));
// const alturaUsuario = Number(prompt("Inserir sea altura em m"));
    
// if ((Number.isNaN(pesoUsuario))  || (Number.isNaN(alturaUsuario))){
//     console.log("Uma ou as duas variaveis não é NUMERO")
// } else if ((pesoUsuario < 0)  ||  (alturaUsuario < 0)){
//     console.log("O numero deve ser positivo");
// } else if (alturaUsuario > 3){
//         console.log("Voce é un Avatar");
// } else {
//     const imc = pesoUsuario / Math.sqrt(alturaUsuario);
//     console.log(`Seu IMC ${imc.toFixed(2)}`);
//     if (imc < 18.5){
//         console.log("Abaixo do peso");
//     } else if (((imc >= 18.5)  || (imc < 25))) {
//         console.log("Peso normal");
//     } else if ((imc >= 25)  || (imc < 30)) {
//         console.log("Sobrepeso");
//     } else if (imc >= 30)  {
//         console.log("Obesidade");
//     }
// }

//**********************************************************************************************/
// 4. **Validação de ano bissexto:**
//     - Peça um ano e verifique se é bissexto.
//     - Um ano é bissexto se for divisível por 4, mas não por 100, exceto se for divisível por 400.,

const ano = Number(prompt("Inserir ano:"));

if (ano % 4 == 0){
    if (ano % 100 == 0) {
        console.log(`Ano ${ano} não bissexto 1`);
    } else {
        console.log(`Ano ${ano} é bissexto`);
    }
} else {
    console.log(`Ano ${ano} não bissexto 2`);
}
