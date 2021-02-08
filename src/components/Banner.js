import React from 'react';
import './styles/banner.scss';
import logo from '../img/logo.jpg'; 

export const Banner = ({label, name, errors, touched, type = 'text'}) => {

  return (
    <div className="banner">
      <img src={logo}/>
    </div>
  );
}