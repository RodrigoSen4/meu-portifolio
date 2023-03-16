/* eslint-disable max-len */
import React, { Component } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './style.css';

export default class Contato extends Component {
  render() {
    return (
      <div className="contato">
        <ul className="items">
          <li>
            <a href="https://www.linkedin.com/in/rodrigo-sen4/" target="_blank" rel="noreferrer">
              <FaLinkedin size={ 30 } />
            </a>
          </li>
          <li>
            <a href="https://github.com/RodrigoSen4" target="_blank" rel="noreferrer">
              <FaGithub size={ 30 } />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
