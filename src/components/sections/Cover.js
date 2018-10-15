import React, { Component } from 'react';
import profile from '../../assets/memoji.png';
import { navLinks } from '../../constants';
import { SmartLink } from '..';
export default class Cover extends Component {
  render () {
    const title = `Hi, I'm Sahishnu Patel`;
    const titleSub = `🔥 Developer & Designer`;
    const blurb = `I like crafting meaningful experiences, using technology`;
    return (
      <section className='cover full-section'>
        <main className='cover-section'>
          <div className='cover-main'>
            <div className='cover-profile'>
              <div className='cover-info'>
                <span className='title'>{title}</span>
                <span className='title title-sub'>{titleSub}</span>
              </div>
              <div className='cover-blurb text'>{blurb}</div>
              <div className='cover-links'>
                {navLinks.map((link, index) => {
                  return <SmartLink isExternal={link.isExternal} classes='cover-link' value={link.value} name={link.name} key={index} />
                })}
              </div>
            </div>
            <div className='profile-image-container'>
              <img className='profile-image drop-shadow' alt='profile' src={profile} />
            </div>
          </div>
        </main>
      </section>
    );
  }
}