import { useEffect, useState } from "react";

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
  let nome = props.nome; //esto es lo que hace cuando desestruturamos
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

//Estado com arrays
const [listaItens, setListaItens] = useState([]);

function adicionarItem(novoItem) {
  setListaItens([...listaItens, novoItem]); //3 puntos es para traer todo la informacion del array
}

listaItens.push("Reavt");

function removerItens(intemParaRemover) {
  setListaItens(listaItens.filter((item) => item != intemParaRemover));
}

import { useEffect } from "react";

function meuComponente() {
  useEffect(() => {
    console.log("Componente carregado");
  }, []);
}

import api from "../../utils/api";

function ListaServicos() {
  const [servicos, setServicos] = useState([]);

  function buscarServicos() {
    api
      .get("servicos")
      //http://localhost:3000/servicos

      .then((response) => {
        setServicos(response.data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }

  useEffect(() => {
    buscarServicos();
  }, []);

  return(
    <ul>      //lista no ordenada
      {servicos.map((servico, index) => (
        <li key={index}>
          {servico.nome}
        </li>
      ))}
    </ul>
  )
}

function cadastrarUsuario(event) {
  event.preventDefault();

  const formData = new FormData();

  formData.append("nome", nome);
  formData.append("email", email);
  formData.append("user_img", foto);

  api.post("user", formData)
}
