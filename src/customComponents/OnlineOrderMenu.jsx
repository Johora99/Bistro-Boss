// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import Img1 from '../assets/home/slide1.jpg'
import Img2 from '../assets/home/slide2.jpg'
import Img3 from '../assets/home/slide3.jpg'
import Img4 from '../assets/home/slide4.jpg'
import Img5 from '../assets/home/slide5.jpg'
export default function OnlineOrderMenu() {
  return (
    <div>
          <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Img1} alt="" className='w-full'/>
          <h3 className='orderSlidHeading' >Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img2} alt="" className='w-full'/>
          <h3 className='orderSlidHeading'>Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img3} alt="" className='w-full'/>
          <h3 className='orderSlidHeading'>pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img4} alt="" className='w-full'/>
          <h3 className='orderSlidHeading'>desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img5} alt="" className='w-full'/>
          <h3 className='orderSlidHeading'>Salads</h3>
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}
