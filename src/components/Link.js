import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class SmartLink extends Component {
  render () {
    const classesArray = ['smart-link text'];
    if (this.props.classes) {
      classesArray.push(this.props.classes);
    }
    const classes = classesArray.join(' ');
    return this.props.isExternal ?
    <a
      rel='noopener noreferrer'
      className={classes}
      target='_blank'
      ref={this.props.name}
      href={this.props.value}>{this.props.name}</a> :
    <Link
      rel='noopener noreferrer'
      className={classes}
      ref={this.props.name}
      target={!this.props.isInternal ? '_self' : null}
      to={this.props.value}>{this.props.name}</Link>
  }
}