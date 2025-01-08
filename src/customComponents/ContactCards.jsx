import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
export default function ContactCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 inter">
       <div className="border-[1px] border-lightGray">
         <div className="bg-goldenrod py-5">
           <FaPhoneVolume className="text-xl text-white mx-auto"/>
         </div>
         <div className="bg-whisperGray m-5 mt-0">
           <div className="text-center py-10">
            <h4 className="text-darkGray text-2xl font-medium mb-3">PHONE</h4>
          <a href="tel:+38 (012) 34 56 789" className="text-dimGray text-base font-normal">+38 (012) 34 56 789</a>
           </div>
         </div>
       </div>
       <div className="border-[1px] border-lightGray">
         <div className="bg-goldenrod py-5">
           <FaLocationDot className="text-xl text-white mx-auto"/>
         </div>
         <div className="bg-whisperGray m-5 mt-0">
           <div className="text-center py-10">
            <h4 className="text-darkGray text-2xl font-medium mb-3">ADDRESS</h4>
          <a href="tel:+38 (012) 34 56 789" className="text-dimGray text-base font-normal">+38 (012) 34 56 789</a>
           </div>
         </div>
       </div>
       <div className="border-[1px] border-lightGray">
         <div className="bg-goldenrod py-5">
           <IoTime  className="text-xl text-white mx-auto"/>
         </div>
         <div className="bg-whisperGray m-5 mt-0">
           <div className="text-center py-10">
            <h4 className="text-darkGray text-2xl font-medium mb-3">WORKING HOURS</h4>
           <p className="text-dimGray text-base font-normal">Mon - Fri: 08:00 - 22:00 <br />
             Sat - Sun: 10:00 - 23:00</p>
           </div>
         </div>
       </div>
    </div>
  )
}
