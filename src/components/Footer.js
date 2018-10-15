import React, { Component } from 'react';
import { navLinks } from '../constants';
import { SmartLink } from './index';

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        {navLinks.map((link, index) => {
          return <SmartLink isExternal={link.isExternal} value={link.value} name={link.name} key={index} />
        })}
      </footer>
    );
  }
}

export default Footer;
