<<<<<<< HEAD:src/app/(admin)/adminpanel/page.js
"use client"
// import Nav from "@/app/components/admin_nav/Nav";
// import AdminSidebar from "@/app/components/sidebar/page";
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
=======
import Link from "next/link";
>>>>>>> d8e158161cc0875971190fec2e092402dea8c9b8:src/app/admin/page.js

export default function Home() {
    return (
        <div className="min-h-screen bg-teal-900 text-white">
            <nav className="flex items-center justify-between border-b border-teal-800 px-8 py-5 md:px-16">
                <div>
                    <h1 className="text-2xl font-bold text-teal-500">
                        HouseAdmin
                    </h1>
                    <p className="text-xs text-[#A8A476]">
                        Property Management
                    </p>
                </div>

<<<<<<< HEAD:src/app/(admin)/adminpanel/page.js
        <div>
            <div className="min-h-screen bg-teal-900 md:flex">
                {/* <AdminSidebar activePage="Dashboard" /> */}
                <main className="min-w-0 flex-1 p-5 md:p-8">
                    {/* <Nav /> */}
                    <header className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-teal-800 pb-5">
                        <div>
                            <h2 className="text-2xl font-bold text-teal-500">
                                Dashboard
                            </h2>
                            <p className="mt-1 text-sm text-[#A8A476]">
                                Welcome to your admin panel
=======
                <div className="flex items-center gap-4">
                    <Link
                        href="/admin/login"
                        className="px-5 py-2 text-[#BBBBAC] transition hover:text-white"
                    >
                        Login
                    </Link>

                    <Link
                        href="/admin/account"
                        className="rounded-full bg-teal-500 px-6 py-2 font-semibold text-white transition hover:bg-teal-600"
                    >
                        Create Account
                    </Link>
                </div>
            </nav>


            {/* Hero Section */}
            <div className="mx-auto flex min-h-[75vh] max-w-7xl items-center px-8 py-16 md:px-16">
                <div className="max-w-3xl">
                    <p className="mb-4 font-medium text-[#A8A476]">
                        Property management made simple
                    </p>

                    <h2 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                        Manage your properties
                        <span className="text-teal-500"> with confidence.</span>
                    </h2>

                    <p className="mb-8 max-w-2xl text-lg leading-8 text-[#BBBBAC]">
                        A simple property management platform that helps merchants
                        manage agents, properties and property listings from one place.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="/admin/account"
                            className="rounded-full bg-teal-500 px-8 py-3 font-bold text-white shadow-md transition hover:bg-teal-600"
                        >
                            Create Merchant Account
                        </Link>

                        <Link
                            href="/admin/login"
                            className="rounded-full border border-teal-500 px-8 py-3 font-bold text-teal-500 transition hover:bg-teal-800"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>

            <div className="border-t border-teal-800 px-8 py-16 md:px-16">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10">
                        <p className="mb-2 text-sm font-semibold text-[#A8A476]">EVERYTHING IN ONE PLACE
                        </p>

                        <h2 className="text-3xl font-bold text-teal-500">
                            Built for property management
                        </h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">

                        <div className="rounded-xl border border-teal-800 bg-[#123F3B] p-6 shadow-md">
                            <h3 className="mb-3 text-xl font-bold text-teal-500">
                                Manage Properties
                            </h3>

                            <p className="leading-7 text-[#BBBBAC]">
                                Create, review and manage your property listings from your
                                dashboard.
>>>>>>> d8e158161cc0875971190fec2e092402dea8c9b8:src/app/admin/page.js
                            </p>
                        </div>

                        <div className="rounded-xl border border-teal-800 bg-[#123F3B] p-6 shadow-md">
                            <h3 className="mb-3 text-xl font-bold text-teal-500">
                                Manage Agents
                            </h3>

                            <p className="leading-7 text-[#BBBBAC]">
                                Create property agents, verify them and assign properties
                                to your team.
                            </p>
                        </div>

                        <div className="rounded-xl border border-teal-800 bg-[#123F3B] p-6 shadow-md">
                            <h3 className="mb-3 text-xl font-bold text-teal-500">
                                Property Verification
                            </h3>
                            <p className="leading-7 text-[#BBBBAC]">
                                Review and verify properties before making them available
                                to users.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="px-8 py-20 text-center md:px-16">
                <div className="mx-auto max-w-3xl rounded-2xl bg-[#123F3B] p-10 shadow-md">
                    <h2 className="mb-4 text-3xl font-bold text-white">
                        Ready to manage your properties?
                    </h2>
                    <p className="mb-7 text-[#BBBBAC]">
                        Create your merchant account and start managing your properties
                        and agents today.
                    </p>
                    <Link
                        href="/admin/account"
                        className="inline-block rounded-full bg-teal-500 px-8 py-3 font-bold text-white transition hover:bg-teal-600"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
            
            <footer className="border-t border-teal-800 px-8 py-6 text-center text-sm text-[#BBBBAC]">
                © 2026 Boingdmin. Property Management Platform.
            </footer>

        </div>
    );
}