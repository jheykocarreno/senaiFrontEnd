function Saudacao(props) {
  return <h1>Ola, {props.nome}!</h1>;
}

<Saudacao nome="Jheyko" />;

props = {
  nome: "jheyko",
};

function Produto(props) {
  return (
    <div>
      <h2>{props.nome}</h2>
      <p>R$ {props.preco}</p>
    </div>
  );
}

<Produto nome="Notebook" preco="3500" />;

function Botao(props) {
  return <button>{props.texto}</button>;
}

<Botao texto="Salvar" />;

//DESESTRUTURAÇAO
function Saudacao2({ nome }) {
  let nome = props.nome;            //esto es lo que hace cuando desestruturamos
}

function Usuario({ nome, idade, cidade }) {
  return (
    <div>
      <h1>{nome}</h1>
      <p>{idade}</p>
      <p>{cidade}</p>
    </div>
  );
}

<Usuario nome="Jheykoo" idade={42} cidade="São Paulo" />;
