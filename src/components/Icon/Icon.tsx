import React, { MouseEvent } from 'react'
import { getClassName, Styleable } from '../../utils';
import './style.css'

export interface IconProps extends Styleable{
  src: string;
  srcSet?: string;
  href?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}
export default function Icon(props: IconProps) {
  function renderIcon() {
    return <img className={getClassName('icon', props)} alt="icon" src={props.src} srcSet={props.srcSet} style={props.style}/>;
  }
  function renderLinkWithIcon() {
    return (
      <a href={props.href} onClick={props.onClick}>
        {renderIcon()}
      </a>
    );
  }
  return props.href ? renderLinkWithIcon() : renderIcon();
}
