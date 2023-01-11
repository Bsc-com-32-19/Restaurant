import React from 'react';
import { SubHeading} from '../../components';
import { images } from '../../constants';

import './Findus.css';

const FindUs = () => (
  <div className='app__bg__wrapper section__padding' id='Contact'>
    <div className='app__wrapper_info'>
    <SubHeading title="Contacts" />
    <h1 className='headtext__cormorant' style={{ marginBottom: '3rem' }}>Find Us</h1>
    <div className='app__wrapper-content'>
      <p className='P-opensans'>Close to Steers in Zomba town. The name of the bulding is the best of all. And at the second floor of that bulding the first room that's it.</p>
      

    </div>
    

    </div>
   <div className='app__wrapper_img'>
    <img src={images.findus} alt="findus" />

   </div>
   
  </div>
);

export default FindUs;
