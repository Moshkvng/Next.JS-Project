"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";


export default function () {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [errorCheck, setErrorCheck] = useState(false);
    const [loginError, setLoginError] = useState("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const router = useRouter();


    const submitForm = async (e) => {
        e.preventDefault();
        setLoginError("");
        setErrorCheck(true);


        if (email == "" || password == "" || !emailRegex.test(email) || password.length < 8 ) {
            return;
        }

        try {
            const Merchant = {
                email: email,
                password: password,
            };

            const resp = await axios.post(
                "http://property.reworkstaging.name.ng/v1/auth/login",
                Merchant
            );
            
            console.log(resp.data)

            if (resp.data?.type === "SUCCESS" || resp.data?.code === 200) {
                localStorage.setItem("merchantId", resp.data.data.id);
                localStorage.setItem("token", resp.data.data.token);  
                localStorage.setItem("role", resp.data.data.role);

                alert("Login successful");
                router.push("/admin");
            } 
            
                else if (resp.data?.type == "TOKEN_EXPIRED" || resp.data?.code == 419) {
                alert ("Token expired, re-login")
            } else {
                setLoginError("Wrong email or password");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="bg-teal-900">
            <nav className="flex justify-between items-center gap-5 p-5 shadow-sm bg-teal-900 text-lg text-white font-bold">
                <Link href="/admin">
                    <img className="rounded-full" src="/logo.jpg" alt="Logo" width={150} />
                </Link>
                <ul>
                    <Link className="rounded-lg bg-teal-700 px-3 py-2" href="/admin/account">👤Create Account</Link>
                </ul>
            </nav>
            <div className="mx-auto my-20 w-[35%] border border-5 border-teal-500 p-10 rounded-lg">
                <div className="flex justify-center py-2">

                </div>
                <h3 className="text-xl text-[#A8A476] font-bold py-1 text-center">Signin to your <span className="text-teal-500">Boing</span> account</h3>
                <div></div>
                <div>
                    <p className="text-sm text-gray-400 py-5">Enter your email and password and you are good to go!</p>
                </div>

                <div className="font-bold text-white pb-3">
                    <label>Email*</label>
                    <input
                        className="w-full h-13 pt-1 shadow-md border border-gray-400 rounded-lg" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {errorCheck && email === "" && (
                        <span className="text-red-500 text-sm">Email required</span>
                    )}
                    {errorCheck && email !== "" && !emailRegex.test(email) && (
                        <span className="text-red-500 text-sm">Enter a valid email</span>
                    )}
                </div>

                <div className="font-bold text-white pb-3">
                    <label>Password*</label>
                    <input
                        className="w-full h-13 pt-1 shadow-md border border-gray-400 rounded-lg" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {errorCheck && password === "" && (
                        <span className="text-red-500 text-sm">Password required</span>
                    )}
                    {errorCheck && password !== "" && password.length < 8 && (
                        <span className="text-red-500 text-sm">
                            Password must be at least 8 characters
                        </span>
                    )}
                    {loginError && (
                        <p className="text-red-500 text-sm mb-3">{loginError}</p>
                    )}
                </div>
                <p className="text-xs text-gray-400">Securing your personal information is our priority. See our <u className="text-teal-500 cursor-pointer">Privacy measures</u></p>

                <button className="rounded-full text-white bg-teal-500 py-2 px-40 font-bold my-3 mb-10 cursor-pointer" onClick={submitForm}>Signin</button>
            </div>
        </div>
    )
}