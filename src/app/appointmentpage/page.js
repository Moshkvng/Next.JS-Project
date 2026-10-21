import React from 'react';
import Link from 'next/link';

export default function SimpleAppointmentPage() {
  return (
    <div className=" bg-gray-50 text-gray-900  p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-8">
        

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-6">
          <div>
            <h1 className="text-3xl font-black  text-gray-900">Book Property Inspection</h1>
            <p className="text-sm text-gray-500 mt-1">Select your preferred date and time slot to book an appointment</p>
          </div>
          <Link 
            href="/" 
            className="text-xs font-bold text-gray-600 bg-white border border-gray-200 px-4 py-2.5 rounded-xl"
          >
            ← Back to Properties
          </Link>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-gray-400">Selected Property</h2>
            
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-gray-900">Kubwa Luxury House</h3>
              <p className="text-xs text-gray-500">No 5, Kaitam Road, Lugbe Airport Road, Abuja</p>
              <p className="text-lg font-black text-blue-600 pt-2">₦14,405,000</p>
            </div>

            <div className="pt-4 border-t border-gray-100 text-xs text-gray-600 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Type:</span>
                <span className="font-semibold">Residential Flat</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Payment:</span>
                <span className="font-semibold">Per Annum</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Agent:</span>
                <span className="font-semibold">Boing Real Estate</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: SIMPLE WIDE FORM */}
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <form action="/api/appointments" method="POST" className="space-y-6">
              
              {/* DATE & TIME WINDOW GRID */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                <div>
                  <label htmlFor="date" className="block text-xs font-bold text-gray-700 mb-2">
                    Inspection Date
                  </label>
                  <input 
                    type="date" 
                    id="date" 
                    name="date" 
                    required 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs font-semibold text-gray-800 focus:bg-white focus:outline-none focus:border-blue-600 transition"
                  />
                </div>

                <div>
                  <label htmlFor="from_time" className="block text-xs font-bold text-gray-700 mb-2">
                    Start Time
                  </label>
                  <select 
                    id="from_time" 
                    name="from_time" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs font-semibold text-gray-800 focus:bg-white focus:outline-none focus:border-blue-600 transition"
                  >
                    <option value="09 AM">09:00 AM</option>
                    <option value="10 AM">10:00 AM</option>
                    <option value="11 AM">11:00 AM</option>
                    <option value="12 PM">12:00 PM</option>
                    <option value="02 PM">02:00 PM</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="to_time" className="block text-xs font-bold text-gray-700 mb-2">
                    End Time
                  </label>
                  <select 
                    id="to_time" 
                    name="to_time" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs font-semibold text-gray-800 focus:bg-white focus:outline-none focus:border-blue-600 transition"
                  >
                    <option value="11 AM">11:00 AM</option>
                    <option value="12 PM">12:00 PM</option>
                    <option value="01 PM">01:00 PM</option>
                    <option value="03 PM">03:00 PM</option>
                    <option value="05 PM">05:00 PM</option>
                  </select>
                </div>

              </div>

              {/* MESSAGE AREA */}
              <div>
                <label htmlFor="msg" className="block text-xs font-bold text-gray-700 mb-2">
                  Message for Agent (Optional)
                </label>
                <textarea 
                  id="msg" 
                  name="msg" 
                  rows={4} 
                  placeholder="Tell the agent any specific requests for your site visit..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs font-medium text-gray-800 focus:bg-white focus:outline-none focus:border-blue-600 transition resize-none"
                ></textarea>
              </div>

              {/* SUBMIT BUTTON */}
              <div className="pt-2 flex justify-end">
                <button 
                  type="submit" 
                  className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-8 py-3.5 rounded-xl shadow-md transition cursor-pointer"
                >
                  Submit Inspection Request
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}