import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrappeer_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />

    </div>
    <div className='app__wrapper-info'>
      <SubHeading title="Chef's Word"/>
      <h1 className='headtext__cormorant'>What we believe in</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='P__opensans'>I am a witness that mimie's restaurant is the best one in this town. So i urge you to try us, you will never regret.</p>

        </div>
        <p className='P__opensans'>THis restaurant provide delicous meals at very low price.</p>

      </div>
      <div className='app__chef-sign'>
        <p>Kelvin Luo</p>
        <p className='P_opensans'>Chef & Founder</p>
        <img src={images.sign} alt="sign" />

      </div>

    </div>
    
  </div>
);

export default Chef;
