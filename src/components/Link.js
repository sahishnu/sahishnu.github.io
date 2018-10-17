import React from 'react';
import { Link } from 'react-router-dom';

export const SmartLink = (props) => {
  const classesArray = ['smart-link text'];
  if (props.classes) {
    classesArray.push(props.classes);
  }
  const classes = classesArray.join(' ');
  return props.isExternal ?
    <a rel='noopener noreferrer' className={classes} target='_blank' href={props.value}>{props.name}</a> :
    <Link rel='noopener noreferrer' className={classes} target={!props.isInternal ? '_self' : null} to={props.value}>{props.name}</Link>
}