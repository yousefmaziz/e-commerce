
import img1 from "../../img/slider-image-1.jpeg"
import img2 from "../../img/slider-image-2.jpeg"
import img3 from "../../img/slider-image-3.jpeg"


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function HomeSlider() {
  return (
    <>
    
    <section className='grid grid-cols-12 mb-8 mx-2'>
    <div className='col-span-8'>

        <Swiper loop={true}>
            <SwiperSlide>
        <img src={img3}alt=""  className='w-full h-full object-cover'/>
            </SwiperSlide>
            <SwiperSlide>
        <img src={img3}alt=""  className='w-full h-full object-cover'/>
            </SwiperSlide>
            <SwiperSlide>
        <img src={img3}alt=""  className='w-full h-full object-cover'/>
            </SwiperSlide>


        </Swiper>
        </div>
        <div className='col-span-4'>
            <img src={img1} alt=""  className='w-full'/>
            <img src={img2} alt=""  className='w-full'/>
    </div>
    </section>
    
    </>
  )
}
