
"use client"
// import AdminSidebar from "@/app/components/sidebar/sidebar";
import { useState, useEffect } from "react";

export default function CreateHouse() {

    const [name, setName] = useState("");
    const [imageFiles, setImageFiles] = useState([]);
    const [price, setPrice] = useState("");
    const [city, setCity] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [type, setType] = useState("");
    const [bedroom, setBedroom] = useState("");
    const [address, setAddress] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [propertyUse, setPropertyUse] = useState("");
    const [amenities, setAmenities] = useState([]);
    const [agentId, setAgentId] = useState("");
    const [agent, setAgent] = useState([]);

    const verifyProperty = async (propertyId) => {
        const token = localStorage.getItem("token");

        try {
            const resp = await fetch(
                `http://property.reworkstaging.name.ng/v1/properties/${propertyId}/set-verified`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        is_verified: true,
                    }),
                }
            );

            const data = await resp.json();
            console.log("VERIFY PROPERTY:", data);
        } catch (err) {
            console.log(err);
        }
    };

    const createProperty = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");

        try {
            const newProperty = {
                name,
                price,
                city,
                type,
                description,
                category,
                bedroom: Number(bedroom),
                address,
                state,
                country,
                property_use: propertyUse,
                amenities: [],
                agent: agentId,
            };

            const resp = await fetch(
                "http://property.reworkstaging.name.ng/v1/properties",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(newProperty),
                }
            );

            const data = await resp.json();
            console.log("Create:", data);

            if (
                !(
                    data.code === 200 ||
                    data.code === 201 ||
                    data.type === "SUCCESS"
                )
            ) {
                alert(data.msg || "Failed to create property");
                return;
            }

            const propertyId = data.data.id;

            if (imageFiles.length > 0) {
                const formData = new FormData();
                imageFiles.forEach((file) => {
                    formData.append("images", file);
                });

                const imageResp = await fetch(
                    `http://property.reworkstaging.name.ng/v1/properties/${propertyId}/resource`,
                    {
                        method: "PUT",
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                        body: formData,
                    }
                );

                const imageData = await imageResp.json();
                console.log("IMAGE STATUS:", imageResp.status);
                console.log("IMAGE RESPONSE:", imageData);

                if (!imageResp.ok) {
                    alert(imageData.msg || "Image upload failed");
                    return;
                }
            
            }

            await verifyProperty(propertyId);

            alert("Property created successfully");
        } catch (err) {
            console.error(err);
            alert("Something went wrong");
        }
    };

    useEffect(() => {

        const fetchAgent = async () => {
            const token = localStorage.getItem("token");
            try {
                const resp = await fetch(
                    "http://property.reworkstaging.name.ng/v1/merchants/agents?offset=0&limit=10",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                const data = await resp.json();
                setAgent(data.data || data);

            } catch (err) {
                console.error(err);
            }
        };

        fetchAgent();
    }, []);

    return (
        <div className="min-h-screen bg-teal-900 md:flex">
            {/* <AdminSidebar activePage="Create House" /> */}

            <div className="min-w-0 flex-1 p-5 md:p-8">
                <header className="mb-8 border-b border-teal-800 pb-5">
                    <h2 className="text-2xl font-bold text-teal-500">
                        Create House
                    </h2>
                    <p className="mt-1 text-sm text-[#A8A476]">
                        Add a new property to the platform
                    </p>
                </header>

                <section className="max-w-3xl rounded-xl border border-teal-800 bg-teal-800/50 p-6 shadow-md">
                    <h3 className="mb-6 text-xl font-semibold text-teal-500">
                        House Information
                    </h3>

                    <form className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                            <label className="mb-2 block text-[#BBBBAC]">
                                Title
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter house title"
                                className="w-full rounded-lg border border-teal-700 bg-teal-900 p-3 text-white outline-none focus:border-teal-500"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-[#BBBBAC]">
                                Image
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={(e) => {
                                    const files = Array.from(e.target.files || []).slice(0, 5);
                                    setImageFiles(files);
                                }}
                                className="w-full rounded-lg border border-teal-700 bg-teal-900 p-3 text-[#BBBBAC]"
                            />
                        </div>
                        <div>
                            <label className="mb-2 block text-[#BBBBAC]">
                                City
                            </label>
                            <input
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                placeholder="Enter City"
                                className="w-full rounded-lg border border-teal-700 bg-teal-900 p-3 text-white outline-none focus:border-teal-500"
                            />
                        </div>
                        <div>
                            <label className="mb-2 block text-[#BBBBAC]">
                                Address
                            </label>
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="Enter address"
                                className="w-full rounded-lg border border-teal-700 bg-teal-900 p-3 text-white outline-none focus:border-teal-500"
                            />
                        </div>
                        <div>
                            <label className="mb-2 block text-[#BBBBAC]">
                                Country
                            </label>
                            <input
                                type="text"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                placeholder="Enter country"
                                className="w-full rounded-lg border border-teal-700 bg-teal-900 p-3 text-white outline-none focus:border-teal-500"
                            />
                        </div>
                        <div>
                            <label className="mb-2 block text-[#BBBBAC]">
                                State
                            </label>
                            <input
                                type="text"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                placeholder="Enter State"
                                className="w-full rounded-lg border border-teal-700 bg-teal-900 p-3 text-white outline-none focus:border-teal-500"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-[#BBBBAC]">
                                Price (₦)
                            </label>
                            <input
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="Enter price"
                                className="w-full rounded-lg border border-teal-700 bg-teal-900 p-3 text-white outline-none focus:border-teal-500"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-[#BBBBAC]">
                                Number of Bedrooms
                            </label>
                            <input
                                type="number"
                                value={bedroom}
                                onChange={(e) => setBedroom(e.target.value)}
                                placeholder="Enter bedrooms"
                                className="w-full rounded-lg border border-teal-700 bg-teal-900 p-3 text-white outline-none focus:border-teal-500"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-[#BBBBAC]">
                                Category
                            </label>
                            <select className="w-full rounded-lg border border-teal-700 bg-teal-900 p-3 text-[#BBBBAC] outline-none focus:border-teal-500"
                                value={category} onChange={(e) => setCategory(e.target.value)} >
                                <option value="">Select category</option>
                                <option value="FLAT">Flat</option>
                                <option value="APPARTMENT">Appartment</option>
                                <option value="DUPLEX">Duplex</option>
                            </select>
                        </div>
                        <div>
                            <label className="mb-2 block text-[#BBBBAC]">
                                Type
                            </label>
                            <select className="w-full rounded-lg border border-teal-700 bg-teal-900 p-3 text-[#BBBBAC] outline-none focus:border-teal-500"
                                value={type} onChange={(e) => setType(e.target.value)} >
                                <option value="">Select type</option>
                                <option value="RENT">Rent</option>
                                <option value="SALES">Sales</option>
                                <option value="LEASE">Lease</option>
                            </select>
                        </div>
                        <div>
                            <label className="mb-2 block text-[#BBBBAC]">
                                Property Use
                            </label>
                            <select className="w-full rounded-lg border border-teal-700 bg-teal-900 p-3 text-[#BBBBAC] outline-none focus:border-teal-500"
                                value={propertyUse} onChange={(e) => setPropertyUse(e.target.value)} >
                                <option value="">Select Property use</option>
                                <option value="RESIDENTIAL">Residential</option>
                                <option value="COMMERCIAL">Commercial</option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-2 block text-[#BBBBAC]">Assign Agent</label>
                            <select
                                className="w-full rounded-lg border border-teal-700 bg-teal-900 p-3 text-[#BBBBAC]"
                                value={agentId}
                                onChange={(e) => setAgentId(e.target.value)}
                            >
                                <option value="">Select agent</option>
                                {agent.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.full_name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* <div>
                            <label className="mb-2 block text-[#BBBBAC]">
                                Status
                            </label>
                            <select className="w-full rounded-lg border border-teal-700 bg-teal-900 p-3 text-[#BBBBAC] outline-none focus:border-teal-500"
                                value={type} onChange={(e) => setType(e.target.value)} >
                                <option value="">Select status</option>
                                <option value="duplex">Available</option>
                                <option value="apartment">Sold</option>
                            </select>
                        </div> */}

                        <div>
                            <label className="mb-2 block text-[#BBBBAC]">
                                Amenities
                            </label>
                            <input
                                type="text"
                                value={amenities}
                                onChange={(e) => setAmenities(e.target.value)}
                                placeholder="Enter amenities"
                                className="w-full rounded-lg border border-teal-700 bg-teal-900 p-3 text-white outline-none focus:border-teal-500"
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <label className="mb-2 block text-[#BBBBAC]">
                                Description
                            </label>
                            <textarea
                                rows={4}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Describe the property"
                                className="w-full rounded-lg border border-teal-700 bg-teal-900 p-3 text-white outline-none focus:border-teal-500"
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <button
                                type="button"
                                className="rounded-lg bg-teal-500 px-6 py-3 font-semibold text-teal-950 shadow-md transition hover:bg-teal-400"
                                onClick={createProperty}
                            >
                                Create House
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
}