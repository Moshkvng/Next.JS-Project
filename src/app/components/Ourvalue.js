import { SiGooglemaps } from "react-icons/si";
import { IoShieldCheckmark } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { TbJewishStarFilled } from "react-icons/tb";
export default function Ourvalue() {
    return (
        <div className=" w-[91%] mx-auto">
            <div className="text-center items-center align-center  mt-30 mb-10">
                <h1 className="mb-6 text-5xl text-center font-[800] text-[#2b1b12] ">Why Choose Us</h1>
                <h2 className="text-center text-[#2b1b12] text-[17px] font-[700]" >Elevating Your Home Experience With Expertise,integrity, <br /> And Unmatched Personalized Service</h2>
            </div>
            <div className="grid grid-cols-4 gap-6 mb-10">
                <div className="col-1 bg-[#ddc7bb] px-5 py-8 rounded-3xl  shadow-lg shadow-blue-800/50 hover:bg-white">
                    <div className="bg-white p-5 rounded-lg w-20 mb-4 shadow-lg">
                    <SiGooglemaps  className="h-10 w-10  text-blue-500 " />
                    </div>

                    <h1 className="text-[22px] font-bold text-[#2b1b12] mb-3 ">Expert  Guidance</h1>
                    <p className="font-[500] text-md text-[#4f3527]  ">Benefits From our team's <br /> seasons expertise for a <br /> smooth buying experience </p>
                </div>
                <div className="col-2 bg-[#ddc7bb] px-5 py-8 rounded-3xl  shadow-lg shadow-blue-800/50  hover:bg-white  ">
                    <div className="bg-white p-5 rounded-lg w-20 mb-4 shadow-lg">
                    <IoShieldCheckmark  className="h-10 w-10 text-blue-500 " />
                    </div>

                    <h1 className="text-[22px] font-bold text-[#2b1b12] mb-3 ">Transparent Process</h1>
                    <p className="font-[500] text-md text-[#4f3527]  ">Stay informed with our <br /> clear an honest approach<br /> to selling our houses </p>
                </div>
                <div className="col-3 bg-[#ddc7bb] px-5 py-8 rounded-3xl  shadow-lg shadow-blue-800/50  hover:bg-white  ">
                    <div className="bg-white p-5 rounded-lg w-20 mb-4 shadow-lg">
                    <FaHandshake  className="h-10 w-10 text-blue-500 " />
                    </div>

                    <h1 className="text-[22px] font-bold text-[#2b1b12] mb-3 ">Exceptional Support</h1>
                    <p className="font-[500] text-md text-[#4f3527]  ">Providing peace of mind <br /> with our responsive and<br /> attentive customer service </p>
                </div>
                <div className="col-4 bg-[#ddc7bb] px-5 py-8 rounded-3xl   shadow-lg shadow-blue-800/50  hover:bg-white ">
                    <div className="bg-white p-5 rounded-lg w-20 mb-4 shadow-lg">
                    <FaUserEdit  className="h-10 w-10 text-blue-500 " />
                    </div>

                    <h1 className="text-[22px] font-bold text-[#2b1b12] mb-3 ">Personalized Service</h1>
                    <p className="font-[500] text-md text-[#4f3527]  ">Our services adapt to your <br /> unique needs, making your <br />journey stress-free. </p>
                </div>
            </div>
                        <div className="text-center items-center align-center  mt-30 mb-10">
                <h1 className="mb-6 text-5xl text-center font-[800] text-[#2b1b12] ">Values</h1>
            </div>
<div className="grid grid-col-2  items-center gap-10 bg-[#ddc7bb] px-10 py-4 rounded-3xl">
    <div className="col-1">
        <h1 className="text-[white] font-[800] text-4xl mb-4">Our Values</h1>
        <p className="text-md font-[600] text-[#2b1b12]">Our story is one of continus growth and evoultion. we <br /> started as a small team with big dreams. determined to <br /> create a real estate platform that transcended the <br /> ordinary.</p>
    </div>
    <div className="col-2">
        <div className="">
            <div className="grid grid-cols-2 gap-6 p-9 rounded-2xl border-gray-500 border-white shadow-4xl border-3 ">
                <div className="col-1 border-r-2 border-white ">
                    <div className="flex gap-3 mb-4 items-center">
                        <IoIosStar className="text-blue-500 rounded-full h-10 w-10 border-white border-2 border-gray-500 p-1"/>
                        <p className="text-md text-[#2b1b12] font-bold">Trust</p>
                    </div>
                    <h1 className="text-black text-[12px] font-[500]">Trust is the cornerstone of every successful <br />real estate transaction.</h1>
                </div>
                <div className="col-2">
                    <div className="flex gap-3 mb-4 items-center">
                        <FaGraduationCap className="text-blue-500 rounded-full h-10 w-10 border-white border-1 border-gray-500 p-1"/>
                        <p className="text-md text-[#2b1b12] font-bold">Excellence</p>
                    </div>
                    <h1 className="text-black text-[12px] text-[12px] font-bold" >We set the bar high for ourselves.from the <br />prperties we list to the services we provide.</h1>
                </div>
                <div className="border-1 border-white w-130 ">

                </div>
                <div className="col-1  border-r-2 border-white ">
                    <div className="flex gap-3 mb-4 items-center">
                        <FaUsers className="text-blue-500 rounded-full h-10 w-10 border-white border-2 border-gray-500 p-1"/>
                        <p className="text-md text-[#2b1b12] font-bold">Client-Centric</p>
                    </div>
                    <h1 className="text-black text-[12px] font-[500]">Your dreams and needs are at the center of <br />our universe.we listen,understand.</h1>
                </div>
                <div className="col-2 ">
                    <div className="flex gap-3 mb-4 items-center">
                        <IoIosStar className="text-blue-500 rounded-full h-10 w-10 border-white border-2 border-gray-500 p-1"/>
                        <p className="text-md text-[#2b1b12] font-bold">Our Commitment</p>
                    </div>
                    <h1 className="text-black  font-bold text-[12px]" >We are dedicated to providing you with the <br />highest level of service,professionalism.</h1>
                </div>

            </div>
        </div>
    </div>
</div>
        </div>
    )
}