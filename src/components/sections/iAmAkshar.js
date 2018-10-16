import React, { Component } from 'react';
import iamakshar1 from '../../assets/iamakshar1.png';
import iamakshar2 from '../../assets/iamakshar2.png';
import iamakshar3 from '../../assets/iamakshar3.png';
export default class iAmAkshar extends Component {
  render () {
    return (
      <section className='iamakshar full-screen'>
        <div className='med-column'>
          <div className='shot-container'>
            <img alt='login' className='shot shot-shadow img1' src={iamakshar1} />
            <img alt='all tracks' className='shot shot-shadow img2' src={iamakshar2} />
            <img alt='app icon' className='shot drop-shadow img3' src={iamakshar3} />
          </div>
          <div className='section-text'>
            <div className='section-title title'>iAmAkshar</div>
            <div className='section-byline title'>UI/UX Designer</div>
            <div className='section-description text'>
            Sole UI/UX engineer on very small team to develop a niche music streaming app with freemium business model functionality. I am responsible for entire app design, logo design and developing their branding
            <br /><br />
            Built with: Sketch, Flinto, Photoshop
            </div>
          </div>
        </div>
      </section>
    );
  }
}