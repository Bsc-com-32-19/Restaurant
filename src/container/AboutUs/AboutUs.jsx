import React from 'react';

import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app-__aboutus app__bg flex__center section__padding' id='about'>

    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="g letter" />
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='P__opensans'>We are the best meal provider in this whole town. Don't hesitate try us, we will not fail you.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img className='knife' src={images.knife} alt="about_knife" />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='P__opensans'>We are the best meal provider in this whole town. Don't hesitate try us, we will not fail you.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
