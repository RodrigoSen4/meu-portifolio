import React, { Component } from 'react';
import logoCabecalho from '../../img/logo.png';
import './style.css';

export default class Cabecalho extends Component {
  render() {
    return (
      <div className="header">
        <img src={ logoCabecalho } className="CompanyLogo" alt="logo-Rodrigo-Sena" />
        <div className="header-right">
          <a>Início</a>
          <a>Sobre mim</a>
          <a>Projetos</a>
          <a>Habilidades</a>
        </div>
      </div>

    );
  }
}
