import bgImg from '../assets/menu/soup-bg.jpg'
import BgImage from '@/ShareComponents/BgImage';
import MenuTitle from './MenuTitle';

export default function SoupBanner() {
    const soup ={
    text : 'Soup is a warm, comforting dish that has been cherished for centuries across cultures. '
  }
  return (
    <div>
            <BgImage bgImg={bgImg}>
              <div className='container w-11/12 mx-auto'>
            <div className='bg-darkGray bg-opacity-[0.6]  cinzel text-white w-[80%] mx-auto flex items-center justify-center my-32'>
              <div className=''>
              <MenuTitle title='SOUPS' subtitle={soup.text}></MenuTitle>
              </div>
            </div>
              </div>
          </BgImage>
        </div>
  )
}
