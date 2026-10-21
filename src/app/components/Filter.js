import { Span } from "next/dist/trace";

export default function Filter() {
    return (
        <div className="w-[91%] mx-auto mt-20">
            
            <div className="mb-10">
                <p className="text-2xl font-bold mb-5">Filter by City</p>
                <input type="text" alt="" className="border border-blue-600 p-2 mb-2" placeholder="search city"/>

                <div className="flex gap-4">
                 <p className="text-red-500">Abuja</p>
                  <p className="text-[#249bb4]">Lagos <span className="text-xs text-gray-500">864</span></p>
                  <p className="text-[#249bb4]">Kano <span className="text-xs text-gray-500">3</span></p>
                  <p className="text-[#249bb4]">Ibadan <span className="text-xs text-gray-500">41</span></p>
                  <p className="text-[#249bb4]">Kaduna  <span className="text-xs text-gray-500">26</span></p>
                  <p className="text-[#249bb4]">Port Harcourt  <span className="text-xs text-gray-500">84</span></p>
                  <p className="text-[#249bb4]">Benin City  <span className="text-xs text-gray-500">20</span></p>
                  <p className="text-[#249bb4]">Maiduguri  <span className="text-xs text-gray-500">1</span></p>
                  <p className="text-[#249bb4]">Zaria <span className="text-xs text-gray-500">0</span></p>
                  <p className="text-[#249bb4]">Aba  <span className="text-xs text-gray-500">4</span></p>
                  <p className="text-[#249bb4]">Jos  <span className="text-xs text-gray-500">20</span></p>
                </div>
            </div>
            <div className="mb-10 ">
                <p className="text-2xl font-bold mb-5">Related Categories</p>
                <div className="flex gap-4  mb-3 ">
                  <p className="text-[#249bb4]">Apartment Rental <span className="text-xs text-gray-500">6</span></p>
                  <p className="text-[#249bb4]">Auctions <span className="text-xs text-gray-500">4</span></p>
                  <p className="text-[#249bb4]">Building Maintenance <span className="text-xs text-gray-500">12</span></p>
                  <p className="text-[#249bb4]">Buildings  <span className="text-xs text-gray-500">8</span></p>
                  <p className="text-[#249bb4]">Cleaning  <span className="text-xs text-gray-500">43</span></p>
                  <p className="text-[#249bb4]">Commercial Property  <span className="text-xs text-gray-500">21</span></p>
                  <p className="text-[#249bb4]">Coworking Spaces  <span className="text-xs text-gray-500">1</span></p>
                  <p className="text-[#249bb4]">Fire Safety Equipment <span className="text-xs text-gray-500">15</span></p>
                </div>
                <div className="flex gap-4  mb-3 ">
                  <p className="text-[#249bb4]">Home Improvement  <span className="text-xs text-gray-500">7</span></p>
                  <p className="text-[#249bb4]">Interior Design  <span className="text-xs text-gray-500">22070</span></p>
                  <p className="text-[#249bb4]">Letting Agents <span className="text-xs text-gray-500">93</span></p>
                  <p className="text-[#249bb4]">Online Property Listings <span className="text-xs text-gray-500">18</span></p>
                  <p className="text-[#249bb4]">Overseas Property<span className="text-xs text-gray-500">5</span></p>
                  <p className="text-[#249bb4]">Property Consultants  <span className="text-xs text-gray-500">43</span></p>
                                    <p className="text-[#249bb4]">Vacation Rentals  <span className="text-xs text-gray-500">0</span></p>


                </div>
                <div className="flex gap-4 mb-3  ">
                  <p className="text-[#249bb4]">Property Development  <span className="text-xs text-gray-500">633</span></p>
                  <p className="text-[#249bb4]">Property Management  <span className="text-xs text-gray-500">28</span></p>
                  <p className="text-[#249bb4]">Real Estate Agents  <span className="text-xs text-gray-500">1632</span></p>
                  <p className="text-[#249bb4]">Removals and Relocation <span className="text-xs text-gray-500">6</span></p>
                  <p className="text-[#249bb4]">Renovation  <span className="text-xs text-gray-500">20</span></p>
                  <p className="text-[#249bb4]">Rental Property  <span className="text-xs text-gray-500">2</span></p>
                  <p className="text-[#249bb4]">2 Security <span className="text-xs text-gray-500">1763</span></p>
                </div>
                <div className="flex gap-4  ">
                  <p className="text-[#249bb4]">Warehouses  <span className="text-xs text-gray-500">2</span></p>
                </div>
            </div>

        </div>
    )
}

