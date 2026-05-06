//05/05/26

// switch (case) {
//     case value:
//         break;
//     default:
//         break;
// }

//---------------------------------------------
// const dia = 3;

// switch (dia){
//     case 1:
//         console.log("Segunda");
//         break;
//     case 2:
//         console.log("Terça");
//         break;
//     case 3:
//         console.log("Quarta");
//         break;
//     case 4:
//         console.log("Quinta");
//         break;
//     case 5:
//         console.log("Sexta");
//         break;
//     case 6:
//         console.log("Sabado");
//         break;
//     case 7:
//         console.log("Domingo");
//         break;
//     default:
//         console.log("Não existe esse dia");
//         break;
//     }

//---------------------------------------------

//Sistema de notas
//A = Excelente
//B = Bom
//C = Regular
//D = Ruim

// const nota = prompt("Digite uma nota A, B, C ou D");

// switch (nota) {
//     case "A":
//         console.log("Excelente");
//         break;
//     case "B":
//         console.log("Bom");
//         break;
//     case "C":
//         console.log("Regular");
//         break;
//     case "D":
//         console.log("Ruim");
//         break;
//     default:
//         console.log("Indeterminado");
//         break;
// }


//---------------------------------------------

//Crie um sistema de menu de videogame:
//1 -> Jogar
//2 -> Configurações
//3 -> Créditos
//4 -> Sair

let opcao;

do {
    opcao = prompt(`Ingresse a opçao desejada
    ======== MENU ========
    1 - Jogar
    2 - Configurações
    3 - Créditos
    4 - EXIT
    ======================`);

    switch (opcao) {
        case "1":
            console.log("Pode jogar")
            break;
        case "2":
            console.log("Entrando a configurões")
            break;
        case "3":
            console.log("Ver créditos")
            break;
        case "4":
            console.log("Sair")
            break;
        default:
            console.log("Opção incorreta")
            break;
    }
    
} while (opcao != 4);
