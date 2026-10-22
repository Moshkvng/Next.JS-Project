import Link from "next/link"
import Image from "next/image";

export default function Nav() {
    return (
        <nav className="flex justify-between items-center gap-5 p-5 shadow-sm bg-teal-900 text-lg text-white font-bold">
            <Link href="/admin/dashboard">
                <img className="rounded-full" src="/logo.jpg" alt="Logo" width={150} />
            </Link>
            <ul className="flex">
                <li>
                    <Link href="/about"></Link>
                </li>
                <li>
                    <Link href="/login" className="rounded-lg bg-teal-700 px-3 py-2" >👤Signin</Link>
                </li>
            </ul>
        </nav>
    );
}