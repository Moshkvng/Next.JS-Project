"use client";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Nav from "../components/Nav";
import Footer from "../components/Footer";


export default function () {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [errorCheck, setErrorCheck] = useState(false);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(?:\+234\d{10}|0\d{10}|\d{11})$/;

    const router = useRouter();

    const submitForm = async (e) => {
        e.preventDefault ();
        if (firstName == "" || lastName == "" || email=="" || phone == "" || password == "" || !emailRegex.test(email) || phone == "" || !phoneRegex.test(phone.replace(/\s/g, "")) || password.length < 8 ) {
        setErrorCheck(true);
        return
        }

        try {
            const User = {
                first_name: firstName,
                last_name: lastName,
                email: email,
                phone: phone,    
                password: password
            }

            const resp = await axios.post ("http://property.reworkstaging.name.ng/v1/users",
                User
            );

            if (resp.data?.type == "EXISTS" || resp.data?.code == 304) {
            alert("Email or phone already exists");
                return;
            }


            if (resp.data?.id || resp.data?.data?.id) {
            console.log("Full response:", resp.data);
            alert("User created successfully");
            router.push("/userlogin");
            }
        } catch (err) {
            console.log (err);
        }
    };
    

    return (
        <div className="white">
            <Nav />
            <div className="mx-auto my-10 w-[35%] border border-5 border-blue-700 p-10 rounded-lg">
                <h3 className="text-xl text-[#A8A476] font-bold py-1 text-center">Create your <span className="text-blue-700">Boing</span> account</h3>
                <div>
                    <p className="text-sm text-gray-400 py-5">*Required fields</p>
                </div>
                <div className="font-bold pb-3">
                    <label htmlFor="Name">First name*</label>
                    <input className="w-full h-13 p-3 shadow-md border border-gray-400 rounded-lg" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    {errorCheck == true && firstName == "" ? <span className="text-red-500 text-sm">First name required</span> : null}
                </div>
                <div className="font-bold pb-3">
                    <label htmlFor="Name">Last name*</label>
                    <input className="w-full h-13  p-3 shadow-md border border-gray-400 rounded-lg" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    {errorCheck == true && lastName == "" ? <span className="text-red-500 text-sm">Last name required</span> : null}
                </div>
                <div className="font-bold pb-3">
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
                <div className="font-bold pb-3">
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
                <div className="font-bold pb-3">
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
                <Link href="/userlogin" >
                 <p className="text-gray-300 text-sm ">Already have an account? : <span className="text-xs text-blue-600 ml-1">LOGIN</span></p>
                </Link>

                <button className="rounded-full text-white bg-blue-700 py-2 px-35 mx-auto font-bold my-3 mb-5 cursor-pointer" onClick={submitForm}>Create Account</button>
            </div>
            <Footer />
        </div>
    )
}