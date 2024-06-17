import React from 'react';
import '../Styles/Footer.css';
import WhiteRiotLogo from '../Assets/whiteRiotIcon.png';

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__container'>
            <img src={WhiteRiotLogo} className='footer_logo'/>
            <p className='footer__text'>All rights reserved.</p>
        </div>
    </div>
  )
}
