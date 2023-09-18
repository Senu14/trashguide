import React from 'react';
import './Footer.scss'

function Footer() {
  return (
    <div className='collected-Nav'>
    <footer>
      <div className="logo">
      <img src={require('../../../Assets/Images/Layout/PNG/logo.png')} alt="logo" />
      <span>Affaldsguiden</span> 
      <p>Vi arbejder for at informere om 
        korrekt affaldssortering. 
        Ved at sortere hjælper du os, 
        men også klimaet.</p>
        <p className='last-p'>©2023 Affaldsguiden.</p>
      </div>
      <div className="Arrow">
        <span>Back to top</span>
      <img src={require('../../../Assets/Images/Layout/PNG/icon-arrow-up.png')} alt="Arrow-up" />
      </div>
      
      
     
    </footer>
    </div>
  );
}

export default Footer;
