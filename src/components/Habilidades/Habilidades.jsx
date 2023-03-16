import React, { Component } from 'react';
import html from '../../img/html.png';
import css from '../../img/css.png';
import expressjs from '../../img/expressjs.png';
import node from '../../img/node.png';
import python from '../../img/python.png';
import react from '../../img/react.png';
import redux from '../../img/redux.svg';
import testinglibrary from '../../img/testinglibrary.png';
import typescript from '../../img/typescript.png';
import './style.css';

export default class Habilidades extends Component {
  render() {
    return (
      <div className="habilidades">
        <p className="titulo">Habilidades</p>
        <div className="skills">

          <div className="div-img">
            <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML" rel="noreferrer">
              <img className="icons" src={ html } alt="html icon" />
            </a>
            <p>HTML</p>
          </div>

          <div className="div-img">
            <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS" rel="noreferrer">
              <img className="icons" src={ css } alt="css icon" />
            </a>
            <p>CSS</p>
          </div>

          <div className="div-img">
            <a target="_blank" href="https://docs.python.org/3/" rel="noreferrer">
              <img className="icons" src={ python } alt="python icon" />
            </a>
            <p>Python</p>
          </div>

          <div className="div-img">
            <a target="_blank" href="https://www.typescriptlang.org/docs/" rel="noreferrer">
              <img className="icons" src={ typescript } alt="typescript icon" />
            </a>

            <p> TypeScript</p>
          </div>

          <div className="div-img">
            <a target="_blank" href="https://devdocs.io/express/" rel="noreferrer">
              <img className="icons" src={ expressjs } alt="expressjs icon" />
            </a>

            <p>Express</p>
          </div>

          <div className="div-img">
            <a target="_blank" href="https://nodejs.org/docs/latest-v16.x/api/" rel="noreferrer">
              <img className="icons" src={ node } alt="node icon" />
            </a>

            <p>Node</p>
          </div>

          <div className="div-img">
            <a target="_blank" href="https://react.dev/" rel="noreferrer">
              <img className="icons" src={ react } alt="react icon" />

            </a>
            <p>React</p>
          </div>

          <div className="div-img">
            <a target="_blank" href="https://redux.js.org/" rel="noreferrer">
              <img className="icons" src={ redux } alt="redux icon" />

            </a>
            <p>Redux</p>
          </div>

          <div className="div-img ">
            <a target="_blank" href="https://testing-library.com/docs/react-testing-library/intro/" rel="noreferrer">
              <img className="icons" src={ testinglibrary } alt="testinglibrary icon" />
            </a>
            <p>Testing library</p>
          </div>

        </div>
      </div>
    );
  }
}
