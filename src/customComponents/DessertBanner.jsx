import bgImg from '../assets/menu/dessert-bg.jpeg'
import BgImage from '@/ShareComponents/BgImage';
import MenuTitle from './MenuTitle';
export default function DessertBanner() {
  const dessert ={
    text : 'Desserts are a delightful way to end any meal, offering a sweet and satisfying conclusion to your dining experience. '
  }
  return (
    <div>
        <BgImage bgImg={bgImg}>
          <div className='container w-11/12 mx-auto'>
        <div className='bg-darkGray bg-opacity-[0.6]  cinzel text-white w-[80%] mx-auto flex items-center justify-center my-32'>
          <div className=''>
          <MenuTitle title='DESSERTS' subtitle={dessert.text}></MenuTitle>
          </div>
        </div>
          </div>
      </BgImage>
    </div>
  )
}
