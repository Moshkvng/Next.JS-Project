"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  FiGrid,
  FiHome,
  FiCalendar,
  FiPlusCircle,
  FiSettings,
  FiHelpCircle,
  FiLogOut,
  FiMapPin,
  FiEdit,
  FiTrash2,
  FiArrowLeft
} from 'react-icons/fi';
import { IoBedOutline } from 'react-icons/io5';
import { PiBathtub, PiToilet } from 'react-icons/pi';
import { MdOutlineRealEstateAgent } from "react-icons/md";

export default function ViewPropertyPage() {
  const router = useRouter();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editId, setEditId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [bedroom, setBedroom] = useState("");

  const fetchProperties = async () => {
    const token = localStorage.getItem("token");
    try {
      const agentResp = await fetch(
        "http://property.reworkstaging.name.ng/v1/merchants/agents?offset=0&limit=100",
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );

      const agentData = await agentResp.json();
      const agents = Array.isArray(agentData.data) ? agentData.data : [];

      const requests = agents.map((ag) =>
        fetch(
          `http://property.reworkstaging.name.ng/v1/properties?agent=${ag.id}&verified=true`,
          {
            headers: { authorization: `Bearer ${token}` },
          }
        ).then((resp) => resp.json())
      );

      const results = await Promise.all(requests);
      let allProperties = results.flatMap((result) =>
        Array.isArray(result.data) ? result.data : []
      );

      if (allProperties.length === 0) {
        const genResp = await fetch("http://property.reworkstaging.name.ng/v1/properties", {
          headers: { authorization: `Bearer ${token}` }
        });
        const genData = await genResp.json();
        allProperties = Array.isArray(genData.data) ? genData.data : Array.isArray(genData) ? genData : [];
      }
      

      setProperties(allProperties);
    } catch (err) {
      console.error("Error fetching properties:", err);
      setProperties([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);


  const deleteProperty = async (propId) => {
    let confirmDelete = confirm("Do you want to delete this property?");
    if (!confirmDelete) return;

    const token = localStorage.getItem("token");
    try {
      const resp = await fetch(`http://property.reworkstaging.name.ng/v1/properties/${propId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await resp.json();
      console.log("DELETE RESPONSE:", data);

      if (resp.ok) {
        alert("Property deleted successfully!");
        setProperties(properties.filter(p => (p.id || p._id) !== propId));
      } else {
        alert(data.msg || "Failed to delete property on server.");
      }
    } catch (err) {
      console.error("Error deleting property:", err);
      alert("Something went wrong while deleting.");
    }
  };


  const openEditModal = (item) => {
    setEditId(item.id || item._id);
    setName(item.name || item.title || "");
    setPrice(item.price || "");
    setCity(item.city || "");
    setAddress(item.address || "");
    setDescription(item.description || "");
    setCategory(item.category || "");
    setType(item.type || "");
    setBedroom(item.bedroom || "");
    setIsModalOpen(true);
  };


  const handleUpdate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const updatedData = {
        name,
        price: String(price),
        city,
        address,
        description,
        category,
        type,
        bedroom: Number(bedroom) || 0,
      };

      const resp = await fetch(`http://property.reworkstaging.name.ng/v1/properties/${editId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedData),
      });

      const data = await resp.json();

      if (resp.ok) {
        alert("Property updated successfully!");
        setIsModalOpen(false);
        fetchProperties(); 
      } else {
        alert(data.msg || "Failed to update property.");
      }
    } catch (err) {
      console.error("Update error:", err);
      alert("An error occurred while updating.");
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

            <Link href="/viewproperties" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 text-white shadow-md shadow-blue-600/20">
              <FiHome className="text-lg" />
              <span>My Properties</span>
            </Link>

            <Link href="/Createproperty" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
              <FiPlusCircle className="text-lg" />
              <span>Create Property</span>
            </Link>

            <Link href="/appointment" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
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
        <div className="space-y-6">

          <div className="flex items-center justify-between">
            <Link
              href="/agenthome"
              className="inline-flex items-center gap-2 text-xs font-bold text-gray-600 hover:text-blue-600 bg-white border border-gray-200 px-4 py-2 rounded-xl shadow-sm"
            >
              <FiArrowLeft className="text-sm" /> Back to Dashboard
            </Link>
            <h1 className="text-xl font-bold text-slate-900">My Properties</h1>
          </div>

          {loading ? (
            <div className="bg-white p-8 rounded-2xl border border-gray-200 text-center shadow-sm">
              <p className="text-sm font-medium text-gray-500">Loading properties, please wait...</p>
            </div>
          ) : properties.length === 0 ? (
            <div className="bg-white p-12 rounded-2xl border border-gray-200 text-center shadow-sm">
              <p className="text-gray-500 font-medium mb-3">No properties found.</p>
              <Link href="/Createproperty" className="inline-block text-xs font-bold bg-blue-600 text-white px-5 py-2.5 rounded-xl shadow-sm">
                Create Property
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {properties.map((item) => {
                const propId = item.id || item._id;
                const propImage = item.image || (item.images && item.images.length > 0 ? item.images[0] : "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80");

                return (
                  <div key={propId} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col md:flex-row">


                    <div className="md:w-[240px] h-48 md:h-auto bg-gray-100 overflow-hidden">
                      <img
                        src={propImage}
                        alt={item.name || item.title || "Property"}
                        className="w-full h-full object-cover"
                      />
                    </div>


                    <div className="p-5 md:p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <div>
                          <div className="flex items-center gap-1">
                            <span className="text-2xl font-black text-gray-900">₦{Number(item.price || 0).toLocaleString()}</span>
                            <span className="text-md font-bold text-gray-500">/{item.payment_plan === "PER_ANNUM" ? "yr" : item.payment_plan || "yr"}</span>
                          </div>

                          <p className="text-[13px] font-bold text-rose-600 mt-0.5 uppercase">
                            {item.category || "FLAT"} / {item.type || "RENT"}
                          </p>
                        </div>

                        <h2 className="text-lg font-black text-gray-900 mt-2">
                          {item.name || item.title}
                        </h2>

                        <p className="text-sm text-gray-500 mt-1.5">
                          {item.description}
                        </p>

                        <p className="text-xs font-semibold text-gray-600 mt-3 flex items-center gap-1">
                          <FiMapPin className="text-blue-600 text-sm" /> {item.city || item.address || "Jahi"}, {item.state || "Abuja"}
                        </p>

                        <div className="flex items-center gap-5 mt-3 pt-2.5 border-t border-gray-100 text-xs font-bold text-gray-700">
                          <span className="flex items-center gap-1">
                            <IoBedOutline className="text-sm text-gray-400" /> {item.bedroom || 0} beds
                          </span>
                          <span className="flex items-center gap-1">
                            <PiBathtub className="text-sm text-gray-400" /> {item.bathroom || 0} baths
                          </span>
                          <span className="flex items-center gap-1">
                            <PiToilet className="text-sm text-gray-400" /> {item.toilet || 0} toilets
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
                            onClick={() => openEditModal(item)}
                            className="inline-flex items-center gap-1.5 text-xs font-bold bg-gray-100 text-gray-800 hover:bg-blue-50 hover:text-blue-600 px-3 py-1.5 rounded-lg transition cursor-pointer"
                          >
                            <FiEdit /> Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => deleteProperty(propId)}
                            className="inline-flex items-center gap-1.5 text-xs font-bold bg-rose-50 text-rose-600 hover:bg-rose-100 px-3 py-1.5 rounded-lg cursor-pointer transition"
                          >
                            <FiTrash2 /> Delete
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          )}

        </div>
      </main>


      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4 border-b pb-3">
              <h3 className="text-lg font-bold text-slate-900">Edit Property</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700 font-bold text-xl cursor-pointer">×</button>
            </div>

            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Property Title</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-gray-50 border border-gray-200 text-xs p-3 rounded-xl focus:outline-none focus:border-blue-500" required />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Price (₦)</label>
                  <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full bg-gray-50 border border-gray-200 text-xs p-3 rounded-xl focus:outline-none focus:border-blue-500" required />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Bedrooms</label>
                  <input type="number" value={bedroom} onChange={(e) => setBedroom(e.target.value)} className="w-full bg-gray-50 border border-gray-200 text-xs p-3 rounded-xl focus:outline-none focus:border-blue-500" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">City</label>
                  <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className="w-full bg-gray-50 border border-gray-200 text-xs p-3 rounded-xl focus:outline-none focus:border-blue-500" required />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Address</label>
                  <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full bg-gray-50 border border-gray-200 text-xs p-3 rounded-xl focus:outline-none focus:border-blue-500" required />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Description</label>
                <textarea rows={3} value={description} onChange={(e) => setDescription(e.target.value)} className="w-full bg-gray-50 border border-gray-200 text-xs p-3 rounded-xl focus:outline-none focus:border-blue-500" required></textarea>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-gray-100 text-gray-700 text-xs font-bold rounded-xl cursor-pointer">Cancel</button>
                <button type="submit" className="px-5 py-2 bg-blue-600 text-white text-xs font-bold rounded-xl shadow cursor-pointer hover:bg-blue-700">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}