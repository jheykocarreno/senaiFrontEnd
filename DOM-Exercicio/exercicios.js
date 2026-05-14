// ============================================================
//  EXERCÍCIO 1 — Selecionar e Exibir o Título
//
//  O que fazer:
//  1. Selecione o elemento com id="titulo-ex1"
//  2. Leia o .textContent dele
//  3. Exiba esse texto no elemento id="resultado-ex1"
// ============================================================

function exercicio1() {

    // TODO: selecione o elemento pelo id e leia o textContent
    const titulo = document.getElementById("titulo-ex1");
    const resultado = document.getElementById("resultado-ex1");

    // TODO: coloque o texto dentro do id="resultado-ex1"
    resultado.textContent = "Titulo encontrado: " + titulo.textContent;

    console.log(titulo.textContent);

}


// ============================================================
//  EXERCÍCIO 2 — Favoritar o Card (if/else + classList)
//
//  O que fazer:
//  1. Declare uma variável "let favoritado = false" aqui fora
//  2. Dentro da função, inverta o valor: favoritado = !favoritado
//  3. Selecione o card com id="card-ex2"
//  4. Selecione o botão com id="btn-ex2"
//  5. Se favoritado for true:
//     - Adicione a classe "card-favoritado-ex" no card
//     - Mude o textContent do botão para "💔 Desfavoritar"
//     - Atualize resultado-ex2: "❤️ Breaking Bad foi favoritado!"
//  6. Se favoritado for false:
//     - Remova a classe "card-favoritado-ex" do card
//     - Mude o textContent do botão para "❤️ Favoritar"
//     - Atualize resultado-ex2: "Série removida dos favoritos."
// ============================================================

let favoritado = false;

function exercicio2() {
    // TODO: inverter o valor de favoritado
    favoritado = !favoritado;

    // TODO: selecionar o card e o botão
    const card = document.getElementById("card-ex2");
    const botao = document.getElementById("btn-ex2");
    const resultado = document.getElementById("resultado-ex2")

    // TODO: if (favoritado) { adicionar classe, mudar botão e resultado }
    //       else            { remover classe,  mudar botão e resultado }

    if (favoritado) {
        card.classList.add("card-favoritado-ex");
        botao.textContent = "💔 Desfavoritar";
        resultado.textContent = "❤️ Breaking Bad foi favoritado!";
    } else {
        card.classList.remove("card-favoritado-ex");
        botao.textContent = "❤️ Favoritar";
        resultado.textContent = "Série removida dos favoritos.";
    }

    console.log(botao.textContent);
}

// ============================================================
//  EXERCÍCIO 3 — Lista Dinâmica
//
//  O que fazer:
//  1. Leia o valor do input id="input-ex3" com .value.trim()
//  2. Se estiver vazio, mostre alert e encerre com return
//  3. Crie um <li> com createElement
//  4. Crie um <span> com o nome da série (pode usar 📺 na frente)
//  5. Crie um <button> com texto "Remover"
//  6. No onclick do botão: this.parentElement.remove()
//  7. Adicione span e button dentro do li com appendChild
//  8. Adicione o li na lista id="lista-ex3" com appendChild
//  9. Limpe o input (input.value = '') e devolva o foco (input.focus())
// ============================================================

function exercicio3() {

    // TODO: ler o input


    // TODO: validar campo vazio


    // TODO: criar o <li>


    // TODO: criar o <span> com o nome


    // TODO: criar o botão remover


    // TODO: montar estrutura e adicionar na lista


    // TODO: limpar input e devolver foco

}
