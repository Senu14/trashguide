import React from 'react';
import style from './Slide.module.scss'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";




//import images for carousel
import image1 from "../../../../Assets/Images/Slideshow/image1.jpg";
import image2 from "../../../../Assets/Images/Slideshow/image2.jpg";
import image3 from "../../../../Assets/Images/Slideshow/image3.jpg";



const Slide = () => {
  return (


    <Carousel className={style.mainSlide}>
    <div>
        <img src={image1} height="300px" width= "200px"/>
        
    </div>
    <div>
        <img src={image2} height="300px" width= "200px" />
        
    </div>
    <div>
        <img src={image3} height="300px" width= "200px" />
      
    </div>
</Carousel>


  )
}

export default Slide