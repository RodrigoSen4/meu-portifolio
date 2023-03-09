import React, { Component } from 'react';
import './styles.css';
import spinner from '../../img/spinner.gif';

export default class Projetos extends Component {
  render() {
    return (
      <div>
        <p className="titulo">Meus Projetos</p>
        <div className="projeto">

          <div className="div-img-project">
            <img className="img-projeto" src={ spinner } alt="html icon" />
            <p>App Delivery</p>
          </div>

          <div className="div-img-project">
            <img className="img-projeto" src={ spinner } alt="html icon" />
            <p>App Receitas</p>
          </div>

          <div className="div-img-project">
            <img className="img-projeto" src={ spinner } alt="html icon" />
            <p>Trybe Futebol Club</p>
          </div>

          <div className="div-img-project">
            <img className="img-projeto" src={ spinner } alt="html icon" />
            <p>Trybe Smith</p>
          </div>

          <div className="div-img-project">
            <img className="img-projeto" src={ spinner } alt="html icon" />
            <p>Blogs API</p>
          </div>

          <div className="div-img-project">
            <img className="img-projeto" src={ spinner } alt="html icon" />
            <p>Inventory Report</p>
          </div>
        </div>

      </div>
    );
  }
}
