
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <footer>
      <div className="grid grid-cols-1 lg:grid-cols-2 inter text-white">
           <div className="bg-charcoal w-full py-20">
            <div className="w-[50%] mx-auto text-center">
             <div>
               <h3 className="text-3xl font-medium mb-5">CONTACT US</h3>
               <p className="text-xl font-medium my-2">123 ABS Street, Uni 21, Bangladesh</p>
               <a className="text-xl font-medium my-2" href="tel:+88 0192345678910">+88 0192345678910</a>
               <p className="text-xl font-medium my-2">Mon - Fri: 08:00 - 22:00</p>  
               <p className="text-xl font-medium my-2">Sat - Sun: 10:00 - 23:00</p>  
             </div>
            </div>
           </div>
           <div className="bg-raisinBlack py-20 inter">
            <div className="w-[50%] mx-auto text-center">
             <h3 className="text-3xl font-medium mb-5">Follow US</h3>
             <p className="text-xl font-medium my-2">Join us on social media</p>
              <ul className="flex items-center gap-5 justify-center mt-5">
                <li><a href=""><FaFacebookF className="text-3xl"/></a></li>
                <li><a href=""><FaInstagram className="text-3xl"/></a></li>
                <li><a href=""><FaTwitter className="text-3xl"/></a></li>
              </ul>
            </div>
           </div>
      </div>
      <div className="w-full bg-darkGray text-center py-5">
        <p className="text-white inter text-xl font-medium">Copyright © CulinaryCloud. All rights reserved.</p>
      </div>
    </footer>
  )
}
