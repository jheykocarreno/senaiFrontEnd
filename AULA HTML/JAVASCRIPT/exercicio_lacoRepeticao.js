// Nível Básico
// 1. **Contagem de 1 a 10:**
//     - Use um `for` para exibir os números de 1 a 10 no console.
// for (let i=1; i<=10; i++){
//     console.log(i);
// }



// 2. **Tabuada de um número:**
//     - Peça um número ao usuário.
//     - Exiba a tabuada desse número de 1 a 10 usando um `for`.
// const numero = Number(prompt("Digite un numero: "));

// if (Number.isNaN(numero)){
//     console.log("Digitação incorreta");
// } else {
//     for (let i=1; i<=10; i++){
//         const resultado = i*numero
//         console.log(`${numero} x ${i} = ${resultado}`);
//     }
// }



// 3. **Soma dos primeiros N números naturais:**
//     - Peça um número `N` ao usuário.
//     - Use um `while` ou `for` para somar os números de `1` até `N`.
//     - Exemplo:
//         - Se um usuário inserir o número 4, o código deverá fazer a soma do 1, 2, 3 e 4 totalizando **10**.
//             ```
//             1 + 2 + 3 + 4 = 10
//             ```
// const numero = Number(prompt("Digite um numero: "));

// if (Number.isNaN(numero)){
//     console.log("Não é numero");
// } else {
//     let somatoria = 0;
//     for (let i=1; i<=numero; i++){
//         somatoria += i;
//     }

//     console.log(`A soma de todos os numero é ${somatoria}`);
// }


//---------------------------------------------------------------

// ### **Nível Intermediário**

// 1. **Exibir os números pares de 1 a 50:**
//     - Use um `for` ou `while` para exibir apenas os números pares de `1` a `50`.
// for (let i=1; i<=50; i++){
//     if (i%2===0){
//         console.log(`Numero par: ${i}`);
//     }
// }



// 2. **Jogo de adivinhação:**
//     - Gere um número aleatório de 1 a 100.
//     - Peça ao usuário para adivinhar e use um `while` para continuar até ele acertar.
//     - Informe se o número inserido é maior ou menor que o correto.
// let numAleatorio = Math.floor(Math.random() * 100) - 1;

// if (numAleatorio < 0){
//     numAleatorio = 0;
// } else {
//     numAleatorio +=2;
// }

// console.log(numAleatorio);

// let palpite;
// let tentativas = 0;

// console.log("Adivinhe o numero entre 0 e 100")

// do {
//     palpite = Number(prompt("Seu palpite: "))
//     tentativas++;

//     if (Number.isNaN(palpite)){
//         console.log("Digite um numero valido");
//     } else if (palpite < numAleatorio){
//         console.log("Numero menor! Tente novamente")
//     } else if (palpite > numAleatorio){
//         console.log("Numero maior! Tente novamente");
//     } else {
//         console.log(`Acertou!!!!, numero de tentativas ${tentativas}`); 

//     }
// } while (palpite != numAleatorio);



// 3. **Contagem regressiva:**
//     - Peça um número ao usuário e exiba uma contagem regressiva até 0 usando um `while`.
// let numero = Number(prompt("Digite um numero: "));

// if (Number.isNaN(numero)){
//     console.log("Não é numero");
// } else {
//     let i=numero;
//     while (numero>0){
//         console.log(`${numero}`);
//         numero--;
//     }
// }



//---------------------------------------------------------------


// Nível Avançado
// 1. **Soma dos dígitos de um número:**
//     - Peça ao usuário um número inteiro positivo.
//     - Use um `while` para somar seus dígitos.
// let numero = Number(prompt("Digite um numero para somar seus digitos: "));
// let somaDigitos = 0;
// const aux = numero;

// if (Number.isNaN(numero)){
//     console.log("O digitado não é um NUMERO")
// } else {
//     while (numero > 0){
//         let digitoFinal = numero % 10;
//         somaDigitos += digitoFinal;
//         numero = Math.floor(numero / 10);
//     }
//     console.log(`A soma dos digitos do numero ${aux} é ${somaDigitos}`);
// }



// 2. **Fatorial de um número:**
//     - Peça um número ao usuário.
//     - Use um `for` ou `while` para calcular o fatorial desse número.
// let numero = Number(prompt("Digite um numero para calcular seu Factorial: "));
// let factorial = 1;

// if (Number.isNaN(numero)){
//     console.log("O digitado não é um NUMERO")
// } else {
//     for (i=1; i<=numero; i++){
//         factorial *= i;
//     }
//     console.log(`O factorial do numero ${numero} é ${factorial}`)
// }




// 3. **Inverter um número:**
//     - Peça um número ao usuário.
//     - Use um `while` para inverter seus dígitos (exemplo: `123` → `321`).
// let numInt = Number(prompt("Digite um numero: "))
// const aux = numInt;

// let numString = String(numInt);
// let numArray = numString;

// let numArrayFinal='';
// let i = numArray.length-1;
// let j = 0;

// while (i >= 0){
//     numArrayFinal= numArrayFinal + numArray[i];
//     console.log(numArrayFinal);
//     i--;
//     j++;
// }

// numString = String(numArrayFinal);
// console.log(numString);
// console.log(typeof(numString));

// let numFinal = Number(numString);
// console.log(numFinal);
// console.log(typeof(numFinal));

// console.log(`O numero invertido do numero ${aux} é ${numFinal}`);

// //----------------------------------

// let entrada = prompt("Digite um número para inverter: ");
// const aux2 = entrada;

// let listaDigitos = String(entrada).split(''); //creamos um array STRING como cada digito
// let invertido = ""; 
// let ind = listaDigitos.length - 1; 

// while (ind >= 0) {
//     invertido = invertido + listaDigitos[ind];
//     ind--;
// }

// let invertidoInt = Number(invertido);
// console.log(`O número invertido do numero ${aux2} é: ${invertidoInt}`);
// console.log(typeof(invertidoInt));



// 4. **Números perfeitos de 1 a 1000:**
//     - Um número perfeito é aquele cuja soma de seus divisores (excluindo ele mesmo) é igual ao próprio número.
//     - Exemplo: `6` → `1 + 2 + 3 = 6`.
//     - Use um `for` aninhado para encontrar e exibir esses números até `1000`.
for (let enteiro = 1; enteiro <= 1000; enteiro++) {
    let somaDivisor = 0;

    for (let i = 1; i < enteiro; i++) {
        //console.log(i);
        if (enteiro % i === 0) {
            //console.log(`numero ${enteiro} div ${i}`)
            somaDivisor += i;
        } 
    }

    if (somaDivisor === enteiro) {
        console.log(`${enteiro} é um número perfeito!`);
    }
}