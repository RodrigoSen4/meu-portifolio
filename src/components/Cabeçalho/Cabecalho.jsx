/* eslint-disable max-len */
import React, { Component } from 'react';
import { Link } from 'react-scroll';
import logoRS from '../../img/LogoRS.png';
import './style.css';

export default class Cabecalho extends Component {
  render() {
    return (
      <div className="header">
        <img src={ logoRS } className="CompanyLogo" alt="logo-Rodrigo-Sena" />
        <div className="header-right">
          <Link offset={ -200 } to="inicio" smooth duration={ 500 }>Início</Link>
          <Link offset={ -200 } to="habilidades" smooth duration={ 500 }>Habilidades</Link>
          <Link offset={ -200 } to="projeto" smooth duration={ 500 }>Projetos</Link>
        </div>
      </div>
    );
  }
}
