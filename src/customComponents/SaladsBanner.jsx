import bgImg from '../assets/menu/salad-bg.jpg'
import BgImage from '@/ShareComponents/BgImage';
import MenuTitle from './MenuTitle';

export default function SaladsBanner() {
  const salad ={
    text : 'Salad is a refreshing and versatile dish that combines a variety of fresh ingredients, offering a healthy and flavorful addition to any meal. '
  }
  return (
    <div>
        <BgImage bgImg={bgImg}>
          <div className='container w-11/12 mx-auto'>
        <div className='bg-darkGray bg-opacity-[0.6]  cinzel text-white w-[80%] mx-auto flex items-center justify-center my-32'>
          <div className=''>
          <MenuTitle title='SALADS' subtitle={salad.text}></MenuTitle>
          </div>
        </div>
          </div>
      </BgImage>
    </div>
  )
}
