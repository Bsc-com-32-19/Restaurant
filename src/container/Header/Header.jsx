import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components'
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>

    <div className='app__wrapper_info'>

      < SubHeading className='header' title = 'Chase the new flavour' />

      <h1 className='app__header-h1'>The key to fine Dining</h1>
      <p className='p__opensans ' style={{margin:'2rem 0'}}>Sit down, tell us your favorite life story and what kind of meals do you like most when you visit restaurant.</p>
      <button type='button' className='custom__button'> Explore menu</button>

    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img " />
      
    </div>
   
  </div>
);

export default Header;
