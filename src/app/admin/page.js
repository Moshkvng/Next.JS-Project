import Link from "next/link";

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