import React, { Component } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './style.css';

export default class Inicio extends Component {
  render() {
    return (
      <div className="inicio">
        <h1 style={ { paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' } }>
          Olá, Seja Bem vindo!
          {' '}
        </h1>
        <h1>
          <span style={ { color: 'black', fontWeight: 'bold' } }>
            <Typewriter
              words={
                // eslint-disable-next-line max-len
                ['Meu nome é Rodrigo Sena', 'Sou desenvolvedor Web Full Satck']
              }
              loop
              cursor
              cursorStyle="_"
              typeSpeed={ 100 }
              deleteSpeed={ 50 }
              delaySpeed={ 1000 }
            />
          </span>
        </h1>

      </div>
    );
  }
}
