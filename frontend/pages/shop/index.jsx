import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '@/styles/shop.module.css'

import Navbar from '@/components/navbar';
const Index = () => {
  return (
   <section>
    <Navbar/>

      <div className={styles.conatiner}  >
      <Carousel  autoPlay infiniteLoop interval={2000}    showThumbs={false} showStatus={false}>
        <div>
          <img src="/heroimages/image1.jpg" alt="Image 1"  className={styles.images}/>
        </div>
        <div>
          <img src="/heroimages/image2.jpg" alt="Image 2"  className={styles.images}/>
        </div>
        <div>
          <img src="/heroimages/image3.jpg" alt="Image 3" className={styles.images}/>
        </div>
      </Carousel>
    </div>

   </section>
  
  );
};

export default Index;
