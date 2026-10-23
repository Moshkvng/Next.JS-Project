import Image from "next/image"
import logo1 from '../assets/fonthouse.jpg'
export default function Dreamhouse() {
    return (
        <div className="w-[91%] mx-auto mt-20">
            <div className="grid grid-cols-2 gap-15">
                <div className="col-1">
                    <Image
                        src={logo1}
                        alt="Next.js logo"
                        className="h-full w-full object-contain rounded-3xl"
                    />
                </div>
                <div>
                    <h1 className="font-[800] text-[#2b1b12] text-4xl mb-8">We Help You To Find <br /> Your Dream Home</h1>
                    <p className="text-lg font-bold text-[#4f3527] mb-15">From cozy cottages to luxurious estates, our <br /> dedicated team guides you through every step of the <br /> journey, ensuring your dream home becomes a reality</p>
                    <div className="grid grid-cols-3 gap-5">
                        <div className="col-1">
                            <h1 className="text-5xl font-bold text-[#4f3527] mb-2">8K+</h1>
                            <h2 className="text-bold text-lg">Houses Available</h2>
                        </div>
                        <div className="col-2">
                            <h1 className="text-5xl font-bold text-[#4f3527] mb-2">6K+</h1>
                            <h2 className="text-bold text-lg">Houses </h2>
                        </div>
                        <div className="col-3">
                            <h1 className="text-5xl font-bold text-[#4f3527] mb-2">2K+</h1>
                            <h2 className="text-bold text-lg">Trusted Agents</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}