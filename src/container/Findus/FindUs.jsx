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
      <p className='P-opensans'>Close to Steers in Zomba town . The name of  "THE BEST OF ALL" . And at the second floor of that bulding the first room that's it.</p>
      <p className='P-cormorant' style={{ color: '#DCCA87',margin: '2rem 0'}}>Opening Hours</p>
      <p className='P-opensans'>Mon - Fri: 08:00am - 02:00 am</p>
      <p className='P-opensans'>Sat - Sun: 09:00am - 03:00am</p>
       <button className='custom__button' style={{ marginTop: '2rem'}}>Visit Us</button>
    </div>
    

    </div>
   <div className='app__wrapper_img'>
    <img src={images.findus} alt="findus" />

   </div>
   
  </div>
);

export default FindUs;
