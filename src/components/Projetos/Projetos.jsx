import React, { Component } from 'react';
import './styles.css';
import appdelivery from '../../img/projetos/appdelivery.png';
import recipesapp from '../../img/projetos/recipesapp.png';
import printTela from '../../img/projetos/printTela.png';
import trybesmith from '../../img/projetos/trybesmith.jpg';
import blogsapi from '../../img/projetos/blogs-api.png';
import invetoryreport from '../../img/projetos/invetoryreport.jpg';

export default class Projetos extends Component {
  render() {
    return (
      <div>
        <p className="titulo">Principais Projetos</p>
        <div className="projeto">

          <div className="div-img-project">
            <a target="_blank" href="https://github.com/RodrigoSen4/app-delivery" rel="noreferrer">
              <img className="img-projeto" src={ appdelivery } alt="html icon" />
            </a>
            <p>App Delivery</p>
          </div>

          <div className="div-img-project">
            <a target="_blank" href="https://github.com/RodrigoSen4/Recipes-App" rel="noreferrer">
              <img className="img-projeto" src={ recipesapp } alt="html icon" />
            </a>
            <p>App Receitas</p>
          </div>

          <div className="div-img-project">
            <a target="_blank" href="https://github.com/RodrigoSen4/Trybe-Futebol-Club" rel="noreferrer">
              <img className="img-projeto" src={ printTela } alt="html icon" />

            </a>
            <p>Trybe Futebol Club</p>
          </div>

          <div className="div-img-project">
            <a target="_blank" href="https://github.com/RodrigoSen4/TrybeSmith" rel="noreferrer">
              <img className="img-projeto" src={ trybesmith } alt="html icon" />
            </a>
            <p>Trybe Smith</p>
          </div>

          <div className="div-img-project">
            <a
              target="_blank"
              href="https://github.com/RodrigoSen4/blogs-api
"
              rel="noreferrer"
            >
              <img className="img-projeto" src={ blogsapi } alt="html icon" />
            </a>

            <p>Blogs API</p>
          </div>

          <div className="div-img-project">
            <a target="_blank" href="https://github.com/RodrigoSen4/inventory-report" rel="noreferrer">
              <img className="img-projeto" src={ invetoryreport } alt="html icon" />
            </a>
            <p>Inventory Report</p>
          </div>
        </div>
      </div>
    );
  }
}
