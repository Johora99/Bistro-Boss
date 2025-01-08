import BgImage from '@/ShareComponents/BgImage';
import bgImg from '../assets/home/chef-service.jpg'
import MenuTitle from './MenuTitle';


export default function MenuBanner() {
const menuText = {
  text: 'Explore our diverse menu, carefully crafted to satisfy every craving. From hearty meals to light bites, each dish is made with the finest ingredients, ensuring a memorable dining experience. Browse through our categories to find your next favorite meal!'
};
  return (
    <div className='my-20'>
      <BgImage bgImg={bgImg}>
        <div className='bg-white inline-block m-20 cinzel text-darkGray'>
          <MenuTitle title='Bistro Boss' subtitle={menuText.text}></MenuTitle>
        </div>
      </BgImage>
    </div>
  )
}
