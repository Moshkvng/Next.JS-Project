import Image from "next/image";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <div>
      <Nav/>
      <h1 className="text-2xl p-5 font-semibold bg-teal-200 text-gray-500">Welcome to Next JS Class</h1>
    </div>
  );
}
