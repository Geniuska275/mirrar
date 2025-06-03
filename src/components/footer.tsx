import { Phone, Mail} from "lucide-react";
import apple from "./apple.png";
import google from "./google.png";
import { MdWhatsapp } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { RiYoutubeLine } from "react-icons/ri";
import et from "./elt.png";
import ff from "./ff.png";
import r from "./r.png";


export default function Footer() {
  return (
    <footer className="bg-red-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 flex justify-around gap-3 items-center">
        {/* Main Footer Content */}
        <div>
        <div className="flex justify-between items-center gap-[40px] mb-[120px] ">
          {/* Company Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Mirraw Offers
                </a>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="mb-[60px]">
            <h3 className="text-lg font-bold mb-4">HELP</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Payments
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Business Section */}
          <div className="mb-[90px]">
            <h3 className="text-lg font-bold mb-4">BUSINESS</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  International Buyers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Designer Login
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Bulk Order Inquiry
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="mb-[90px]">
            <h3 className="text-lg font-bold mb-4">CONTACT US</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 949 464 5941 (Available 24*7)</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:mcare@mirraw.com" className="hover:underline">
                  mcare@mirraw.com
                </a>
              </li>
              <li className="flex items-center">
                 <MdWhatsapp/>
                <span>+91 8591937092</span>
              </li>
            </ul>
          </div>
        </div>



</div>

        {/* Social Media and Spotlight */}
 <div className="flex flex-col gap-[40px]">
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">FOLLOW US ON SOCIAL MEDIA</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:opacity-80">
                <MdWhatsapp/>

              </a>
              <a href="#" className="hover:opacity-80">
                <FaXTwitter/>
                </a>
              <a href="#" className="hover:opacity-80">
                <IoLogoInstagram/>
              </a>
              <a href="#" className="hover:opacity-80">
                <RiYoutubeLine/>
              </a>
              <a href="#" className="hover:opacity-80">
                <FaSquareFacebook/>
               </a>
            </div>
          </div>

          {/* In The Spotlight */}
           <div>
            <h3 className="text-lg font-bold mb-4">IN THE SPOTLIGHT</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-white p-1 hover:opacity-80">
                <img src={et} alt="ET" className="h-10" />
              </a>
              <a href="#" className="bg-white p-1 hover:opacity-80">
                <img src={r} alt="Media Logo" className="h-10" />
              </a>
              <a href="#" className="bg-white p-1 hover:opacity-80">
                <img src={ff} alt="FF" className="h-10" />
              </a>
            </div>
          </div> 
         <div className="mb-12">
          <h3 className="text-lg font-bold mb-4">EXPERIENCE MIRRAW APP ON MOBILE</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:opacity-80">
              <img src={google} alt="Google Play" className="h-10" />
            </a>
            <a href="#" className="hover:opacity-80">
              <img src={apple} alt="App Store" className="h-10" />
            </a>
          </div>
        </div> 
        </div>

        {/* Mobile App */}

        {/* Features */}
        {/* <div className="border-t border-red-800 pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-red-800 rounded-full p-6 mb-4">
                <img src="/placeholder.svg?height=40&width=40" alt="Delivery" className="h-10 w-10" />
              </div>
              <p>Hassle-Free Delivery</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-red-800 rounded-full p-6 mb-4">
                <img src="/placeholder.svg?height=40&width=40" alt="Worldwide" className="h-10 w-10" />
              </div>
              <p>Ships Worldwide</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-red-800 rounded-full p-6 mb-4">
                <img src="/placeholder.svg?height=40&width=40" alt="Money Back" className="h-10 w-10" />
              </div>
              <p>100% Money Back Guarantee</p>
            </div>
          </div>
        </div> */}


      

      </div>
        <div className="text-center border-t border-red-800 pt-6">
          <p>Copyright © 2025, Mirraw Online Services Pvt. Ltd. All Rights Reserved.</p>
        </div>
    </footer>
  )
}
