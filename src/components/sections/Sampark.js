import React, { Component } from 'react';
import samparkImg from '../../assets/sampark.png';
export default class Sampark extends Component {
  render () {
    return (
      <section className='sampark full-screen'>
        <div className='med-column'>
          <div className='shot-container'>
            <img alt='contacts view' className='shot shot-shadow' src={samparkImg} />
          </div>
          <div className='section-text'>
            <div className='section-title title'>Sampark</div>
            <div className='section-byline title'>React Developer & UI Designer</div>
            <div className='section-description text'>
            Lead front-end developer on small, startup-like team to develop a CRM-like application for an organization of 15,000 nationwide<br/><br/>
            Built using:
            React, Redux, Redux-Thunk, Express, Mongo, Webpack, GIT, SCSS, Mongoose, ES6
            </div>
          </div>
        </div>
      </section>
    );
  }
}