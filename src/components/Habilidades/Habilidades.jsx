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
        <h1>Habilidades</h1>
        <div className="skills">

          <div className="div-img">
            <img className="icons" src={ html } alt="html icon" />
            <p>HTML</p>
          </div>

          <div className="div-img">
            <img className="icons" src={ css } alt="css icon" />
            <p>CSS</p>
          </div>

          <div className="div-img">
            <img className="icons" src={ python } alt="python icon" />
            <p>Python</p>
          </div>

          <div className="div-img">
            <img className="icons" src={ typescript } alt="typescript icon" />
            <p> TypeScript</p>
          </div>

          <div className="div-img">
            <img className="icons" src={ expressjs } alt="expressjs icon" />
            <p>Express</p>
          </div>

          <div className="div-img">
            <img className="icons" src={ node } alt="node icon" />
            <p>Node</p>
          </div>

          <div className="div-img">
            <img className="icons" src={ react } alt="react icon" />
            <p>React</p>
          </div>

          <div className="div-img">
            <img className="icons" src={ redux } alt="redux icon" />
            <p>Redux</p>
          </div>

          <div className="div-img ">
            <img className="icons" src={ testinglibrary } alt="testinglibrary icon" />
            <p>Testing library</p>
          </div>

        </div>
      </div>
    );
  }
}
