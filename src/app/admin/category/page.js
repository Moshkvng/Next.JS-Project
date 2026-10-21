import AdminSidebar from "@/app/components/sidebar/page";

export default function Categories() {

    return (
        <div className="min-h-screen bg-teal-900 md:flex">
            <AdminSidebar activePage="Categories" />

            <main className="min-w-0 flex-1 p-5 md:p-8">
                <header className="mb-8 border-b border-teal-800 pb-5">
                    <h2 className="text-2xl font-bold text-teal-500">
                        Categories
                    </h2>
                    <p className="mt-1 text-sm text-[#A8A476]">
                        Create and manage property categories
                    </p>
                </header>

                <section className="mb-8 max-w-2xl rounded-xl border border-teal-800 bg-teal-800/50 p-6 shadow-md">
                    <h3 className="mb-6 text-xl font-semibold text-teal-500">
                        Create Category
                    </h3>

                    <form className="space-y-5">
                        <div>
                            <label className="mb-2 block text-[#BBBBAC]">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter category name"
                                className="w-full rounded-lg border border-teal-700 bg-teal-900 p-3 text-white outline-none focus:border-teal-500"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-[#BBBBAC]">
                                Image
                            </label>
                            <textarea
                                rows={3}
                                placeholder="Enter category description"
                                className="w-full rounded-lg border border-teal-700 bg-teal-900 p-3 text-white outline-none focus:border-teal-500"
                            />
                        </div>

                        <button
                            type="button"
                            className="rounded-lg bg-teal-500 px-6 py-3 font-semibold text-teal-950 shadow-md transition hover:bg-teal-400"
                        >
                            Create Category
                        </button>
                    </form>
                </section>

                {/* View Categories */}

                <section className="rounded-xl border border-teal-800 bg-teal-800/50 p-6 shadow-md">
                    <div className="mb-5 gap-4">
                        <h3 className="text-xl font-semibold text-teal-500">
                            All Categories
                        </h3>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-[#BBBBAC]">
                            <thead>
                                <tr className="border-b border-teal-700 text-[#A8A476]">
                                    <th className="p-3">S/N</th>
                                    <th className="p-3">Category Name</th>
                                    <th className="p-3">Image</th>
                                    <th className="p-3">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="border-b border-teal-800">
                                    <td className="p-3">1</td>
                                    <td className="p-3">Duplex</td>
                                    <td className="p-3">Luxury duplex houses</td>
                                    <td className="p-3">
                                        <div className="flex gap-3">
                                            <button type="button" className="text-teal-500">
                                                Edit
                                            </button>
                                            <button type="button" className="text-red-400">
                                                Delete
                                            </button>
                                        </div>
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