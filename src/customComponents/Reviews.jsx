import useReview from "@/Hooks/useReview";
import Heading from "@/ShareComponents/Heading";
import { Swiper, SwiperSlide } from 'swiper/react';
import Img from '../assets/quote-left 1.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
export default function Reviews() {
  const {reviews} = useReview();
  return (
    <div className="container w-11/12 mx-auto">
      <Heading subHeading={'What Our Clients Say'} heading={'TESTIMONIALS'}></Heading>
      <div className="py-10">
        <Swiper  navigation={true} modules={[Navigation]} className="mySwiper">
        {
          reviews?.map(review => 
          <SwiperSlide key={review._id}>
             <div className="lg:w-[70%] mx-auto text-center inter">
              <Rating
              style={{ maxWidth: 180 , margin:'auto'}}
              value={review.rating}
              readOnly
              />
              <img src={Img} alt="" className="mx-auto my-5"/>
               <p className="text-dimGray text-xl">{review.details}</p>
               <h3 className="text-3xl text-goldenrod font-medium uppercase mt-5">{review.name}</h3>
             </div>
          </SwiperSlide>
          )
        }
        </Swiper>
      </div>
    </div>
  )
}
