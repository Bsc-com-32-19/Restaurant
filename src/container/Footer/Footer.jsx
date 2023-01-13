import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
 
import { FooterOverlay, Newsletter } from '../../components';

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

      </div>
      <div className='app__footer-links_work'>

      </div>

    </div>
    <div className='footer__copyright'>
      <p className='P__opensans'>2023 Mimie. All Rights reserved.</p>

    </div>

  
  </div>
);

export default Footer;
