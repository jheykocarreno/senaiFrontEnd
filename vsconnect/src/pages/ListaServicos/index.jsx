import "./style.css";

import Footer2 from "../../components/Footer2";

import CardServico from "../../components/CardServico";

import { useState, useEffect } from "react";

import api from "../../utils/api";

function ListaServicos() {
  const [listaServicos, setListaServicos] = useState([]);

  const [skillDigitada, setSkillDigitada] = useState("");

  function listarServicos() {
    api
      .get("servicos")
      .then((response) => {
        setListaServicos(response.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }

  function verificarCampoFiltro(event) {
    if (event.target.value == "") {
      listarServicos();
    }
    setSkillDigitada(event.target.value);
  }

  function buscarServicoPorSkill(event) {
    event.preventDefault();

    const servicosFiltrados = listaServicos.filter((servico) =>
      servico.techs.includes(skillDigitada.toLocaleUpperCase()),
    );

    if (servicosFiltrados.length === 0) {
      alert("Nenhum servico com esse Skill😒");
    } else {
      setListaServicos(servicosFiltrados);
    }
  }

  useEffect(() => {
    listarServicos();
  }, [])

  return(
    <div>
        <main id="ls_main">
            <div className="container container_lista_servicos">
                <div className="lista_servico_conteudo">
                    <h1>Lista de Serviços</h1>
                    <hr />

                    <form method="post" onSubmit={buscarServicoPorSkill}>
                        <div className="wrapper_form">
                            <label htmlFor="buscar">
                                Filtrar serviços por tecnologia
                            </label>
                            <div className="campo_label">
                                <input type="search" 
                                name="campo-busca"
                                id="busca"
                                placeholder="Buscar serviços por tecnologia..."
                                onChange={verificarCampoFiltro}/>

                                <button type="submit">Buscar</button>
                            </div>
                        </div>

                    </form>

                    <div className="wrapper_lista">
                        <ul>
                            {listaServicos.map((servico, indice) => {
                                <li key={indice}>
                                    <CardServico 
                                    id={servico.id}
                                    titulo={servico.nome}
                                    proposta={servico.valor}
                                    listatechs={servico.techs}
                                    descricao={servico.descricao}
                                    />
                                </li>
                            })}
                        </ul>
                    </div>

                </div>
            </div>
        </main>

        <Footer2/>
    </div>
  )
}

export default ListaServicos;