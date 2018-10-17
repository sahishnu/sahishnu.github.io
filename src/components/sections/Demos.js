import React, { Component } from 'react';

import {ProjectCard} from '../index';
import { demos } from '../../constants';

export default class Demos extends Component {
  render () {
    return (
      <section id='demos' className='demos full-screen'>
        <div className='cards-container'>
          {demos.map((demo, index) => {
            return <ProjectCard
            key={index}
            title={demo.title}
            description={demo.description}
            image={demo.image}
            demoLink={demo.demoLink}
            sourceCodeLink={demo.sourceCodeLink}
            />
          })}
        </div>
        <div className='section-title-container'>
          <div className='section-title'>
            <div className='title title-text'>Demos</div>
            <div className='sub-title title'>
            Some of the projects I built while learning JavaScript
            </div>
          </div>
        </div>
      </section>
    );
  }
}