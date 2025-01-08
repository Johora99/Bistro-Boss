import OurShopBanner from "@/customComponents/OurShopBanner";
import OurShopCategory from "@/customComponents/OurShopCategory";


export default function OurShopPage() {
  return (
    <div>
      <section>
        <OurShopBanner></OurShopBanner>
      </section>
      <section>
        <OurShopCategory></OurShopCategory>
      </section>
    </div>
  )
}
