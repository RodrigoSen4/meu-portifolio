import React, { Component } from 'react';
import { Link } from 'react-scroll';
/* import logoCabecalho from '../../img/logo.png'; */
import './style.css';

export default class Cabecalho extends Component {
  render() {
    return (
      <div className="header">
        Logo Aqui
        {/* <img src={ logoCabecalho } className="CompanyLogo" alt="logo-Rodrigo-Sena" /> */}
        <div className="header-right">
          <Link to="inicio" smooth duration={ 500 }>Início</Link>
          <Link to="sobre-mim" smooth duration={ 500 }>Sobre Mim</Link>
          <Link to="habilidades" smooth duration={ 500 }>Habilidades</Link>
          <Link to="projeto" smooth duration={ 500 }>Projetos</Link>
        </div>
      </div>
    );
  }
}
