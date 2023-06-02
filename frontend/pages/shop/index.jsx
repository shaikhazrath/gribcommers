import React from 'react';
import Sliders from '@/components/sliders';
import Navbar from '@/components/navbar';
const Index = () => {
  return (
   <section className='bg-gray-200'>
    <Navbar/>
    <div className="h-screen flex justify-center items-center overflow-hidden">
  <div className="w-1/2 ">
   <Sliders/>
  </div>
</div>

   </section>
  
  );
};

export default Index;
