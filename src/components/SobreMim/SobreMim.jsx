/* eslint-disable max-len */
import React, { Component } from 'react';
import './style.css';

export default class SobreMim extends Component {
  render() {
    return (
      <div>
        <p className="titulo">Sobre Mim</p>

        <div className="sobre-mim">

          <p className="sobre-mim-texto2">
            Me chamo Rodrigo Sena, tenho 23 anos, este portifolio é dedicado a demosntração do meu trabalho durante meu curso de desenvolvimento WEB full stack na trybe...
          </p>
          <p className="sobre-mim-texto">
            Sou desenvolvedor Full Stack, apaixonado por programação desde o primeiro Hello, World!,
            estou me especializando em desenvolvimento Back-end, em busca de novos desafios e aprendizado.
            Alguns dos meus projetos estão abaixo. Sinta-se à vontade para entrar em contato comigo, minhas redes estão disponíveis aqui!
          </p>

        </div>
      </div>

    );
  }
}
