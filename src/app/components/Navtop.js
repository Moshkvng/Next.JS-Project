import Image from "next/image"
import logo1 from '../assets/this.jpg'
import { BsStars } from "react-icons/bs";
export default function Navtop() {
    return (
        <div className="">
            <nav  className=" w-full h-[30px] bg-cover bg-center bg-no-repeat text-center items-center justify-center flex " style={{ backgroundImage: `url(${logo1.src})` }}>
               <h1 className="text-white text-[10px] font-[500]   flex items-center text-[13px]"><BsStars className="text-yellow-400 mr-2" />Discover Your Dream Property With Boing <span className="text-blue-900 underline ml-2 cursor-pointer">Learn More</span></h1>
            </nav>
        </div>
    )
}