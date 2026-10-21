import React from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

export default function AgentLoginPage() {
  return (
    <div>
        <Nav />
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        

        <h2 className="mt-4 text-center text-2xl font-black text-gray-900 tracking-tight">
          Agent Portal Login
        </h2>
        <p className="mt-1 text-center text-xs font-medium text-gray-500">
          Sign in to manage your property listings and site inspection appointments
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
        <div className="bg-white py-8 px-6 shadow-sm border border-gray-200 rounded-2xl sm:px-10">
          
          <form action="/api/auth/login" method="POST" className="space-y-5">
            
   
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-gray-700 mb-1.5">
                Agent Email Address
              </label>
              <input
              
                type="email"
                placeholder="...."
                className="w-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-900 p-3.5 rounded-xl focus:bg-white focus:outline-none focus:border-blue-600 transition"
              />
            </div>


            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="password" className="block text-xs font-bold text-gray-700">
                  Password
                </label>
                <Link href="#" className="text-[11px] font-bold text-blue-600 hover:text-blue-700">
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                required
                placeholder="...."
                className="w-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-900 p-3.5 rounded-xl focus:bg-white focus:outline-none focus:border-blue-600 transition"
              />
            </div>




            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3.5 px-4 rounded-xl shadow-md shadow-blue-600/20 transition cursor-pointer"
              >
                Sign In as Agent
              </button>
            </div>

          </form>


          <div className="mt-6 border-t border-gray-100 pt-6 text-center">
            <p className="text-xs text-gray-500">
              Not registered as an agent yet?{' '}
              <Link href="/agent/register" className="font-bold text-blue-600 hover:text-blue-700">
                Register as Agent
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
    <Footer />
    </div>

  );
}