import BgImage from "@/ShareComponents/BgImage";
import bgImg from '../assets/menu/banner3.jpg';

export default function OurMenuBanner() {
  return (
    <div className="w-full h-[800px] ">
      <BgImage bgImg={bgImg} height='800px'>
        <div className="flex items-center justify-center w-full h-[800px]">
        <div className="text-white bg-darkGray bg-opacity-[0.6] container w-11/12 mx-auto text-center py-20">
          <h2 className="text-7xl font-bold cinzel mb-5">OUR MENU</h2>
          <p className="cinzel text-2xl font-semibold uppercase">Would you like to try a dish?</p>
        </div>
        </div>
      </BgImage>
    </div>
  )
}
