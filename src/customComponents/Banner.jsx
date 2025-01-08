import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Img1 from '../assets/home/01.jpg'
import Img2 from '../assets/home/02.jpg'
import Img3 from '../assets/home/03.png'
import Img4 from '../assets/home/04.jpg'
import Img5 from '../assets/home/05.png'
import Img6 from '../assets/home/06.png'
export default function Banner() {
  return (
    <div>
      <Carousel autoPlay interval={2000} infiniteLoop className="h-[800px] text-center">
                <div className="h-[800px]">
                    <img src={Img1} className="h-full object-cover"/>
                </div>
                <div className="h-[800px]">
                      <img src={Img2} className="h-full object-cover"/>
                </div>
                <div className="h-[800px]">
                      <img src={Img3} className="h-full object-cover"/>
                </div>
                <div className="h-[800px]">
                      <img src={Img4} className="h-full object-cover"/>
                </div>
                <div className="h-[800px]">
                      <img src={Img5} className="h-full object-cover"/>
                </div>
                <div className="h-[800px]">
                      <img src={Img6} className="h-full object-cover"/>
                </div>
            </Carousel>
    </div>
  )
}
