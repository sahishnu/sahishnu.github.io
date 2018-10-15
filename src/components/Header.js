import React, { Component } from 'react';
import { navLinks, name, byLine } from '../constants';
import profile from '../assets/profile.jpg';
import {SmartLink} from './index';
class Header extends Component {

  render() {
    return (
      <header className='navbar'>
        <div className='navbar-left'>
          <div className='profile-image-container'>
            <img className='profile-image' alt='profile' src={profile} />
          </div>
          <div className='info'>
            <span className='title'>{name}</span>
            <span className='title'>{byLine}</span>
          </div>
        </div>
        <div className='navbar-right'>
          {navLinks.map((link, index) => {
            return <SmartLink isExternal={link.isExternal} value={link.value} name={link.name} key={index} />
          })}
        </div>
      </header>
    );
  }
}

export default Header;
