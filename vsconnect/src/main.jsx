import React from "react"; //biblioteca REACT principal
import ReactDOM from "react-dom/client"; //es un punto de entrada del paquete react-dom que contiene las APIs necesarias para renderizar componentes de React en el navegador
import CadastroServico from "../pages/CadastroServico";
import CadastroUsuario from "../pages/CadastroUsuario";
import Home from "../pages/Home";
import ListaDevs from "../pages/ListaDevs";
import ListaServicos from "../pages/ListaServicos";
import Login from "../pages/Login";
import PerfilUsuario from "../pages/PerfilUsuario";
import VisualizarServico from "../pages/VisualizarServico";

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
