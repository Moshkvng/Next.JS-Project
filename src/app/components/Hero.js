import Image from "next/image"
import logo1 from '../assets/real.webp'
import Link from "next/link";
export default function Hero() {
    return (
        <div className="w-[91%] mx-auto mt-5 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-center items-center">
                <div className="col-1">
                    <h1 className="text-7xl font-[800] mb-4 text-[#2b1b12]">Find Your <br /> Dream Home</h1>
                    <p className="text-lg mb-4 text-[#2b1b12] font-[100] ">Discover the perfect property for you with our comprehensive <br /> listings and expert guidance.</p>
                    <p className="text-lg mb-4 font-[700] text-[#2b1b12]">Explore our curated selections of exquisite <br /> properties meticulously tailored to your <br /> unique dream home vision </p>
                    <Link href="/createuser"  >                    <button className="bg-blue-500 text-white px-10 py-2 rounded mt-4 hover:bg-black">Sign Up</button></Link>
                </div>
                <div className="col-2">
                    <Image
                        src={logo1}
                        alt="Next.js logo"
                        className="h-full w-full object-contain"
                    />
                </div>
            </div>
        </div>
        
        
    )
}