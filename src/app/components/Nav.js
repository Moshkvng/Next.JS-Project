import Link from "next/link"

export default function Nav() {
    return (
        <nav className="flex justify-between items-center gap-5 p-5 shadow-sm bg-teal-900 text-lg text-white font-bold">
            <h2>Logo</h2>
            <ul className="flex gap-10">
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/login">Signin</Link>
                </li>
            </ul>
        </nav>
    );
}