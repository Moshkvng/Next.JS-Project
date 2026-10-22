
"use client";
import AdminSidebar from "@/app/components/sidebar/page";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Houses() {

    const [properties, setProperties] = useState([]);

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

                    <div className="flex gap-5">
                        <Link href="/admin/create_house">
                            <button
                                type="button"
                                className="rounded-lg bg-teal-500 px-4 py-2 font-medium text-teal-950 shadow-md hover:bg-teal-400"
                            >
                                Add House
                            </button>
                        </Link>
                        <Link href="/admin/view_houses" className="border border-teal-500 shadow-md text-center rounded-lg mb-8 bg-teal-800 p-2">
                            <h2 className="text-2xl font-bold text-teal-500">Manage Properties</h2>
                            <p className="mt-1 text-sm text-[#A8A476]">
                                Edit, delete, and verify your properties
                            </p>
                        </Link>
                    </div>
                </div>

                <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="rounded-xl bg-[#DCEBE6] p-5 text-teal-900 shadow-md">
                        <p>Total Listed</p>
                        <h3 className="mt-3 text-2xl font-bold">00</h3>
                    </div>

                    <div className="rounded-xl bg-[#E8E3CF] p-5 text-[#716B42] shadow-md">
                        <p>Available</p>
                        <h3 className="mt-3 text-2xl font-bold">00</h3>
                    </div>

                    <div className="rounded-xl bg-[#E8DDE9] p-5 text-[#765779] shadow-md">
                        <p>Sold</p>
                        <h3 className="mt-3 text-2xl font-bold">00</h3>
                    </div>
                </div>
                <div className="mb-6 flex flex-wrap gap-3">
                    <button type="button" className="rounded-lg bg-teal-500 px-5 py-2 font-medium text-teal-950 shadow-md">All Properties</button>
                    <button type="button" className="rounded-lg bg-teal-800 px-5 py-2 text-[#BBBBAC] shadow-md hover:bg-teal-700">Pending</button>

                    <button type="button" className="rounded-lg bg-teal-800 px-5 py-2 text-[#BBBBAC] shadow-md hover:bg-teal-700">Verified</button>
                </div>

                <div className="rounded-xl border border-teal-800 bg-teal-800/50 p-6 shadow-md">
                    <div className="mb-5">
                        <h3 className="text-xl font-semibold text-teal-500">
                            All Houses
                        </h3>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-[#BBBBAC]">
                            <thead>
                                <tr className="border-b border-teal-700 text-[#A8A476]">
                                    <th className="p-3">S/N</th>
                                    <th className="p-3">House</th>
                                    <th className="p-3">Agent</th>
                                    <th className="p-3">Location</th>
                                    <th className="p-3">Category</th>
                                    <th className="p-3">Price</th>
                                    <th className="p-3">Verification</th>
                                    <th className="p-3">Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                {properties.map((item, index) => (
                                    <tr key={item.id} className="border-b border-teal-800">
                                        <td className="p-3">{index + 1}</td>
                                        <td className="p-3">{item.name}</td>
                                        <td className="p-3">{item.city}</td>
                                        <td className="p-3">{item.category}</td>
                                        <td className="p-3">₦{item.price}</td>
                                        <td className="p-3">
                                            {item.is_verified ? (
                                                <span className="rounded-full bg-green-200 px-3 py-1 text-xs text-green-900">
                                                    Verified
                                                </span>
                                            ) : (
                                                <span className="rounded-full bg-yellow-200 px-3 py-1 text-xs text-yellow-900">
                                                    Pending
                                                </span>
                                            )}
                                        </td>
                                        <td className="p-3">
                                            {/* adjust if your API uses type / status field */}
                                            {item.type == "SALES" == "sold" ? "Sold" : "Available"}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}