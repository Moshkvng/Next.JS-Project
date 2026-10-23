"use client";
import Nav from "@/app/components/admin_nav/Nav";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";


export default function () {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [errorCheck, setErrorCheck] = useState(false);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(?:\+234\d{10}|0\d{10}|\d{11})$/;

    const router = useRouter();


    const submitForm = async (e) => {
        e.preventDefault ();
        if (fullName == ""  || email=="" || phone == "" || password == "" || !emailRegex.test(email) || phone == "" || !phoneRegex.test(phone.replace(/\s/g, "")) || password.length < 8 ) {
        setErrorCheck(true);
        return
        }

        try {
            const Merchant = {
                full_name: fullName,
                email: email,
                phone: phone,    
                password: password
            }

            const resp = await axios.post ("http://property.reworkstaging.name.ng/v1/merchants",
                Merchant
            );

            if (resp.data?.type == "EXISTS" || resp.data?.code == 304) {
            alert("Email or phone already exists");
                return;
            }


            if (resp.data?.id || resp.data?.data?.id) {
            console.log("Full response:", resp.data);
            alert("Merchant created successfully");
            router.push("/login");
            }
        } catch (err) {
            console.log (err);
        }
    }; 

    return (
        <div className="bg-teal-900">
            <Nav/>
            <div className="mx-auto my-10 w-[35%] border border-5 border-teal-500 p-10 rounded-lg">
                <h3 className="text-xl text-[#A8A476] font-bold py-1 text-center">Create your <span className="text-teal-500">Boing</span> account</h3>
                <div>
                    <p className="text-sm text-gray-400 py-5">*Required fields</p>
                </div>
                <div className="font-bold text-white pb-3">
                    <label htmlFor="Name">Full name*</label>
                    <input className="w-full h-13 p-3 shadow-md border border-gray-400 rounded-lg" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    {errorCheck == true && fullName == "" ? <span className="text-red-500 text-sm">Full name required</span> : null}
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

                <button className="rounded-full text-white bg-teal-500 py-2 px-35 mx-auto font-bold my-3 mb-5 cursor-pointer" onClick={submitForm}>Create Account</button>
            </div>
        </div>
    )
}