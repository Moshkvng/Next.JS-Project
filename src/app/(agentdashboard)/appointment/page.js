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
  FiSearch, 
  FiBell, 
  FiFilter, 
  FiMapPin, 
  FiUser, 
  FiCheckCircle, 
  FiClock, 
  FiXCircle, 
  FiCheck
} from 'react-icons/fi';

export default function AppointmentsPage() {
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
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 text-white shadow-md shadow-blue-600/20 "
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

        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 bg-white p-4 px-6 rounded-2xl border border-gray-200 shadow-sm">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Inspection Appointments</h1>
            <p className="text-xs text-gray-500 mt-0.5">Manage client site visits and inspection bookings</p>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/agenthome" className="flex items-center gap-3 pl-3 border-l border-gray-200">
              <div className="w-10 h-10 rounded-xl bg-[#155dfc]  text-white font-bold text-xs flex items-center justify-center shadow">
                LL
              </div>
            </Link>
          </div>
        </header>




  
        <div className="space-y-4">
          

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-amber-500/40 ">
            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <span className="text-[10px] font-extrabold bg-[#fef3c6] text-amber-800 px-2.5 py-1 rounded-md flex items-center gap-1">
                  <FiClock /> PENDING APPROVAL
                </span>
                <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
                  <FiCalendar className="text-gray-400" /> 16-10-2026 (10:00 AM - 12:00 PM)
                </span>
              </div>
              <h3 className="text-sm font-bold text-gray-900">Kubwa House (Lugbe, Abuja)</h3>
              <p className="text-xs text-gray-600 flex items-center gap-3">
                <span className="flex items-center gap-1"><FiUser className="text-slate-400" /> Client: Bruce Wayne</span>
                <span>•</span>
                <span>Email: bruce@wayne.com</span>
                <span>•</span>
                <span>Phone: +234 803 000 1122</span>
              </p>
            </div>

            <div className="flex items-center gap-2 ">
              <button 
                type="button" 
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#009966] text-white  px-4 py-2.5 rounded-xl shadow-sm "
              >
                <FiCheck /> Confirm
              </button>
              <button 
                type="button" 
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 px-4 py-2.5 rounded-xl shadow-sm "
              >
                <FiCheckCircle /> Complete
              </button>
              <button 
                type="button" 
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-rose-50 text-rose-600 hover:bg-rose-100 px-3.5 py-2.5 rounded-xl "
              >
                <FiXCircle /> Cancel
              </button>
            </div>
          </div>


          {/* <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-emerald-500/40 transition">
            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <span className="text-[10px] font-extrabold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-md flex items-center gap-1">
                  <FiCheckCircle /> CONFIRMED
                </span>
                <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                  <FiCalendar className="text-slate-400" /> 18-10-2026 (02:00 PM - 04:00 PM)
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900">Maitama Duplex (Maitama, Abuja)</h3>
              <p className="text-xs text-slate-600 flex items-center gap-3">
                <span className="flex items-center gap-1"><FiUser className="text-slate-400" /> Client: Clark Kent</span>
                <span>•</span>
                <span>Email: clark@dailyplanet.com</span>
                <span>•</span>
                <span>Phone: +234 802 555 4433</span>
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button 
                type="button" 
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 px-4 py-2.5 rounded-xl shadow-sm transition"
              >
                <FiCheckCircle /> Mark Complete
              </button>
              <button 
                type="button" 
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-rose-50 text-rose-600 hover:bg-rose-100 px-3.5 py-2.5 rounded-xl transition"
              >
                <FiXCircle /> Cancel
              </button>
            </div>
          </div> */}


          {/* <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 opacity-80">
            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <span className="text-[10px] font-extrabold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md flex items-center gap-1">
                  <FiCheckCircle /> COMPLETED
                </span>
                <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                  <FiCalendar className="text-slate-400" /> 12-10-2026 (11:00 AM)
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-700">Jahi 2 Bedroom Flat</h3>
              <p className="text-xs text-slate-500 flex items-center gap-3">
                <span className="flex items-center gap-1"><FiUser className="text-slate-400" /> Client: Diana Prince</span>
                <span>•</span>
                <span>Email: diana@themyscira.gov</span>
              </p>
            </div>

            <div>
              <span className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1.5 rounded-xl">
                Inspection Closed
              </span>
            </div>
          </div> */}

        </div>
      </main>
    </div>
  );
}