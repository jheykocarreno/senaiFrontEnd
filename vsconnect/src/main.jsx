import React from "react"; //biblioteca REACT principal
import ReactDOM from "react-dom/client"; //es un punto de entrada del paquete react-dom que contiene las APIs necesarias para renderizar componentes de React en el navegador
import CadastroServico from "../src/pages/CadastroServico";
import CadastroUsuario from "../src/pages/CadastroUsuario";
import Home from "../src/pages/Home";
import ListaDevs from "../src/pages/ListaDevs";
import ListaServicos from "../src/pages/ListaServicos";
import Login from "../src/pages/Login";
import PerfilUsuario from "../src/pages/PerfilUsuario";
import VisualizarServico from "../src/pages/VisualizarServico";

import Header from "./components/Header";

import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom"; //Biblioteca para creacion de Rotas das paginas

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cadastro/Servico" element={<CadastroServico/>}></Route>
        <Route path="/cadastro/Usuario" element={<CadastroUsuario/>}></Route>
        <Route path="/lista/Devs" element={<ListaDevs/>}></Route>
        <Route path="/lista/Servicos" element={<ListaServicos/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/perfil/:idUsuario" element={<PerfilUsuario/>}></Route>
        <Route path="/servico/:idServico" element={<VisualizarServico/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
