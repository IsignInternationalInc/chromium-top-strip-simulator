import React from 'react'
import Icon from '../Icon/Icon';
import './style.css';

export default function SearchBar() {
  return (
    <div className="searchbar">
      <Icon src={require("../../icons/search-icon.svg").default} className="searchbar-icon"/>
      <input className="searchbar-input" placeholder="Enter search or web address"/>
      <Icon src={require("../../icons/Add to bookrmarks bar 16 px.svg").default} className="searchbar-bookmarks" />
    </div>
  )
}
