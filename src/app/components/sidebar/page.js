import Link from "next/link";

export default function AdminSidebar({ activePage }) {
    const menuItems = [
        { name: "Dashboard", href: "/admin/dashboard" },
        { name: "Users", href: "/admin/users" },
        { name: "Agents", href: "/admin/agents" },
        { name: "Create House", href: "/admin/create_house" },
        { name: "View Houses", href: "/admin/houses" },
        { name: "Categories", href: "/admin/category" },
    ];

    return (
        <aside className="w-full shrink-0 bg-[#123F3B] p-5 md:min-h-screen md:w-64">
            <h1 className="mb-2 text-2xl font-bold text-teal-500">
                HouseAdmin
            </h1>

            <p className="mb-10 text-sm text-[#A8A476]">
                Property Management
            </p>

            <nav>
                <ul className="space-y-3">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className={`block rounded-lg p-3 transition ${activePage === item.name
                                        ? "bg-teal-700 text-white shadow-md"
                                        : "text-[#BBBBAC] hover:bg-teal-800 hover:text-white"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="mt-10 rounded-lg border border-teal-700 p-4">
                <p className="font-medium text-teal-500">Admin Panel</p>
                <p className="mt-1 text-xs text-[#A8A476]">
                    Manage your property platform
                </p>
            </div>
        </aside>
    );
}