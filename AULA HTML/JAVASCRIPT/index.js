let minhaVariavel = 10;
console.log(minhaVariavel);

minhaVariavel = "Ola mundo";
console.log(minhaVariavel);

minhaVariavel = true;
console.log(minhaVariavel);

let numero = 10;
let texto = "20";
let resultado = numero + texto;
console.log(resultado);

/*comentario*/
//comentario//

//case sensitive
let nome = "lucas";
let Nome = "Maria";
let NOME = "João";
console.log(Nome);
console.log(Nome);
console.log(NOME);

//Palavras reservadas
//let, const, var, if, else, for, while, function, return, class, new, switch

//Regras de nomenclatura
//pode começar con letra _ ou $
//pode contar letras, numeros, _ ou $
//não pode começar com numero
//nao pode ter espaço
//nao pode colocar acentos

//nome das funcoes, começam com VERBOS
function calcularMedida(){

};


//tipos primitivos
//NUMBER - numero
const preco = 10.9;
console.log(typeof preco);

//STRING - texto
const nomeString = "Jheyko";
console.log(typeof nomeString);

//BOOLEAN - verdadeiro/falso
const ativo = true;
console.log(typeof ativo);

//NULL - aunsencia intencional de valor
const vazio = null;
console.log(typeof vazio);

//UNDEFINED - variavel sem valor
let indefinido;
console.log(indefinido);

//BIGINT - numero muitos grandes
const grande = 845218465541212231321n;
console.log(typeof grande);

//Valores especiais: NaN e Infinity
////INFINITY - divisão por zero
console.log(5/0);
////NaN (Not a Number) - operação invalida
console.log(0/0);
console.log(Math.sqrt(-1));

//Checar se é NaN
console.log(Number.isNaN("abc" * 3));

function calcularTotal(preco, quantidade){
    let total = preco * quantidade;

    if (Number.isNaN(total)){
        console.log("Not a number")
        return 0;
    }
    return total;
}

console.log(calcularTotal("abc", 5));
console.log(calcularTotal(10, 5));



//String e Template Literals
//// Aspas simples, duplas ou crase
const nome4 = 'Lucas';
const nome5 = "Maria";
const nome6 = `Joao`;

//Propiedades e métodos
const nomeCompleto2 = "Jheyko Valencia";
console.log(nomeCompleto2.length);
console.log(nomeCompleto2.toUpperCase());
console.log(nomeCompleto2.toLowerCase());

//TEMPLATE STRING (crase) - permite inserir variaveis
const nome7 = "Jheyko";
const idade = "42";

console.log(`Ola, meu nome é ${nome7} e tenho ${idade}`);

//Conversões de Tipo
console.log(Number("123"));
console.log(parseInt("10.9"));
console.log(parseFloat("10.9"))
console.log(String(753));
console.log(Boolean(0));

const texto2 = prompt("Digite um numero:");
console.log(texto2 + 5); 
alert(texto2+5); 

