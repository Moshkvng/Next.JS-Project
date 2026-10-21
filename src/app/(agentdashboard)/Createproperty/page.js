import React from 'react';
import Link from 'next/link';
import {
  FiGrid,
  FiHome,
  FiCalendar,
  FiPlusCircle,
  FiSettings,
  FiHelpCircle,
  FiLogOut,
  FiArrowLeft,
  FiDollarSign,
  FiMapPin,
  FiTag,
  FiLayers,
  FiCheckCircle,
  FiImage
} from 'react-icons/fi';

export default function PostPropertyPage() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans">

      <aside className="w-64 bg-white border-r border-gray-200/80 flex flex-col justify-between min-h-screen fixed z-20 shadow-sm">
        <div>
          <div className="p-6 border-b border-gray-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-black text-white shadow-md shadow-blue-500/20 text-lg ">
              B
            </div>
            <div>
              <h2 className="text-lg font-black text-gray-900">
                Boing
              </h2>
              <p className="text-[10px] text-blue-600 uppercase  font-bold mt-1">Agent Portal</p>
            </div>
          </div>

          <nav className="p-4 space-y-2">

            <Link
              href="/agenthome"
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 "
            >
              <FiGrid className="text-lg " />
              <span>Dashboard</span>
            </Link>


            <Link
              href="/viewproperties"
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 "

            >
              <FiHome className="text-lg " />
              <span>My Properties</span>
            </Link>
            <Link
              href="/Createproperty"
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 text-white shadow-md shadow-blue-600/20 "
            >
              <FiPlusCircle className="text-lg " />
              <span>Create Property</span>
            </Link>

            <Link
              href="/appointment"
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 "
            >
              <FiCalendar className="text-lg " />
              <span>Appointments</span>
            </Link>

            <Link
              href="/"
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 "
            >
              <FiSettings className="text-lg " />
              <span>Account Settings</span>
            </Link>
          </nav>
        </div>


        <div className="p-4 border-t border-gray-100 space-y-1 text-sm font-medium text-gray-600">
          <Link href="/" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-50 hover:text-gray-900 ">
            <FiHelpCircle className="text-sm" />
            <span>Support & Help</span>
          </Link>
          <Link href="/" className="flex items-center gap-3 px-4 py-2 rounded-lg text-rose-600 hover:bg-rose-50 ">
            <FiLogOut className="text-sm" />
            <span>Log out</span>
          </Link>
        </div>
      </aside>


      <main className="flex-1 p-8 ml-64 min-h-screen">
        <div className="max-w-3xl mx-auto space-y-6">

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link
                href="/agenthome"
                className="p-2.5 bg-white border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-100  shadow-sm"
              >
                <FiArrowLeft className="text-lg" />
              </Link>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Post New Property</h1>
                <p className="text-xs text-gray-500 mt-0.5">Fill out listing details to publish to Boing home</p>
              </div>
            </div>
          </div>


          <form className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-6">

            <div>
              <h2 className="text-xs font-bold uppercase  text-blue-600 mb-4 flex items-center gap-2">
                <FiTag /> Fill everything
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Property Title </label>
                  <input
                    type="text"
                    placeholder="..."
                    className="w-full bg-gray-50 border border-gray-200 text-xs text-gray-800 p-3 rounded-xl focus:outline-none focus:border-blue-500 "
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Category </label>
                    <select className="w-full bg-gray-50 border border-gray-200 text-xs text-gray-800 p-3 rounded-xl focus:outline-none focus:border-blue-500 ">
                      <option value="/">Select a Category</option>
                      <option value="FLAT">FLAT</option>
                      <option value="APPARTMENT">APPARTMENT</option>
                      <option value="DUPLEX">DUPLEX</option>
                      <option value="LAND">LAND</option>
                      <option value="WAREHOUSE">WAREHOUSE</option>
                      <option value="SHOP">SHOP</option>
                    </select>
                  </div>


                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Listing Type </label>
                    <select className="w-full bg-gray-50 border border-gray-200 text-xs text-gray-800 p-3 rounded-xl focus:outline-none focus:border-blue-500 ">
                      <option value="/">Select a type</option>
                      <option value="RENT">RENT</option>
                      <option value="SALES">SALES</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            <div>
              <h2 className="text-xs font-bold uppercase  text-blue-600 mb-4 flex items-center gap-2">
                <FiDollarSign /> Pricing & Location
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Price (₦) </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400">₦</span>
                    <input
                      type="number"
                      placeholder="...."
                      className="w-full bg-gray-50 border border-gray-200 text-xs text-gray-800 pl-8 p-3 rounded-xl focus:outline-none focus:border-blue-500 "
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Location / City *</label>
                  <div className="relative">
                    <FiMapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-gray-400" />
                    <input
                      type="text"
                      placeholder="...."
                      className="w-full bg-gray-50 border border-gray-200 text-xs text-gray-800 pl-8 p-3 rounded-xl focus:outline-none focus:border-blue-500 "
                    />
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />


            <div>
              <h2 className="text-xs font-bold uppercase  text-blue-600 mb-4 flex items-center gap-2">
                <FiLayers /> Features
              </h2>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Bedrooms</label>
                  <input
                    type="number"
                    placeholder="...."
                    className="w-full bg-gray-50 border border-gray-200 text-xs text-gray-800 p-3 rounded-xl focus:outline-none focus:border-blue-500 "
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Bathrooms</label>
                  <input
                    type="number"
                    placeholder="...."
                    className="w-full bg-gray-50 border border-gray-200 text-xs text-gray-800 p-3 rounded-xl focus:outline-none focus:border-blue-500 "
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Toilets</label>
                  <input
                    type="number"
                    placeholder="...."
                    className="w-full bg-gray-50 border border-gray-200 text-xs text-gray-800 p-3 rounded-xl focus:outline-none focus:border-blue-500 "
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Description</label>
                <textarea
                  rows={4}
                  placeholder="Describe..."
                  className="w-full bg-gray-50 border border-gray-200 text-xs text-gray-800 p-3 rounded-xl focus:outline-none focus:border-blue-500 "
                ></textarea>
              </div>
            </div>

            <hr className="border-gray-100" />


            <div>
              <h2 className="text-xs font-bold uppercase  text-blue-600 mb-1 flex items-center gap-2">
                <FiImage /> Photo  (max 4)
              </h2>

              <div className="space-y-3">
                <input
                  type="url"
                  placeholder="URL1...."
                  className="w-full bg-gray-50 border border-gray-200 text-xs text-gray-800 p-3 rounded-xl focus:outline-none focus:border-blue-500 "
                />
                <input
                  type="url"
                  placeholder="URL2..."
                  className="w-full bg-slate-50 border border-slate-200 text-xs text-slate-800 p-3 rounded-xl focus:outline-none focus:border-blue-500 "
                />
                <input
                  type="url"
                  placeholder="URL3..."
                  className="w-full bg-gray-50 border border-gray-200 text-xs text-gray-800 p-3 rounded-xl focus:outline-none focus:border-blue-500 "
                />
                <input
                  type="url"
                  placeholder="URL4...."
                  className="w-full bg-gray-50 border border-gray-200 text-xs text-gray-800 p-3 rounded-xl focus:outline-none focus:border-blue-500 "
                />
              </div>
            </div>


            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-6 py-3 rounded-xl shadow-md shadow-blue-600/20  cursor-pointer"
              >
                <FiCheckCircle className="text-sm" />
                <span>Publish Listing</span>
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}