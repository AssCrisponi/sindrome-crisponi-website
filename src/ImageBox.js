import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './imagebox.css';

const images = require.context('./img/', true, /\.(png|jpe?g|gif|svg)$/);
const imageList = images.keys().map(image => images(image));

function ImageBox() {
  return (
    <div className='box'>
      <div className='img_content'>
        <Slide easing="ease" duration={4000} indicators arrows>
          {imageList.map((image, index) => (
            <div key={index} className="each-slide-effect">
              <img src={image} alt={`Galleria immagine ${index + 1}`} />
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
}

export default ImageBox;
