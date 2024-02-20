"use client"

import { Navigation, Autoplay, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import slide1 from '@/app/Assist/Images/Carousel/slide (1).jpg'
import slide2 from '@/app/Assist/Images/Carousel/slide (2).jpg'
import slide3 from '@/app/Assist/Images/Carousel/slide (3).jpg'


export default function Carousel() {

   return (
      <Swiper
      // install Swiper modules
      modules={[Navigation, Autoplay, Scrollbar, A11y]}
      slidesPerView={1}
      navigation
    >
      <SwiperSlide>
        <div className='items'>
          <Image src={slide1} quality={100} width={1200} height={400} alt='slide 1' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='items'>
          <Image src={slide2} quality={100} width={1200} alt='slide 1' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='items'>
          <Image src={slide3} quality={100} width={1200} alt='slide 1' />
        </div>
      </SwiperSlide>
    
    </Swiper>
  );

}








//  <Swiper
//       spaceBetween={50}

//       slidesPerView={1}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide>
//           <Image src={slide1} width='100' height='400' alt='slide' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <div className="slide-item">
//           <Image src={slide1} width='100' height='400' alt='slide' />
//         </div>
//       </SwiperSlide>
//       <SwiperSlide>
//         <div className="slide-item">
//           <Image src={slide1} width='100' height='400' alt='slide' />
//         </div>
//       </SwiperSlide>
//     </Swiper>