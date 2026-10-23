"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import Nav from '../components/Nav';

export default function SimpleAppointmentPage() {
  const router = useRouter();
  const searchParams = useSearchParams();


  const propertyId = searchParams.get("propertyId") || "";
  const propertyNameQuery = searchParams.get("propertyName") || "";

  const [property, setProperty] = useState({
    name: propertyNameQuery || "Kubwa Luxury House",
    address: "No 5, Kaitam Road, Lugbe Airport Road, Abuja",
    price: "14,405,000",
    category: "Residential Flat",
    payment_plan: "Per Annum",
    agent: "Boing Real Estate",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
  });

  const [date, setDate] = useState("");
  const [fromTime, setFromTime] = useState("09 AM");
  const [toTime, setToTime] = useState("11 AM");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (!propertyId) return;

    const fetchPropertyAndAgent = async () => {
      const token = localStorage.getItem("token");
      try {

        const propResp = await fetch(`http://property.reworkstaging.name.ng/v1/properties/${propertyId}`, {
          headers: { authorization: `Bearer ${token}` }
        });
        const propDataJson = await propResp.json();
        const propData = propDataJson.data || propDataJson;

        let agentName = "Boing Real Estate";


        const agentId = propData.agent || propData.agent_id;
        if (agentId) {
          const agentResp = await fetch("http://property.reworkstaging.name.ng/v1/merchants/agents?offset=0&limit=100", {
            headers: { authorization: `Bearer ${token}` }
          });
          const agentDataJson = await agentResp.json();
          const agents = Array.isArray(agentDataJson.data) ? agentDataJson.data : [];
          
          const foundAgent = agents.find(ag => ag.id === agentId || ag._id === agentId);
          if (foundAgent) {
            agentName = foundAgent.name || foundAgent.full_name || `${foundAgent.first_name || ''} ${foundAgent.last_name || ''}`.trim() || "Boing Real Estate";
          }
        }

        if (propData && (propData.id || propData._id)) {
          setProperty({
            name: propData.name || propData.title || propertyNameQuery,
            address: `${propData.city || 'Abuja'}, ${propData.state || 'FCT'}`,
            price: Number(propData.price || 0).toLocaleString(),
            category: propData.category || "Residential Flat",
            payment_plan: propData.payment_plan === "PER_ANNUM" ? "Per Annum" : propData.payment_plan || "Per Annum",
            agent: agentName,
            image: propData.image || (propData.images && propData.images[0]) || property.image
          });
        }
      } catch (err) {
        console.error("Error fetching property or agent:", err);
      }
    };

    fetchPropertyAndAgent();
  }, [propertyId, propertyNameQuery]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("user_id") || "123";

    if (!propertyId) {
      alert("No property selected for inspection.");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        property_id: propertyId,
        user_id: userId,
        date: date,
        msg: msg || `I would like to book an inspection for ${property.name}.`,
        time: {
          from: fromTime,
          to: toTime
        }
      };

      const resp = await fetch("http://property.reworkstaging.name.ng/v1/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      const data = await resp.json();

      if (resp.ok || data.code === 200 || data.type === "SUCCESS") {
        alert("Appointment booked successfully!");
        router.push("/");
      } else {
        alert(data.msg || "Failed to book appointment.");
      }
    } catch (err) {
      console.error("Error submitting appointment:", err);
      alert("An error occurred while booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 text-gray-950 p-6 md:p-12 min-h-screen">
      <Nav/>
      <div className="max-w-6xl mx-auto space-y-8">
        
      
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-6">
          <div>
            <h1 className="text-3xl font-black text-gray-900">Book Property Inspection</h1>
            <p className="text-sm text-gray-500 mt-1">Select your preferred date and time slot to book an appointment</p>
          </div>
          <Link 
            href="/" 
            className="text-xs font-bold text-gray-600 bg-white border border-gray-200 px-4 py-2.5 rounded-xl hover:bg-gray-100 transition"
          >
            ← Back to Properties
          </Link>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-gray-400">Selected Property</h2>
            

            <div className="w-full h-48 rounded-xl overflow-hidden bg-gray-100 border border-gray-100">
              <img 
                src={property.image} 
                alt={property.name} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-gray-900">{property.name}</h3>
              <p className="text-xs text-gray-500">{property.address}</p>
              <p className="text-lg font-black text-blue-600 pt-2">₦{property.price}</p>
            </div>

            <div className="pt-4 border-t border-gray-100 text-xs text-gray-600 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Type:</span>
                <span className="font-semibold">{property.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Payment:</span>
                <span className="font-semibold">{property.payment_plan}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Agent:</span>
                <span className="font-semibold">{property.agent}</span>
              </div>
            </div>
          </div>


          <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                

                <div>
                  <label htmlFor="date" className="block text-xs font-bold text-gray-700 mb-2">
                    Inspection Date
                  </label>
                  <input 
                    type="date" 
                    id="date" 
                    name="date" 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
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
                    value={fromTime}
                    onChange={(e) => setFromTime(e.target.value)}
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
                    value={toTime}
                    onChange={(e) => setToTime(e.target.value)}
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


              <div>
                <label htmlFor="msg" className="block text-xs font-bold text-gray-700 mb-2">
                  Message for Agent (Optional)
                </label>
                <textarea 
                  id="msg" 
                  name="msg" 
                  rows={4} 
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  placeholder="Tell the agent any specific requests for your site visit..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs font-medium text-gray-800 focus:bg-white focus:outline-none focus:border-blue-600 transition resize-none"
                ></textarea>
              </div>


              <div className="pt-2 flex justify-end">
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-8 py-3.5 rounded-xl shadow-md transition cursor-pointer disabled:opacity-50"
                >
                  {loading ? "Submitting Request..." : "Submit Inspection Request"}
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
  );  
}