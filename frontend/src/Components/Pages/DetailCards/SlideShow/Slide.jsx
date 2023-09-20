import React, { useState }from 'react';
import style from './Slide.module.scss'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Slide = () => {
  
// Define my varisbles
const images = [
  'SlideImages/image1.jpg',
  'SlideImages/image2.jpg',
  'SlideImages/image3.jpg',

];

//
const [currentSlide, setCurrentSlide] = useState(0);

const handleSlideChange = (index) => {
  setCurrentSlide(index);
};


  return (

/*The showThumbs={false} prop is used to hide the thumbnails.*/
/*Maping through array of image path and render inside carousel*/


<div className="App">
<Carousel showThumbs={false} onChange={handleSlideChange}>
  {images.map((image, index) => (
    <div
      className={`${style.slide} ${
        index === currentSlide ? style.center : ''
      }`}
      key={index}
    >
      <img src={image} alt={`Image ${index + 1}`} />
    </div>
  ))}
</Carousel>
</div>
);
};

export default Slide