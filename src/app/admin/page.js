import Nav from "@/app/components/admin_nav/Nav";
import AdminSidebar from "@/app/components/sidebar/page";

export default function Dashboard() {
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
                        <h3 className="mt-5 text-3xl font-bold">00</h3>
                    </div>

                    <div className="rounded-xl bg-[#E8E3CF] p-6 text-[#716B42] shadow-md">
                        <p className="font-medium">Total Users</p>
                        <h3 className="mt-5 text-3xl font-bold">00</h3>
                    </div>

                    <div className="rounded-xl bg-[#DDE5F2] p-6 text-[#344C70] shadow-md">
                        <p className="font-medium">Total Houses</p>
                        <h3 className="mt-5 text-3xl font-bold">00</h3>
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
                                    <th className="p-3">Image</th>
                                    <th className="p-3">House</th>
                                    <th className="p-3">Location</th>
                                    <th className="p-3">Description</th>
                                    <th className="p-3">Category</th>
                                    <th className="p-3">Price</th>
                                    <th className="p-3">Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="border-b border-teal-800">
                                    <td className="p-3">1</td>
                                    <td className="p-3">Image</td>
                                    <td className="p-3">House title</td>
                                    <td className="p-3">Location</td>
                                    <td className="p-3">Description</td>
                                    <td className="p-3">Category</td>
                                    <td className="p-3">Price</td>
                                    <td className="p-3">Status</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
        </div>
    )
}