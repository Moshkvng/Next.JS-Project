'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  FiGrid, 
  FiHome, 
  FiCalendar, 
  FiPlusCircle, 
  FiSettings, 
  FiHelpCircle, 
  FiLogOut, 
  FiUser, 
  FiClock, 
  FiXCircle, 
  FiCheck
} from 'react-icons/fi';

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAppointments = async () => {
    setLoading(true);
    const token = localStorage.getItem("merchant_token") || localStorage.getItem("agent_token") || localStorage.getItem("token");
    const agentId = localStorage.getItem("merchantId") || localStorage.getItem("agentId") || localStorage.getItem("userId") || "";

    try {

      const url = agentId 
        ? `http://property.reworkstaging.name.ng/v1/appointments?agent=${agentId}&page=0&limit=10`
        : `http://property.reworkstaging.name.ng/v1/appointments?page=0&limit=10`;

      const resp = await fetch(url, {
        headers: { authorization: `Bearer ${token}` }
      });
      const data = await resp.json();
      const list = Array.isArray(data.data) ? data.data : (Array.isArray(data) ? data : []);
      setAppointments(list);
    } catch (err) {
      console.error("Error fetching appointments:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);


  const handleConfirm = async (item) => {
    const appointmentId = item.id || item._id;
    const token = localStorage.getItem("merchant_token") || localStorage.getItem("agent_token") || localStorage.getItem("token");

    try {
      await fetch(`http://property.reworkstaging.name.ng/v1/appointments/${appointmentId}/confirm-meeting`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`
        }
      });


      const updateResp = await fetch(`http://property.reworkstaging.name.ng/v1/appointments/${appointmentId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          property_id: item.property_id || item.property?.id || "",
          user_id: item.user_id || item.user?.id || "",
          date: item.date,
          msg: item.msg,
          time: item.time,
          status: 'CONFIRMED',
          is_confirmed: true
        })
      });

      if (updateResp.ok) {
        setAppointments(prev => prev.map(appt => {
          if ((appt.id || appt._id) === appointmentId) {
            return { ...appt, status: 'CONFIRMED', is_confirmed: true };
          }
          return appt;
        }));
      } else {
        alert("Failed to persist confirmation on server.");
      }
    } catch (err) {
      console.error("Error confirming appointment:", err);
    }
  };


  const handleDelete = async (appointmentId) => {
    const token = localStorage.getItem("merchant_token") || localStorage.getItem("agent_token") || localStorage.getItem("token");

    try {
      const resp = await fetch(`http://property.reworkstaging.name.ng/v1/appointments/${appointmentId}`, {
        method: 'DELETE',
        headers: { authorization: `Bearer ${token}` }
      });

      if (resp.ok) {
        setAppointments(prev => prev.filter(item => (item.id || item._id) !== appointmentId));
      } else {
        alert("Failed to delete appointment");
      }
    } catch (err) {
      console.error("Error deleting appointment:", err);
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900 font-sans">
       <aside className="w-64 bg-white border-r border-gray-200/80 flex flex-col justify-between min-h-screen fixed z-20 shadow-sm">
        <div>
          <div className="p-6 border-b border-gray-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-black text-white shadow-md shadow-blue-500/20 text-lg ">
              B
            </div>
            <div>
              <h2 className="text-lg font-black text-gray-900">Boing</h2>
              <p className="text-[10px] text-blue-600 uppercase font-bold mt-1">Agent Portal</p>
            </div>
          </div>

          <nav className="p-4 space-y-2">
            <Link href="/agenthome" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
              <FiGrid className="text-lg" />
              <span>Dashboard</span>
            </Link>
            <Link href="/viewproperties" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
              <FiHome className="text-lg" />
              <span>My Properties</span>
            </Link>
            <Link href="/Createproperty" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
              <FiPlusCircle className="text-lg" />
              <span>Create Property</span>
            </Link>
            <Link href="/appointment" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 text-white shadow-md shadow-blue-600/20">
              <FiCalendar className="text-lg" />
              <span>Appointments</span>
            </Link>
            <Link href="/" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
              <FiSettings className="text-lg" />
              <span>Account Settings</span>
            </Link>
          </nav>
        </div>

        <div className="p-4 border-t border-gray-100 space-y-1 text-sm font-medium text-gray-600">
          <Link href="/" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-50 hover:text-gray-900">
            <FiHelpCircle className="text-sm" />
            <span>Support & Help</span>
          </Link>
          <Link href="/" className="flex items-center gap-3 px-4 py-2 rounded-lg text-rose-600 hover:bg-rose-50">
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
              <div className="w-10 h-10 rounded-xl bg-[#155dfc] text-white font-bold text-xs flex items-center justify-center shadow">
                LL
              </div>
            </Link>
          </div>
        </header>

        <div className="space-y-4">
          {loading ? (
            <p className="text-gray-500 font-semibold p-6 bg-white rounded-2xl border border-gray-200">Loading appointments...</p>
          ) : appointments.length > 0 ? (
            appointments.map((item) => {
              const appointmentId = item.id || item._id;
              const isConfirmed = item.status === 'CONFIRMED' || item.is_confirmed === true;

              const propertyText = typeof item.property === 'object' 
                ? (item.property?.name || item.property?.id || item.property?._id) 
                : (item.property_id || item.property || "N/A");

              const clientText = typeof item.user === 'object' 
                ? (item.user?.full_name || item.user?.email || item.user?.first_name || item.user?.id) 
                : (item.user_id || item.user || "N/A");

              return (
                <div key={appointmentId} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-amber-500/40 transition">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5">
                      <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-md flex items-center gap-1 ${
                        isConfirmed ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        <FiClock /> {isConfirmed ? 'CONFIRMED' : 'UNCOMPLETED'}
                      </span>
                      <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
                        <FiCalendar className="text-gray-400" /> {typeof item.date === 'string' ? item.date.split('T')[0] : item.date} ({item.time?.from || "10 AM"} - {item.time?.to || "11 AM"})
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-gray-900">
                      {item.msg || `Inspection for Property: ${propertyText}`}
                    </h3>
                    <p className="text-xs text-gray-600 flex items-center gap-3">
                      <span className="flex items-center gap-1"><FiUser className="text-slate-400" /> Client: {clientText}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    {!isConfirmed && (
                      <button 
                        type="button" 
                        onClick={() => handleConfirm(item)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#009966] text-white px-4 py-2.5 rounded-xl shadow-sm cursor-pointer hover:bg-emerald-700 transition"
                      >
                        <FiCheck /> Confirm
                      </button>
                    )}

                    <button 
                      type="button" 
                      onClick={() => handleDelete(appointmentId)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold bg-rose-600 text-white hover:bg-rose-700 px-4 py-2.5 rounded-xl shadow-sm cursor-pointer transition"
                    >
                      <FiXCircle /> Cancel
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-12 text-center">
              <p className="text-gray-600 font-bold text-base">No inspection appointments booked yet.</p>
              <p className="text-gray-400 text-xs mt-1">When clients book inspections from the property listings, they will appear right here.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}