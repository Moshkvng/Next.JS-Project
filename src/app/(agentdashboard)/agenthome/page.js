  "use client";

import { useState, useEffect } from 'react';
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
  FiEye,
  FiSearch,
  FiBell,
  FiArrowUpRight,
  FiClock,
  FiCheckCircle,
  FiMapPin,
  FiUserCheck,
  FiImage,
  FiXCircle,
  FiCheck,
  FiUser
} from 'react-icons/fi';

export default function AgentDashboard() {

const [agentName, setAgentName] = useState('Agent');

  useEffect(() => {
    const savedName = localStorage.getItem('agentName');
    if (savedName) {
      setAgentName(savedName);
    }
  }, []);



  return (
    <div className="flex min-h-screen bg-slate-50 text-gray-900 font-sans">
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
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 text-white shadow-md shadow-blue-600/20 "
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


      <main className="flex-1 p-8 ml-64 min-h-screen">

        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 bg-white p-4 px-6 rounded-2xl border border-gray-200/80 shadow-sm">
<div>
            <h1 className="text-xl font-bold text-gray-900">Agent Section</h1>
            <p className="text-xs text-gray-500 mt-1">
              Yo Welcome <span className="font-semibold text-gray-800">{agentName}!</span> (<span className="text-blue-600 font-semibold">Boing Real Estate</span>)
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className=" sm:block">
              <input
                type="text"
                placeholder="search..."
                className="bg-gray-50 border border-gray-200 text-xs text-gray-800 pl-8 pr-4 py-2 rounded-xl focus:outline-none focus:border-blue-500  w-56"
              />
            </div>


            <Link href="/" className="flex items-center gap-3 pl-3 border-l border-gray-200">
              <div className="w-10 h-10 rounded-xl bg-[#155dfc] text-white font-bold text-xs flex items-center justify-center shadow-sm">
                LL
              </div>
            </Link>
          </div>
        </header>


        <div className="mb-8 p-6 bg-[#155dfc] rounded-2xl text-white shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase  bg-[#6e66f9] px-3 py-1 rounded-full text-white">
              Boing Agent Portal
            </span>
            <h2 className="text-2xl font-black mt-2">Manage Listings & Site Inspections</h2>
          </div>
          <Link
            href="/Createproperty"
            className="bg-white text-blue-600 px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-blue-50  shadow md"
          >
            + Create Property
          </Link>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm  overflow-hidden  hover:border-blue-500 ">
            <div className="flex items-center justify-between mb-3">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-lg font-bold">
                <FiHome />
              </div>
              <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md flex items-center gap-1">
                <FiArrowUpRight /> Active
              </span>
            </div>
            <p className="text-xs font-semibold text-gray-400 uppercase ">Total Properties</p>
            <h3 className="text-3xl font-black text-gray-900 mt-1">18</h3>
          </div>


          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm  overflow-hidden  ">
            <div className="flex items-center justify-between mb-3">
              <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-lg font-bold">
                <FiClock />
              </div>
              <span className="text-[11px] font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md">
                Action Required
              </span>
            </div>
            <p className="text-xs font-semibold text-gray-400 uppercase ">User</p>
            <h3 className="text-3xl font-black text-gray-900 mt-1">3</h3>
          </div>


          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm  overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg font-bold">
                <FiUserCheck />
              </div>
              <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md flex items-center gap-1">
                <FiCheckCircle /> Confirmed
              </span>
            </div>
            <p className="text-xs font-semibold text-gray-400 uppercase ">Confirmed Appointments</p>
            <h3 className="text-3xl font-black text-gray-900 mt-1">5</h3>
          </div>
        </div>


        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-900">My Listed Properties</h3>
              <p className="text-xs text-gray-500 mt-0.5">Properties registered under <span>Boing account</span></p>
            </div>
            <Link
              href="/viewproperties"
              className="text-xs bg-gray-100 text-gray-700  px-4 py-2 rounded-xl font-semibold "
            >
              View All Properties
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-70 border-b border-gray-100 text-[11px] text-gray-400 uppercase font-bold ">
                  <th className="py-3.5 px-6">Property Name</th>
                  <th className="py-3.5 px-4">Category</th>
                  <th className="py-3.5 px-4">Type</th>
                  <th className="py-3.5 px-4">Location</th>
                  <th className="py-3.5 px-4">Price</th>
                  <th className="py-3.5 px-4">Verification</th>
                  <th className="py-3.5 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm ">
                <tr className="hover:bg-gray-60 ">
                  <td className="py-4 px-6 font-semibold text-gray-800 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold ">
                      KH
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Kubwa House</p>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-xs font-medium text-gray-600">
                    <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md">FLAT</span>
                  </td>
                  <td className="py-4 px-4 text-xs font-medium text-gray-600">RENT</td>
                  <td className="py-4 px-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1"><FiMapPin className="text-gray-400" /> Lugbe</span>
                  </td>
                  <td className="py-4 px-4 font-bold text-gray-900">₦14,405,000</td>
                  <td className="py-4 px-4">
                    <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-md">
                      VERIFIED
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right space-x-2">

                    <Link
                      href="/viewproperties"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg "
                    >
                      <FiEye /> View
                    </Link>
                  </td>
                </tr>


              </tbody>
            </table>
          </div>
        </div>


        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900">Recent Inspection Requests</h3>
              <p className="text-xs text-slate-500 mt-0.5">Manage incoming site inspection bookings from potential clients</p>
            </div>
            <Link
              href="appointment"
              className="text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline"
            >
              View All Appointments →
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}