import { Parallax } from 'react-parallax';
import Heading from '@/ShareComponents/Heading'
import bgImg from '../assets/home/featured.jpg'
export default function FeatureMenu() {
    const bgStyle = {

    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', 
    backgroundAttachment: "fixed",
    }
  const date = new Date();
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const formatted = new Intl.DateTimeFormat('en-US', options).format(date);


  return (
        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={bgImg}
        strength={-200}
    >
          <div style={bgStyle} className='w-full  relative'>
            <div className='w-full h-full bg-darkGray  bg-opacity-[0.7] py-20'>

       <div className='container w-11/12 mx-auto'>
          <div>
            <Heading subHeading={'Check it out'} heading={'FROM OUR MENU'}></Heading>
            <div className='mt-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 '>
              <img src={bgImg} alt="" className='w-full h-[400px]'/>
              <div className='text-white inter'>
                  <p className='text-lg '>{formatted}</p>
                  <p className='text-xl my-2'>
                   WHERE CAN I GET SOME?
                   </p>
                   <p>Discover a culinary journey like no other with our thoughtfully curated menu. Whether you crave bold flavors, comforting classics, or fresh, vibrant dishes, we have something for everyone. Explore our categories and indulge in the finest ingredients, expertly prepared to delight your taste buds.</p>
              </div>
            </div>
          </div>
       </div>
            </div>
      </div>
        
    </Parallax>
  
  )
}
