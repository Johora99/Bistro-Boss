import ContactCards from "@/customComponents/ContactCards";
import ContactUsBanner from "@/customComponents/ContactUsBanner";
import ContactUsForm from "@/customComponents/ContactUsForm";
import Heading from "@/ShareComponents/Heading";


export default function ContactUs() {
  return (
    <div>
      <section>
        <ContactUsBanner></ContactUsBanner>
      </section>
      <section className="my-20">
        <Heading subHeading={'Visit Us'} heading={'OUR LOCATION'}></Heading>
      </section>
      <section className="container w-11/12 mx-auto mb-20">
        <ContactCards></ContactCards>
      </section>
      <section className="mb-20">
        <Heading subHeading={'Send Us a Message'} heading={'CONTACT FORM'}></Heading>
      </section>
      <section className="container w-11/12 mx-auto">
        <ContactUsForm></ContactUsForm>
      </section>
    </div>
  )
}
