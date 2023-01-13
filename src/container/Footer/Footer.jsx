import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
 
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';

import './Footer.css';

const Footer = () => (
  <div className='app__footer section__pading'>
    <FooterOverlay/>
    <Newsletter/>
    
    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='P__opensans'>Post Office Box 228, Zomba,Malawi.</p>
        <p className='P__opensans'>+265994149258</p>
        <p className='P__opensans'>+265888234314</p>
      </div>

      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt="footer_logo" />
        <p className='P__opensans'>"The best way to find yourself is to loose yourself in the service of others."</p>
        <img src={images.spoon} alt="spoon" className='spoon__img' style={{marginTop: '15 '}} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter/>
          <FiInstagram/>
        </div>
      </div>

      <div className='app__footer-links_work'>
      <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='P__opensans'>Monday-Friday:</p>
        <p className='P__opensans'>08:00am - 02:00 am</p>
        <p className='P__opensans'>Saturday-Sunday:</p>
        <p className='P__opensans'>09:00am - 03:00am</p>


      </div>

    </div>
    <div className='footer__copyright'>
      <p className='P__opensans'>2023 Mimie. All Rights Reserved.</p>

    </div>

  
  </div>
);

export default Footer;
