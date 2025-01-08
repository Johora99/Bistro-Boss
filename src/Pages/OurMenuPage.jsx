import Dessert from "@/customComponents/Dessert";
import DessertBanner from "@/customComponents/DessertBanner";
import OurMenuBanner from "@/customComponents/OurMenuBanner";
import Pizza from "@/customComponents/Pizza";
import PizzaBanner from "@/customComponents/PizzaBanner";
import Salads from "@/customComponents/Salads";
import SaladsBanner from "@/customComponents/SaladsBanner";
import Soup from "@/customComponents/Soup";
import SoupBanner from "@/customComponents/SoupBanner";
import TodaysOffer from "@/customComponents/TodaysOffer";
import Heading from "@/ShareComponents/Heading";


export default function OurMenuPage() {
  return (
    <div>
      <section>
        <OurMenuBanner></OurMenuBanner>
      </section>
      <section className="my-20">
        <Heading subHeading={"Don't miss"} heading={"TODAY'S OFFER"}></Heading>
        <TodaysOffer></TodaysOffer>
      </section>
      <section>
        <DessertBanner></DessertBanner>
        <Dessert></Dessert>
      </section>
      <section>
        <PizzaBanner></PizzaBanner>
        <Pizza></Pizza>
      </section>
      <section>
        <SaladsBanner></SaladsBanner>
        <Salads></Salads>
      </section>
      <section>
        <SoupBanner></SoupBanner>
        <Soup></Soup>
      </section>
    </div>
  )
}
