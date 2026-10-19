import React from 'react';
import Link from 'next/link';
import { 
  FiCompass, 
  FiHome, 
  FiCalendar, 
  FiHeart, 
  FiSettings, 
  FiHelpCircle, 
  FiLogOut, 
  FiSearch, 
  FiBell, 
  FiMapPin, 
  FiCheckCircle, 
  FiClock, 
  FiXCircle, 
  FiCheck,
  FiPhone,
  FiUser
} from 'react-icons/fi';

export default function UserAppointmentsPage() {
  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* USER SIDEBAR NAVIGATION */}
      <aside className="w-64 bg-white border-r border-slate-200/80 flex flex-col justify-between min-h-screen fixed z-20 shadow-sm">
        <div>
          {/* Brand Logo - Boing */}
          <div className="p-6 border-b border-slate-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-black text-white shadow-md shadow-blue-500/20 text-lg tracking-wider">
              B
            </div>
            <div>
              <h2 className="text-lg font-black text-slate-900 tracking-tight leading-none">
                Boing
              </h2>
              <p className="text-[10px] text-blue-600 uppercase tracking-widest font-bold mt-1">Client Portal</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1.5">
            <Link 
              href="/client/explore" 
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition"
            >
              <FiCompass className="text-lg shrink-0" />
              <span>Explore Properties</span>
            </Link>

            <Link 
              href="/client/saved" 
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition"
            >
              <FiHeart className="text-lg shrink-0" />
              <span>Saved Properties</span>
            </Link>

            <Link 
              href="/client/appointments" 
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 text-white shadow-md shadow-blue-600/20 transition"
            >
              <FiCalendar className="text-lg shrink-0" />
              <span>My Inspections</span>
            </Link>

            <Link 
              href="/client/settings" 
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition"
            >
              <FiSettings className="text-lg shrink-0" />
              <span>Account Settings</span>
            </Link>
          </nav>
        </div>

        {/* Support & Logout */}
        <div className="p-4 border-t border-slate-100 space-y-1 text-sm font-medium text-slate-600">
          <Link href="/help" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-50 hover:text-slate-900 transition">
            <FiHelpCircle className="text-base" />
            <span>Support & Help</span>
          </Link>
          <Link href="/login" className="flex items-center gap-3 px-4 py-2 rounded-lg text-rose-600 hover:bg-rose-50 transition">
            <FiLogOut className="text-base" />
            <span>Log out</span>
          </Link>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-8 ml-64 min-h-screen space-y-6">
        
        {/* HEADER BAR */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">My Inspection Bookings</h1>
            <p className="text-xs font-medium text-slate-500 mt-1">
              Track your scheduled property viewings and agent approvals
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2.5 bg-white border border-slate-200/80 rounded-xl text-slate-600 hover:bg-slate-50 shadow-sm transition relative cursor-pointer">
              <FiBell className="text-base" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            </button>

            <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-black text-sm flex items-center justify-center shadow-md shadow-blue-500/20">
                BW
              </div>
              <div className="hidden lg:block text-left">
                <p className="text-xs font-bold text-slate-900">Bruce Wayne</p>
                <p className="text-[10px] text-slate-400 font-medium">bruce@wayne.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* METRICS STAT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-[11px] font-bold text-amber-600 uppercase tracking-wider">Pending Approval</p>
              <p className="text-2xl font-black text-amber-600 mt-1">1</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl font-bold">
              <FiClock />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">Confirmed Visits</p>
              <p className="text-2xl font-black text-emerald-600 mt-1">2</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl font-bold">
              <FiCheckCircle />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">Completed Tours</p>
              <p className="text-2xl font-black text-blue-600 mt-1">4</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl font-bold">
              <FiCheck />
            </div>
          </div>
        </div>

        {/* BOOKED INSPECTIONS LIST */}
        <div className="space-y-4">
          
          {/* INSPECTION ITEM 1 - PENDING */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-blue-300 transition">
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="text-[10px] font-extrabold bg-amber-100 text-amber-800 px-2.5 py-1 rounded-md flex items-center gap-1">
                  <FiClock /> PENDING AGENT APPROVAL
                </span>
                <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                  <FiCalendar className="text-slate-400" /> Oct 16, 2026 (10:00 AM - 12:00 PM)
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900">Kubwa House (Lugbe, Abuja)</h3>
              <p className="text-xs text-slate-600 flex items-center gap-3 flex-wrap">
                <span className="flex items-center gap-1"><FiUser className="text-slate-400" /> Agent: Boing Luxury Homes</span>
                <span>•</span>
                <span className="flex items-center gap-1"><FiPhone className="text-slate-400" /> +234 810 111 2233</span>
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button 
                type="button" 
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-rose-50 text-rose-600 hover:bg-rose-100 px-4 py-2.5 rounded-xl transition cursor-pointer"
              >
                <FiXCircle /> Cancel Booking
              </button>
            </div>
          </div>

          {/* INSPECTION ITEM 2 - CONFIRMED */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-emerald-300 transition">
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="text-[10px] font-extrabold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-md flex items-center gap-1">
                  <FiCheckCircle /> CONFIRMED BY AGENT
                </span>
                <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                  <FiCalendar className="text-slate-400" /> Oct 18, 2026 (02:00 PM - 04:00 PM)
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900">Maitama Duplex (Maitama, Abuja)</h3>
              <p className="text-xs text-slate-600 flex items-center gap-3 flex-wrap">
                <span className="flex items-center gap-1"><FiUser className="text-slate-400" /> Agent: Apex Properties</span>
                <span>•</span>
                <span className="flex items-center gap-1"><FiPhone className="text-slate-400" /> +234 802 444 5566</span>
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3.5 py-2 rounded-xl">
                Ready for Visit
              </span>
              <button 
                type="button" 
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-rose-50 text-rose-600 hover:bg-rose-100 px-3.5 py-2.5 rounded-xl transition cursor-pointer"
              >
                <FiXCircle /> Cancel
              </button>
            </div>
          </div>

          {/* INSPECTION ITEM 3 - COMPLETED */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 opacity-75">
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="text-[10px] font-extrabold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md flex items-center gap-1">
                  <FiCheckCircle /> TOUR COMPLETED
                </span>
                <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                  <FiCalendar className="text-slate-400" /> Oct 12, 2026 (11:00 AM)
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-700">2 Bedroom Flat (Jahi, Abuja)</h3>
              <p className="text-xs text-slate-500 flex items-center gap-3 flex-wrap">
                <span className="flex items-center gap-1"><FiUser className="text-slate-400" /> Agent: Boing Estate Agent</span>
              </p>
            </div>

            <div>
              <span className="text-xs font-bold text-slate-500 bg-slate-100 px-4 py-2 rounded-xl">
                Inspection Closed
              </span>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}