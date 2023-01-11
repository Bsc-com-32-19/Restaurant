import React from 'react';
import { BsInstagram, BsArrowLeftShort,BsArrowRightShort } from 'react-icons/bs';
import { SubHeading} from '../../components';
import { images } from '../../constants';


import './Gallery.css';

const Gallery = () => {
 
  return (
     <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title="Instagram"/>
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='P__opensans' style={{ color: '#AAA',marginTop: '2rem'}}>These are just some of the photos of foods that we serve here #@Mimie's restaurant.</p>
        <button type='button' className='custom__button'>View More</button>

      </div>
    </div>
 );
}

export default Gallery;
