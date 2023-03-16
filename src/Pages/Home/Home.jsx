import React, { Component } from 'react';
import Cabecalho from '../../components/Cabeçalho/Cabecalho';
import Contato from '../../components/Contato/Contato';
import Habilidades from '../../components/Habilidades/Habilidades';
import HeadTitle from '../../components/Head/headtitle';
import Inicio from '../../components/Inicio/Inicio';
import Projetos from '../../components/Projetos/Projetos';
import Rodape from '../../components/Rodapé/Rodape';
import SobreMim from '../../components/SobreMim/SobreMim';
import './style.css';

export default class Home extends Component {
  render() {
    return (
      <div className="main">
        <HeadTitle />
        <Cabecalho />
        <Inicio />
        <Contato />
        <SobreMim />
        <Habilidades />
        <Projetos />
        <Rodape />
      </div>
    );
  }
}
