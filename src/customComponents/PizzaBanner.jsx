import bgImg from '../assets/menu/pizza-bg.jpg'
import BgImage from '@/ShareComponents/BgImage';
import MenuTitle from './MenuTitle';

export default function PizzaBanner() {
    const pizza ={
    text : 'Pizza is one of the most beloved and versatile dishes in the world, originating from Italy and becoming a global culinary icon. '
  }
  return (
    <div>
        <BgImage bgImg={bgImg}>
          <div className='container w-11/12 mx-auto'>
        <div className='bg-darkGray bg-opacity-[0.6]  cinzel text-white w-[80%] mx-auto flex items-center justify-center my-32'>
          <div className=''>
          <MenuTitle title='Pizza' subtitle={pizza.text}></MenuTitle>
          </div>
        </div>
          </div>
      </BgImage>
    </div>
  )
}
