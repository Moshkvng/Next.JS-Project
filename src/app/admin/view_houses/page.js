"use client";
import AdminSidebar from "@/app/components/sidebar/page";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TfiTrash } from "react-icons/tfi";
import { GrEdit } from "react-icons/gr";

export default function Houses() {

    const [name, setName] = useState("");
    const [images, setImages] = useState([]);
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
    const [imageFiles, setImageFiles] = useState([]);

    const [properties, setProperties] = useState([]);

    const [id, setId] = useState("");
    const [modal, setModal] = useState(false);


    const getProperties = async () => {
        const token = localStorage.getItem("token");

        try {

            const agentResp = await fetch(
                "http://property.reworkstaging.name.ng/v1/merchants/agents?offset=0&limit=100",
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                }
            );

            const agentData = await agentResp.json();

            const agents = Array.isArray(agentData.data)
                ? agentData.data
                : [];

            const requests = agents.map((agent) =>
                fetch(
                    `http://property.reworkstaging.name.ng/v1/properties?agent=${agent.id}&verified=true`,
                    {
                        headers: {
                            authorization: `Bearer ${token}`,
                        },
                    }
                ).then((resp) => resp.json())
            );

            const results = await Promise.all(requests);

            const allProperties = results.flatMap((result) =>
                Array.isArray(result.data) ? result.data : []
            );

            console.log("ALL MERCHANT PROPERTIES:", allProperties);

            setProperties(allProperties);

        } catch (err) {
            console.log(err);
        }
    };


    useEffect(() => {
        getProperties();
    }, []);


    const deleteProperty = async (id) => {
        let ask = confirm("Do you want to delete this property?");
        if (!ask) return

        try {
            const resp = await fetch(
                `http://property.reworkstaging.name.ng/v1/properties/:${propertiesId}`,
                {
                    method: "DELETE",
                    headers: {
                        "content-type": "application/json",
                        authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await resp.data;
            if (data.id) {
                alert("Property deleted successfully!");
            }

        } catch (err) {
            console.log(err)
        }
    }

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

    const triggerModal = (data) => {
        setId(data.id);
        setModal(true);

        setName(data.name);
        setImages(data.images);
        setPrice(data.price);
        setCity(data.city || "");
        setDescription(data.description);
        setCategory(data.category);
        setType(data.type);
        setBedroom(data.bedroom);
        setAddress(data.address);
        setState(data.state);
        setCountry(data.country);
        setPropertyUse(data.property_use);
        setAmenities([data.amenities]);
        setAgentId(data.agentId);
        setImageFiles([]);
    };

    const updateProperty = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");

        if (!id) {
            alert("No property selected");
            return;
        }

        try {
            const propertyDetails = {
                name,
                price: String(price),
                city,
                type,
                description,
                category,
                bedroom: Number(bedroom) || 0,
                address,
                state,
                country,
                property_use: propertyUse,
                amenities: Array.isArray(amenities) ? amenities : [],
                agent: agentId,
            };

            const resp = await fetch(
                `http://property.reworkstaging.name.ng/v1/properties/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(propertyDetails),
                }
            );

            const data = await resp.json();
            console.log("UPDATE:", data);

            if (resp.ok || data.code === 200 || data.type === "SUCCESS") {

                if (imageFiles.length > 0) {
                    const formData = new FormData();
                    imageFiles.forEach((file) => formData.append("images", file));

                    await fetch(
                        `http://property.reworkstaging.name.ng/v1/properties/${id}/resource`,
                        {
                            method: "PUT",
                            headers: { Authorization: `Bearer ${token}` },
                            body: formData,
                        }
                    );
                }

                console.log("ALL MERCHANT PROPERTIES:",);

                alert("Property updated successfully");
                setModal(false);
                getProperties();
            } else {
                alert(data.msg || "Update failed");
            }
        } catch (err) {
            console.error(err);
            alert("Update failed");
        }
    };

    return (
        <div className="min-h-screen bg-teal-900 md:flex">
            <AdminSidebar activePage="View Houses" />

            <div className="min-w-0 flex-1 p-5 md:p-8">
                <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-teal-800 pb-5">
                    <div>
                        <h2 className="text-2xl font-bold text-teal-500">
                            View Houses
                        </h2>
                        <p className="mt-1 text-sm text-[#A8A476]">
                            View and manage listed properties
                        </p>
                    </div>

                    <Link href="/admin/create_house">
                        <button
                            type="button"
                            className="rounded-lg bg-teal-500 px-4 py-2 font-medium text-teal-950 shadow-md hover:bg-teal-400"
                        >
                            Add House
                        </button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {properties.length > 0 ? (
                        properties.map((item) => (
                            <div
                                key={item.id}
                                className="rounded-lg border border-gray-200 bg-white p-4 shadow-lg"
                            >
                                <div className="mb-3 overflow-hidden rounded-lg bg-gray-100">
                                    {item.image || (item.images && item.images[0]) ? (
                                        <img
                                            src={item.image || item.images[0]}
                                            alt={item.name}
                                            className="h-48 w-full object-cover"
                                        />
                                    ) : (
                                        <div className="flex h-40 w-full items-center justify-center text-sm text-gray-400">
                                            No image
                                        </div>
                                    )}
                                </div>

                                <h2 className="mb-2 text-lg font-medium text-gray-900">
                                    {item.name}
                                </h2>
                                <p className="mb-2 line-clamp-2 text-sm text-gray-500">
                                    {item.description}
                                </p>
                                <h3 className="mb-1 text-xl font-bold text-gray-900">
                                    ₦{item.price}
                                </h3>
                                <p className="mb-1 text-sm font-semibold text-teal-600">
                                    {item.category}
                                </p>
                                <p className="mb-3 text-sm text-gray-500">{item.city}</p>

                                {/* Badges */}
                                <div className="mb-4 flex flex-wrap gap-2">
                                    <span
                                        className={`rounded-full px-3 py-1 text-xs font-medium ${item.is_verified
                                            ? "bg-green-200 text-green-900"
                                            : "bg-yellow-200 text-yellow-900"
                                            }`}
                                    >
                                        {item.is_verified ? "Verified" : "Pending"}
                                    </span>
                                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-900">
                                        {item.type === "SALES" ? "Sold / Sales" : item.type || "Available"}
                                    </span>
                                </div>

                                <div className="flex gap-2">
                                    <button
                                        type="button"
                                        className="flex flex-1 items-center justify-center gap-2 rounded-md bg-blue-100 px-3 py-2 transition hover:bg-blue-600 hover:text-white"
                                        onClick={() => triggerModal(item)}
                                    >
                                        <GrEdit />
                                        <span className="text-sm font-medium">Edit</span>
                                    </button>

                                    <button
                                        type="button"
                                        className="flex flex-1 items-center justify-center gap-2 rounded-md bg-red-100 px-3 py-2 transition hover:bg-red-500 hover:text-white"
                                        onClick={() => deleteProperty(item.id)}
                                    >
                                        <TfiTrash />
                                        <span className="text-sm font-medium">Delete</span>
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="col-span-full text-[#A8A476]">No properties found</p>
                    )}
                </div>

                {/* Edit Section */}

                {modal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                        <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-teal-700 bg-teal-900 p-6 shadow-lg">
                            <div className="mb-4 flex items-center justify-between">
                                <h2 className="text-xl font-bold text-teal-500">Update property</h2>
                                <button
                                    type="button"
                                    className="text-2xl text-red-400"
                                    onClick={() => setModal(false)}
                                >X</button>
                            </div>

                            <form
                                onSubmit={updateProperty}
                                className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        placeholder="Describe the property"
                                        className="w-full rounded-lg border border-teal-700 bg-teal-900 p-3 text-white outline-none focus:border-teal-500"
                                    />
                                </div>


                                <button
                                    type="submit"
                                    className="rounded-lg bg-teal-500 px-6 py-3 font-semibold text-teal-950 shadow-md transition hover:bg-teal-400"
                                >
                                    Save changes
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div >
    );
}