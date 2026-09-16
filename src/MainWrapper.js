import React from 'react';

//import Slider from './SliderComponent/Slider';
import './home.css';
import Content from './Content';
import ImageBox from './ImageBox';

const MainWrapper = () => {
  return (
    <>
    <div className='container'>
    <ImageBox/>
    <Content />

  </div>
    </>
  );
}

export default MainWrapper;
