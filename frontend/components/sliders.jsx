import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const Sliders = () => {
  return (
    <div  >
    <Carousel  autoPlay infiniteLoop interval={2000}       
     showThumbs={false} 
      showStatus={false}
      showArrows={false} >
      <div>
        <img src="/heroimages/image1.jpg" alt="Image 1"  />
      </div>
      <div>
        <img src="/heroimages/image2.jpg" alt="Image 2" />
      </div>
      <div>
        <img src="/heroimages/image3.jpg" alt="Image 3" />
      </div>
    </Carousel>
  </div>
  )
}

export default Sliders