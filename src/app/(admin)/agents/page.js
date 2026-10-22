
"use client"
import AdminSidebar from "@/app/components/sidebar/sidebar";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Agents() {

    const [agent, setAgent] = useState([]);
    const [modal, setModal] = useState("");
    const [loading, setLoading] = useState(true);

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
                console.log("Agents response:", data);

                const list = Array.isArray(data.data)
                    ? data.data
                    : Array.isArray(data)
                        ? data
                        : [];

                setAgent(list);
            } catch (err) {
                console.error(err);
                setAgent([]);
            } finally {
                setLoading(false);
            }
        };

        fetchAgent();
    }, []);
    const verifyAgent = async (agentId) => {
        let ask = confirm("Do you want to Verify this agent?");
        if (!ask) return
        const token = localStorage.getItem("token");

        try {
            const resp = await fetch(
                "http://property.reworkstaging.name.ng/v1/merchants/verify-agent",
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        agent_id: agentId,
                        is_verified: true,
                    }),
                }
            );

            const data = await resp.json();

            console.log("AGENTS:", data);

            if (data.code === 200) {
                alert("Agent verified successfully");
                window.location.reload();
            }
        } catch (err) {
            console.log(err);
        }
    };

    const deleteAgent = async (agentId) => {
        let ask = confirm("Do you want to delete this agent profile?");
        if (!ask) return;

        const token = localStorage.getItem("token");

        try {
            const resp = await fetch(
                "http://property.reworkstaging.name.ng/v1/merchants/agents?offset=0&limit=10",
                {
                    method: "DELETE",
                    headers: {
                        "content-type": "application/json",
                        authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await resp.json();

            console.log(data);

        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div className="min-h-screen bg-teal-900 md:flex">
            <AdminSidebar activePage="Agents" />

            <div className="min-w-0 flex-1 p-5 md:p-8">
                <div className="flex justify-between">
                    <div className="mb-8 border-b border-teal-800 pb-5">
                        <h2 className="text-2xl font-bold text-teal-500">Agents</h2>
                        <p className="mt-1 text-sm text-[#A8A476]">
                            Manage property agents
                        </p>
                    </div>
                    <Link href="/admin/create_agent" className="border border-teal-500 shadow-md text-center rounded-lg mb-8 bg-teal-800 p-2">
                        <h2 className="text-2xl font-bold text-teal-500">Create Agent</h2>
                        <p className="mt-1 text-sm text-[#A8A476]">
                            create an agent for your properties
                        </p>
                    </Link>
                </div>

                <div className="rounded-xl border border-teal-800 bg-teal-800/50 p-6 shadow-md">
                    <h3 className="mb-5 text-xl font-semibold text-teal-500">
                        All Agents
                    </h3>

                    {loading ? (
                        <p className="text-[#BBBBAC]">Loading, please wait...</p>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-[#BBBBAC]">
                                <thead>
                                    <tr className="border-b border-teal-700 text-[#A8A476]">
                                        <th className="p-3">S/N</th>
                                        <th className="p-3">ID</th>
                                        <th className="p-3">Image</th>
                                        <th className="p-3">Full Name</th>
                                        <th className="p-3">Email</th>
                                        <th className="p-3">Phone</th>
                                        <th className="p-3">Status</th>
                                        <th className="p-3">Action</th>
                                        <th className="p-3">Profile</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {(Array.isArray(agent) ? agent : []).map((item, index) => (
                                        <tr key={item.id || index} className="border-b border-teal-800">
                                            <td className="p-3">{index + 1}</td>
                                            <td className="p-3">{item.id}</td>
                                            <td className="p-3">{item.image}</td>
                                            <td className="p-3">
                                                {item.full_name || item.name}
                                            </td>
                                            <td className="p-3">{item.email}</td>
                                            <td className="p-3">{item.primary_phone}</td>
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
                                                <div className="flex gap-3">
                                                    <button
                                                        type="button"
                                                        className="text-teal-200 cursor-pointer bg-red-700 hover:bg-red-900 rounded-lg px-3"
                                                        onClick={() => deleteAgent(item.id)}
                                                    >
                                                        Delete
                                                    </button>
                                                    {!item.is_verified && (
                                                        <button
                                                            type="button"
                                                            className="text-teal-200 cursor-pointer bg-green-700 hover:bg-green-900 rounded-lg px-3"
                                                            onClick={() => verifyAgent(item.id)}
                                                        >
                                                            Verify
                                                        </button>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="p-3">
                                                <button
                                                    type="button"
                                                    className="text-teal-200 cursor-pointer bg-blue-700 hover:bg-blue-900 rounded-lg px-3"
                                                    onClick={() => setModal(item)}
                                                >
                                                    View
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

                {modal && (
                    <div className="fixed inset-0 bg-[linear-gradient(rgba(0,0,0,0.5))] border border-gray-200 shadow-sm p-6">
                        <div className="bg-blue-100 rounded-lg p-10 my-20 shadow-lg w-[40%] mx-auto">
                            <div className="mb-4 flex justify-between">
                                <h2 className="text-xl font-bold">Details of Agent</h2>
                                <button
                                    type="button"
                                    className="text-2xl text-red-500 cursor-pointer bg-red-200 rounded-md px-2"
                                    onClick={() => setModal(false)}
                                >
                                    X
                                </button>
                            </div>
                            <div className="flex gap-4">
                                {modal.image && (
                                    <img
                                        src={modal.image}
                                        alt=""
                                        className="h-24 w-24 rounded-full object-cover"
                                    />
                                )}
                                <div>
                                    <h2 className="text-xl font-semibold text-teal-800">
                                        {modal.full_name}
                                    </h2>
                                    <p className="text-gray-500">{modal.email}</p>
                                    <p className="text-green-600">{modal.primary_phone}</p>
                                    <p className="text-sm text-red-600">
                                        {modal.is_verified ? "Verified" : "Pending"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}