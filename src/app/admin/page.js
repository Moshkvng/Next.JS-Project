"use client"
import Nav from "@/app/components/admin_nav/Nav";
import AdminSidebar from "@/app/components/sidebar/page";
import { useEffect, useState } from "react";

export default function Dashboard() {

    const [properties, setProperties] = useState([]);
    const [agent, setAgent] = useState([]);
    const [users, setUsers] = useState([]);

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

            const agentList = Array.isArray(agentData.data)
                ? agentData.data
                : [];

            setAgent(agentList);

            const requests = agentList.map((agent) =>
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

            console.log(allProperties);
            setProperties(allProperties);

        } catch (err) {
            console.log(err);
        }
    };


    useEffect(() => {
        getProperties();
    }, []);

    const getUsers = async () => {
        const token = localStorage.getItem("token");

        try {
            const resp = await fetch(
                "http://property.reworkstaging.name.ng/v1/users?limit=5&page=2",
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await resp.json();
            console.log("USERS:", data);

            const userList = Array.isArray(data.data)
                ? data.data
                : [];
            setUsers(userList);

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (

        <div>
            <div className="min-h-screen bg-teal-900 md:flex">
                <AdminSidebar activePage="Dashboard" />
                <main className="min-w-0 flex-1 p-5 md:p-8">
                    <Nav />
                    <header className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-teal-800 pb-5">
                        <div>
                            <h2 className="text-2xl font-bold text-teal-500">
                                Dashboard
                            </h2>
                            <p className="mt-1 text-sm text-[#A8A476]">
                                Welcome to your admin panel
                            </p>
                        </div>

                        <div className="rounded-lg bg-teal-800 px-4 py-2 text-sm text-[#BBBBAC]">
                            Agent Dashboard
                        </div>
                    </header>

                    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

                        <div className="rounded-xl bg-[#DCEBE6] p-6 text-teal-900 shadow-md">
                            <p className="font-medium">Total Agents</p>
                            <h3 className="mt-5 text-3xl font-bold">{agent.length}</h3>
                        </div>

                        <div className="rounded-xl bg-[#E8E3CF] p-6 text-[#716B42] shadow-md">
                            <p className="font-medium">Total Users</p>
                            <h3 className="mt-5 text-3xl font-bold">{users.length}</h3>
                        </div>

                        <div className="rounded-xl bg-[#DDE5F2] p-6 text-[#344C70] shadow-md">
                            <p className="font-medium">Total House</p>
                            <h3 className="mt-5 text-3xl font-bold">{properties.length}</h3>
                        </div>

                        <div className="rounded-xl bg-[#E8DDE9] p-6 text-[#765779] shadow-md">
                            <p className="font-medium">Total Sold</p>
                            <h3 className="mt-5 text-3xl font-bold">00</h3>
                        </div>

                    </section>

                    <section className="mt-10 rounded-xl border border-teal-800 bg-teal-800/50 p-6 shadow-md">
                        <h3 className="mb-5 text-xl font-semibold text-teal-500">
                            Recent Houses
                        </h3>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-[#BBBBAC]">
                                <thead>
                                    <tr className="border-b border-teal-700 text-[#A8A476]">
                                        <th className="p-3">S/N</th>
                                        <th className="p-3">House</th>
                                        <th className="p-3">Location</th>
                                        <th className="p-3">Description</th>
                                        <th className="p-3">Category</th>
                                        <th className="p-3">Price</th>
                                        <th className="p-3">Status</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {properties.map((item, index) => (
                                        <tr key={item.id} className="border-b border-teal-800">
                                            <td className="p-3">{index + 1}</td>
                                            <td className="p-3">{item.name}</td>
                                            <td className="p-3">{item.city}</td>
                                            <td className="p-3">{item.description}</td>
                                            <td className="p-3">{item.category}</td>
                                            <td className="p-3">₦{item.price}</td>
                                            <td className="p-3">
                                                {item.market_status}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}