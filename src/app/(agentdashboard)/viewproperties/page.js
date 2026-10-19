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
  FiMapPin,
  FiBriefcase,
  FiEdit,
  FiTrash2,
  FiArrowLeft
} from 'react-icons/fi';
import { IoBedOutline } from 'react-icons/io5';
import { PiBathtub, PiToilet } from 'react-icons/pi';
import { MdOutlineRealEstateAgent } from "react-icons/md";

export default function ViewPropertyPage() {
  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900 font-sans">
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
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 text-white shadow-md shadow-blue-600/20 "
            >
              <FiHome className="text-lg " />
              <span>My Properties</span>
            </Link>
            <Link
              href="/Createproperty"
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 "
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


      <main className=" flex-1 p-8 ml-64 min-h-screen">
        <div className=" space-y-6">

          <div className="flex items-center justify-between">
            <Link
              href="/agenthome"
              className="inline-flex items-center gap-2 text-xs font-bold text-gray-600 hover:text-blue-600 bg-white border border-gray-200 px-4 py-2 rounded-xl shadow-sm "
            >
              <FiArrowLeft className="text-sm" /> Back to Admindashboard
            </Link>
          </div>


          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col md:flex-row ">

            <div className="md:w-[240px] h-48 md:h-auto bg-gray-100  overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
                alt="Property"
                className="w-full h-full object-cover"
              />
            </div>


            <div className="p-5 md:p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-2xl font-black text-gray-900">₦10,000,000</span>
                    <span className="text-md font-bold text-gray-500">/yr</span>
                  </div>


                  <p className="text-[13px] font-bold text-rose-600 mt-0.5 uppercase ">
                    FLAT / APPARTMENT FOR RENT
                  </p>
                </div>


                <h2 className="text-lg font-black text-gray-900 mt-2">
                  2 Bedroom Flat
                </h2>

                <p className="text-sm text-gray-500 mt-1.5 ">
                  Brand new and tastefully finished in a serene location in Jahi. Features ensuite rooms, AC fitted kitchen, and caution deposit included.
                </p>


                <p className="text-xs font-semibold text-gray-600 mt-3 flex items-center gap-1">
                  <FiMapPin className="text-blue-600 text-sm" /> Jahi, Abuja
                </p>


                <div className="flex items-center gap-5 mt-3 pt-2.5 border-t border-gray-100 text-xs font-bold text-gray-700">
                  <span className="flex items-center gap-1">
                    <IoBedOutline className="text-sm text-gray-400" /> 2 beds
                  </span>
                  <span className="flex items-center gap-1">
                    <PiBathtub className="text-sm text-gray-400" /> 3 baths
                  </span>
                  <span className="flex items-center gap-1">
                    <PiToilet className="text-sm text-gray-400" /> 3 toilets
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-700">
                  <MdOutlineRealEstateAgent className="text-blue-600 text-sm" />
                  <span>Boing Real Estate</span>
                </div>



                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 text-xs font-bold bg-gray-100 text-gray-800 hover:bg-blue-50 hover:text-blue-600 px-3 py-1.5 rounded-lg "
                  >
                    <FiEdit /> Edit
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 text-xs font-bold bg-rose-50 text-rose-600 hover:bg-rose-100 px-3 py-1.5 rounded-lg "
                  >
                    <FiTrash2 /> Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}