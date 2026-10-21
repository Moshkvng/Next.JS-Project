import { IoLocationSharp } from "react-icons/io5";
import { LuMapPinHouse } from "react-icons/lu";
import { GiCoinflip } from "react-icons/gi";
export default function search() {
    return (
        <div className="w-[91%] mx-auto mt-10 flex justify-center mt-[-35px]">
            <div className="bg-[#ddc7bb] py-7 px-5 items-center  w-[80%] rounded-3xl  shadow-lg shadow-blue-800/50 hover:bg-white">
                <div className="grid grid-cols-4 gap-5 ">
                <div className="col-1 flex justify-between p-5 bg-white rounded-2xl cursor-pointer hover:bg-[#ddc7bb]">
                    <p className="font-bold text-md text-blue-500">Location</p>
                    <IoLocationSharp  className="text-blue-500 w-5 h-5" />
                </div>
                <div className="col-2 flex justify-between p-5 bg-white rounded-2xl cursor-pointer hover:bg-[#ddc7bb]">
                    <p className="font-bold text-md text-blue-500">Type</p>
                    <LuMapPinHouse className="text-blue-500 w-5 h-5" />
                </div>
                <div className="col-3 flex justify-between  p-5 bg-white rounded-2xl cursor-pointer hover:bg-[#ddc7bb]">
                    <p className="font-bold text-md text-blue-500">Price Range</p>
                    <GiCoinflip  className="text-blue-500 w-5 h-5"/>
                </div>
                <div className="col-4 flex justify-center  p-5 bg-blue-500 rounded-2xl cursor-pointer hover:bg-[#ddc7bb]">
                    <p className="font-bold text-md text-white">Search</p>
                </div>
                </div>
                
            </div>
        </div>
    )
}