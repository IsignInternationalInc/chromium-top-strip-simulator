import React from 'react'
import Icon from '../Icon/Icon';
import SearchBar from '../SearchBar/SearchBar';
import './style.css';

export default function Strip() {
  return (
    <div className="strip">
      <div className="strip-navigation-container">
        <Icon src={require("../../icons/arrow left 16px.svg").default} className="strip-icon"/>
        <Icon src={require("../../icons/arrow right 16px.svg").default} className="strip-icon"/>
        <Icon src={require("../../icons/Refresh 16 px.08e3919dv1.svg").default} className="strip-icon"/>
        <Icon src={require("../../icons/Refresh 16 px.svg").default} className="strip-icon"/>
        <Icon src={require("../../icons/Home 16px_v.3.svg").default} className="strip-icon"/>
      </div>
      <SearchBar />
      <div className="strip-navigation-container">
        <Icon src={require("../../icons/Snapshot 16px.svg").default} className="strip-icon"/>
        <Icon src={require("../../icons/Add to reading list 16 px.svg").default} className="strip-icon"/>
        <Icon src={require("../../icons/QR Code 16px.svg").default} className="strip-icon"/>
        <Icon src={require("../../icons/Customize icon 16px.svg").default} className="strip-icon"/>
      </div>
    </div>
  )
}
