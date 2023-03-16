import React from 'react';
import { Helmet } from 'react-helmet';
import LogoRS from '../../img/LogoRS.png';

const TITLE = 'Rodrigo Sena - Portfólio';

export default class HeadTitle extends React.PureComponent {
  render() {
    return (
      <Helmet>
        <title>{ TITLE }</title>
        <link rel="icon" sizes="72x72" href={ LogoRS } />
      </Helmet>
    );
  }
}
