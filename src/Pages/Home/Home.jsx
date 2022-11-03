import React, { Component } from 'react';
import Cabecalho from '../../components/Cabeçalho/Cabecalho';
import Habilidades from '../../components/Habilidades/Habilidades';
import Inicio from '../../components/Inicio/Inicio';
import Projetos from '../../components/Projetos/Projetos';
import Rodape from '../../components/Rodapé/Rodape';
import SobreMim from '../../components/SobreMim/SobreMim';

export default class Home extends Component {
  render() {
    return (
      <>
        <Cabecalho />
        <Inicio />
        <SobreMim />
        <Projetos />
        <Habilidades />
        <Rodape />
      </>
    );
  }
}
