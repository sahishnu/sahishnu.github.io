import React, { Component } from 'react';

export default class ProjectCard extends Component {
  render () {
    const isDemo = !!this.props.demoLink;
    return (
      <div className='project-card card-shadow'>
        <div className='project-image-container'>
          <img alt={this.props.title} className='project-image' src={this.props.image} />
        </div>
        <div className='project-title-container'>
          <div className='project-title title'>{this.props.title}</div>
          <div className='project-sub-title title'>{this.props.description}</div>
        </div>
        <a
          href={this.props.demoLink}
          rel='noopener noreferrer'
          target='_blank_'
          className={
            'view-demo-button title ' + (!isDemo ? 'inactive-demo-button' : 'active-demo-button')}>
        View Demo
        </a>
        <a href={this.props.sourceCodeLink} rel='noopener noreferrer' target='_blank' className='view-source-code title'>
        Source Code
        </a>
      </div>
    )
  }
}