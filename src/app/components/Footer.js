import Image from "next/image"
import logo1 from '../assets/gogles.png'
import logo2 from '../assets/applestore.png'
import { MdOutlineRealEstateAgent } from "react-icons/md";
export default function Footer() {
    return (
        <div className="bg-[#1a1f36]">
            <div className="w-[91%] mx-auto ">
                <div className="mt-20 grid grid-cols-4 gap-10 pt-20 border-b border-gray-100 pb-10">
                    <div className="col-1">
                        <h1 className="text-blue-500 text-[23px] font-[600] mb-3">Popular States</h1>
                        <ul>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Properties in Lagos</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Properties in Abuja</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Properties in Rivers</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Properties in Kano</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Properties in Ogun</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Properties in Oyo</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Properties in Enugu</li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <h1 className="text-blue-500 text-[23px] font-[600] mb-3">Popular Cities</h1>
                        <ul>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Properties in Ikeja</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Properties in Lekki</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Properties in Ikoyi</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Properties in Ibeju-Lekki</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Properties in Ibadan</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Properties in Port Harcourt</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Properties in Kano</li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h1 className="text-blue-500 text-[23px] font-[600] mb-3">Popular Shortlet Cities</h1>
                        <ul>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Properties in Ikeja</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Properties in Lekki</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Properties in Ikoyi</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Short Lets in Ajah</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Properties in Ibadan</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Short Lets in Abuja</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Short Lets in Rivers</li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <h1 className="text-blue-500 text-[23px] font-[600] mb-3">Popular land for sale</h1>
                        <ul>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Lands in Lagos</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Lands in Abuja</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Lands in Oyo</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Lands in Ogun</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Lands in Enugu</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Lands in Rivers</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Lands in Kano</li>
                        </ul>
                    </div>
                </div>
                <div className="grid grid-col-5 gap-10 border-b border-gray-400 pb-20">"
                    <div className="col-1">
                        <h3 className="text-2xl font-[700] italic text-blue-500 flex mb-4 items-center gap-2"> <MdOutlineRealEstateAgent /> BOING</h3>
                        <div className="mb-4">
                            <h1 className="test-md font-bold text-white hover:text-blue-500 mb-3">Property Centre is a leading property website in Nigeria, with listings for sale, rent and lease. We give property seekers an easy way to find homes, land, shops, office spaces and other commercial property across the country.</h1>
                            <button className="border-blue-500 border  text-white px-10 py-2 rounded-full hover:bg-white hover:text-black ">Learn More </button>
                        </div>
                        <h1 className="text-2xl font-[700] text-blue-500">Download on</h1>
                        <div className="flex gap-3 mt-[-30px]">
                            <Image
                                src={logo1}
                                alt="Next.js logo"
                                className="h-25  w-25  object-contain"
                            />
                            <Image
                                src={logo2}
                                alt="Next.js logo"
                                className="h-25 w-25  object-contain"
                            />
                        </div>
                    </div>
                    <div className="col-2">
                        <h1 className="text-blue-500 text-[23px] font-[600] mb-3">Popular property</h1>
                        <ul>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Houses for rent in Guzape District</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Flats for rent in Guzape District</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Houses for sale in Guzape District</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">2 bedroom flats for rent in Guzape District</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Houses for rent in Katampe</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Flats for rent in Katampe</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Houses for sale in Katampe</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">2 bedroom flats for rent in Katampe</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Houses for rent in Jahi</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Flats for rent in Jahi</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Houses for sale in Jahi</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">2 bedroom flats for rent in Jahi</li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h1 className="text-blue-500 text-[23px] font-[600] mb-3">Explore</h1>
                        <ul>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Estate agents</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Property developers</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Rent and house price index</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Demand vs supply</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Diaspora demand index</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Affordability Gap</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Time to let and sell index</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Quarterly market reports</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Property blog</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Area guides</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Property glossary</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Events</li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <h1 className="text-blue-500 text-[23px] font-[600] mb-3">Advertise</h1>
                        <ul>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Advertise your property</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Types of listings</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Premium Plus </li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Boost your listing</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Verified Photos</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Place banner adverts</li>
                        </ul>
                    </div>
                    <div className="col-5">
                        <h1 className="text-blue-500 text-[23px] font-[600] mb-3">Support</h1>
                        <ul>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">About us</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Help centre</li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Contact us </li>
                            <li className="text-white text-sm font-bold mb-2 hover:underline hover:text-blue-500">Mobile apps</li>

                        </ul>
                    </div>
                </div>
                <div className="grid grid-cols-2 py-5">
                <div className="flex gap-4 col-1 w-500 ">
                <h1 className="text-gray-700 font-bold text-sm hover:text-white">© 2026 Property Centre. All rights reserved.</h1>
                <p className="text-gray-500 font-bold text-sm hover:text-white">Privacy Policy</p>
                <p className="text-gray-500 font-bold text-sm hover:text-white">Terms of Use</p>
                <p className="text-gray-500 font-bold text-sm hover:text-white">Cookie settings</p>
                    </div>

                </div>

            </div>
        </div>
    )
}





























