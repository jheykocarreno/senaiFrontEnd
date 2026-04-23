//JavaScript: Condicionais (if, else, operadores lógicos)

/*const idade = 15
if (idade>=18) {
    console.log("Maior de idade!")
}

if(idade>=18) {
    console.log("Maior de idade!")
} else {
    console.log ("Menor de idade!");
}

//Operadores de comparação

const a = 10;
const b = 5;

console.log("10 > 5:", a > b);
console.log("5 > 10:", b > a);

console.log("5 < 10:", a < b);
console.log("10 < 5:", b < a);

console.log("10 >= 5:", a >= b);
console.log("5 >= 10:", b >= a);


//Operador && (E / AND)

const idade = 42;
const temDocumento = true;
const estaNaLista = true;


if (idade >= 18  && temDocumento && estaNaLista) {
    console.log("Pode entrar!");
} else {
    console.log("Se lascou!!!");
}


//Operador ||  (ou / or)

const temDinheiro = false;
const temCartao =  true
const temPix = false;

if (temDinheiro || temCartao || temPix) {
    console.log ("Pode pagar!!")

} else {
    console.log("Não tem como pagar!!")
}
*/
//const usuario = "admin";
//const senha = "1234";
/*
const usuario = prompt("Inserir usuario");
const senha = prompt("Inserir senha");

const senhaCorreta = (senha === "1234")
const ehAdmin = (usuario === "admin");
const ehGerente = (usuario === "gerente");
 

if ((ehAdmin && senhaCorreta) || (ehGerente && senhaCorreta)){
    console.log("Acesso liberado");
} else {
    console.log("Acesso negado");
}

if ((ehAdmin || ehGerente) && senhaCorreta){
    console.log("Acesso liberado");
} else {
    console.log("Acesso negado");
}

const nota = 75;
if (nota >= 80){
    console.log("Aprovado")
} else if (nota >= 60) {
    console.log("Recuperação")
} else {
    console.log("Reprovado")
}

const temp = Number(prompt("Digite a temperatura en C"));
if (Number.isNaN(temp)){
    console.log("Temperatira invalida");
} else if (temp < 0){
    console.log("Abaixo")
} else if (temp <= 15){
    console.log("Frio");
} else if (temp <= 25){
    console.log("Agradavel");
} else if (temp <= 35){
    console.log("Quente");
} else {
    console.log ("Morte");
}

*/

// const cor = prompt("Digite uma cor").toUpperCase().trim();

// if (cor == "VERDE"){
//     console.log("Siga");
// } else if (cor == "AMARELO"){
//     console.log("Atenção")
// } else if (cor == "VERMELHO"){
//     console.log("Pare")
// } else {
//     console.log("Cor ou palavra inválida")
// }

const pesoUsuario = Number(prompt("Inserir seu peso em KG"));
const alturaUsuario = Number(prompt("Inserir sea altura em m"));
    
if ((Number.isNaN(pesoUsuario))  || (Number.isNaN(alturaUsuario))){
    console.log("Uma ou as duas variaveis não é NUMERO")
} else if ((pesoUsuario < 0)  ||  (alturaUsuario < 0)){
    console.log("O numero deve ser positivo");
} else if (alturaUsuario > 3){
        console.log("Voce é un Avatar");
} else {
    const imc = pesoUsuario / Math.sqrt(alturaUsuario);
    console.log(`Seu IMC ${imc.toFixed(2)}`);
    if (imc < 18.5){
        console.log("Abaixo do peso");
    } else if (((imc >= 18.5)  || (imc < 25))) {
        console.log("Peso normal");
    } else if ((imc >= 25)  || (imc < 30)) {
        console.log("Sobrepeso");
    } else if (imc >= 30)  {
        console.log("Obesidade");
    }
}