"use client";
import Nav from "@/app/components/admin_nav/Nav";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "@/app/components/sidebar/page";


export default function () {
    const router = useRouter();
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [imageFiles, setImageFiles] = useState([]);
    const [errorCheck, setErrorCheck] = useState(false);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(?:\+234\d{10}|0\d{10}|\d{11})$/;


    const createAgent = async (e) => {
        e.preventDefault();
        setErrorCheck(true);

        if (firstName == "" || email == "" || phone == "" || password == "" || !emailRegex.test(email) || !phoneRegex.test(phone.replace(/\s/g, "")) || password.length < 8) {
            return;
        }

        const token = localStorage.getItem("token");

        try {
            const newAgent = {
                full_name: firstName,
                email: email,
                phone: phone,
                password: password,
                company: "BOING"
            };

            const resp = await fetch(
                "http://property.reworkstaging.name.ng/v1/merchants/agents",
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(newAgent),
                }
            );

            const data = await resp.json();
            console.log("AGENT CREATE RESPONSE:", data);

            if (!resp.ok) {
                alert(data.msg || "Failed to create agent");
                return;
            }

            const agentId = data.data?.id || data.data?._id;

            if (!agentId) {
                alert("Agent created successfully!");
                router.push("/loginagent");
                return;
            }

            if (imageFiles.length > 0) {
                const formData = new FormData();
                formData.append("image", imageFiles[0]);

                const imageResp = await fetch(
                    `http://property.reworkstaging.name.ng/v1/agents/${agentId}/resource`,
                    {
                        method: "PUT",
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                        body: formData,
                    }
                );

                const contentType = imageResp.headers.get("content-type");
                if (contentType && contentType.includes("application/json")) {
                    const imageData = await imageResp.json();
                    console.log("IMAGE RESPONSE:", imageData);
                }
            }

            alert("Agent created successfully!");
            router.push("/loginagent");

        } catch (err) {
            console.log("Error:", err);
        }
    };

    return (
        <div className="bg-teal-900 min-h-screen bg-teal-900 md:flex">
            <AdminSidebar activePage="Agents" />
            <div className="mx-auto my-10 w-[35%] border border-5 border-teal-500 p-10 rounded-lg">
                <h3 className="text-xl text-teal-500 font-bold py-1 text-center">Create your property agent</h3>
                <div>
                    <p className="text-sm text-gray-400 py-5">*Required fields</p>
                </div>
                <div>
                    <label className="mb-2 block text-[#BBBBAC]">
                        Image
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={(e) => {
                            const files = Array.from(e.target.files || []).slice(0, 5);
                            setImageFiles(files);
                        }}
                        className="w-full rounded-lg border border-teal-700 bg-teal-900 p-3 text-[#BBBBAC]"
                    />
                </div>
                <div className="font-bold text-white pb-3">
                    <label htmlFor="Name">Full name*</label>
                    <input className="w-full h-13 p-3 shadow-md border border-gray-400 rounded-lg" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    {errorCheck == true && firstName == "" ? <span className="text-red-500 text-sm">First name required</span> : null}
                </div>

                <div className="font-bold text-white pb-3">
                    <label>Email*</label>
                    <input
                        className="w-full h-13 p-3 shadow-md border border-gray-400 rounded-lg" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {errorCheck && email === "" && (
                        <span className="text-red-500 text-sm">Email required</span>
                    )}
                    {errorCheck && email !== "" && !emailRegex.test(email) && (
                        <span className="text-red-500 text-sm">Enter a valid email</span>
                    )}
                </div>
                <div className="font-bold text-white pb-3">
                    <label>Phone number*</label>
                    <input
                        className="w-full h-13 p-3 shadow-md border border-gray-400 rounded-lg"
                        type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    {errorCheck && phone === "" && (
                        <span className="text-red-500 text-sm">Phone number required</span>
                    )}
                    {errorCheck &&
                        phone !== "" &&
                        !phoneRegex.test(phone.replace(/\s/g, "")) && (
                            <span className="text-red-500 text-sm">
                                Phone must be 11 digits and must be valid
                            </span>
                        )}
                </div>
                <div className="font-bold text-white pb-3">
                    <label>Create a password*</label>
                    <input
                        className="w-full h-13 p-3 shadow-md border border-gray-400 rounded-lg" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {errorCheck && password === "" && (
                        <span className="text-red-500 text-sm">Password required</span>
                    )}
                    {errorCheck && password !== "" && password.length < 8 && (
                        <span className="text-red-500 text-sm">
                            Password must be at least 8 characters
                        </span>
                    )}
                </div>

                <button className="rounded-full text-white bg-teal-500 py-2 px-35 mx-auto font-bold my-3 mb-5 cursor-pointer" onClick={createAgent}>Create Agent</button>
            </div>
        </div>
    )
}