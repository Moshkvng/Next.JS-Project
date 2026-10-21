
"use client"
import Link from "next/link";
import AdminSidebar from "@/app/components/sidebar/page";
import { useEffect, useState } from "react";

export default function Users() {
    const [users, setUsers] = useState([]);

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
        <div className="min-h-screen bg-teal-900 md:flex">
            <AdminSidebar activePage="Users" />

            <main className="min-w-0 flex-1 p-5 md:p-8">
                <header className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-teal-800 pb-5">
                    <div>
                        <h2 className="text-2xl font-bold text-teal-500">Users</h2>
                        <p className="mt-1 text-sm text-[#A8A476]">
                            Manage registered users
                        </p>
                    </div>

                    <Link
                        href="/admin"
                        className="rounded-lg bg-teal-800 px-4 py-2 text-sm text-[#BBBBAC]"
                    >
                        Dashboard
                    </Link>
                </header>

                <section className="rounded-xl border border-teal-800 bg-teal-800/50 p-6 shadow-md">
                    <h3 className="mb-5 text-xl font-semibold text-teal-500">
                        All Users
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-[#BBBBAC]">
                            <thead>
                                <tr className="border-b border-teal-700 text-[#A8A476]">
                                    <th className="p-3">S/N</th>
                                    <th className="p-3">ID</th>
                                    <th className="p-3">First Name</th>
                                    <th className="p-3">Last Name</th>
                                    <th className="p-3">Email</th>
                                    <th className="p-3">Phone</th>
                                    <th className="p-3">Password</th>
                                    <th className="p-3">Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                {users.map((item, index) => (
                                    <tr key={item.id} className="border-b border-teal-800">
                                        <td className="p-3">{index + 1}</td>
                                        <td className="p-3">{item.Id}</td>
                                        <td className="p-3">{item.first_name}</td>
                                        <td className="p-3">{item.last_name}</td>
                                        <td className="p-3">{item.email}</td>
                                        <td className="p-3">{item.phone}</td>
                                        <td className="p-3">{item.password}</td>
                                        <td className="p-3">Active</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
}