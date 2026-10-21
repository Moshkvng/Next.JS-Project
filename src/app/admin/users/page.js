import Link from "next/link";
import AdminSidebar from "@/app/components/sidebar/page";

export default function Users() {
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
                                    <th className="p-3">ID</th>
                                    <th className="p-3">Full Name</th>
                                    <th className="p-3">Email</th>
                                    <th className="p-3">Status</th>
                                    <th className="p-3">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="border-b border-teal-800">
                                    <td className="p-3">1</td>
                                    <td className="p-3">User Name</td>
                                    <td className="p-3">user@example.com</td>
                                    <td className="p-3">Active</td>
                                    <td className="p-3">
                                        <button className="text-teal-500">View</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
}