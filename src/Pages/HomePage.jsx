import Banner from "@/customComponents/Banner";
import ChefRecomends from "@/customComponents/ChefRecomends";
import Contact from "@/customComponents/Contact";
import FeatureMenu from "@/customComponents/FeatureMenu";
import MenuBanner from "@/customComponents/MenuBanner";
import OnlineOrderMenu from "@/customComponents/OnlineOrderMenu";
import PopularItems from "@/customComponents/PopularItems";
import Reviews from "@/customComponents/Reviews";
import Heading from "@/ShareComponents/Heading";

export default function HomePage() {
  return (
    <div>
      <Banner></Banner>
      <div className="mt-32 mb-10">
          <Heading subHeading={'From 11:00am to 10:00pm'} heading={'ORDER ONLINE'}></Heading>
      </div>
      <section className="container w-11/12 mx-auto">
        <OnlineOrderMenu></OnlineOrderMenu>
      </section>
      <section className="container w-11/12 mx-auto">
        <MenuBanner></MenuBanner>
      </section>
      <section>
        <Heading subHeading={'Check it out'} heading={'FROM OUR MENU'}></Heading>
      </section>
      <section>
        <PopularItems></PopularItems>
      </section>
      <section className="container w-11/12 mx-auto">
        <Contact></Contact>
      </section>
      <section className="container w-11/12 mx-auto">
        <Heading subHeading={'Should Try'} heading={'CHEF RECOMMENDS'}></Heading>
        <ChefRecomends></ChefRecomends>
      </section>
      <section className="mb-20">
        <FeatureMenu></FeatureMenu>
      </section>
      <section className="mb-10">
        <Reviews></Reviews>
      </section>
    </div>
  )
}
