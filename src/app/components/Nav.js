import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { BsHouseHeartFill } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { RxGlobe } from "react-icons/rx";
import { PiHouseLineLight } from "react-icons/pi";
import { FaOpencart } from "react-icons/fa";
export default function Nav() {
    return (
        <nav className=" sticky top-0 z-50" >
            <div className="flex justify-between items-center py-4 w-[91%] mx-auto bg-[#fafafa] p-4 mt-4 text-black rounded-full">
                            <div className="">
                <h3 className="text-3xl font-[700] italic text-blue-500 flex items-center gap-2"> <MdOutlineRealEstateAgent /> BOING</h3>
            </div>
            <div>
                <ul className="flex gap-6 text-sm font-[500] items-center">
                    <li>
                        <Link href="/" className="hover:text-blue-400">Home</Link>
                    </li>
                    <li>
                        <Link href="/" className="hover:text-blue-400 hover:border-b-2 hover:border-blue pb-3  ">About Us</Link>
                    </li>
                    <li>
                        <Link href="/" className="hover:text-blue-400 hover:border-b-2 hover:border-blue pb-3  ">Services</Link>
                    </li>
                    <li>
                        <Link href="/" className="hover:text-blue-400 hover:border-b-2 hover:border-blue pb-3  ">Agents</Link>
                    </li>
                    <li>
                        <Link href="/" className="hover:text-blue-400 hover:border-b-2 hover:border-blue pb-3  ">Contact</Link>
                    </li>
                    <li>
                        <Link href="/" className="hover:text-blue-400 hover:border-b-2 hover:border-blue pb-3  ">Properties</Link>
                    </li>
                    <li>
                        <Link href="/" className="hover:text-blue-400 hover:border-b-2 hover:border-red pb-3  "> <FiSearch className="h-6 w-6" /> </Link>
                    </li>
                </ul>
            </div>
            <div className="flex items-center gap-7 ">
                <BsHouseHeartFill  className="h-7 w-7" />
                <CiUser className="h-7 w-7" />
                <RxGlobe className="h-7 w-7" />
                <FaOpencart className="h-7 w-7" />
            </div>
            </div>
        </nav>
    );
}