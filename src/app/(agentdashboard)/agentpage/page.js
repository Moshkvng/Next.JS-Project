import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineRealEstateAgent } from 'react-icons/md';
import logo1 from '@/app/assets/fonthouse.jpg';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">

      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">


                            <div className="">
                <h3 className="text-3xl font-[700] italic text-blue-500 flex items-center gap-2"> <MdOutlineRealEstateAgent /> BOING</h3>
            </div>



          <div className="flex items-center gap-3">
            <Link 
              href="/loginagent" 
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 "
            >
              Sign In
            </Link>
            <Link 
              href="/create_agent" 
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>


      <section  className=" bg-gray-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900  mb-6">
              Empowering Agents to Close Deals <span className="text-blue-600">Faster</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 ">
              Manage listings, connect with buyers, and close property deals seamlessly with our high-performance agent dashboard and client network.
            </p>


            <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex flex-col sm:flex-row gap-3">
              <input 
                type="text" 
                className="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg text-sm ">
                Search
              </button>
            </div>
          </div>


                <div className="">
                    <Image
                        src={logo1}
                        alt="Next.js logo"
                        className="h-full w-full object-contain"
                    />
                </div>
        </div>
      </section>


      <section id="about" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Partner With Us</h2>
            <p className="text-gray-600">
              We provide independent agents and brokerages with modern tools, verified buyer leads, and automated property management.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md ">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4 font-bold text-xl">
                ⚡
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Lead Match</h3>
              <p className="text-sm text-gray-600 ">
                Receive instant notifications when qualified buyers express interest in your listed properties.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md ">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4 font-bold text-xl">
                📊
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Analytics</h3>
              <p className="text-sm text-gray-600 ">
                Track views, inquiries, and commission reports directly from your centralized dashboard.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md ">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4 font-bold text-xl">
                🔒
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Verification</h3>
              <p className="text-sm text-gray-600 ">
                Verify buyer authenticity and securely handle contracts and paperwork online.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Property Business?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Join hundreds of active agents showcasing premium listings and closing deals every day.
          </p>
          <Link 
            href="/register" 
            className="inline-block px-8 py-3.5 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 "
          >
            Create Agent Account
          </Link>
        </div>
      </section>


      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm">
            © {new Date().getFullYear()} Boingestate. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}