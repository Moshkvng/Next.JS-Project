"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function () {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [errorCheck, setErrorCheck] = useState(false);
    const [loginError, setLoginError] = useState("");
    const router = useRouter();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const submitForm = async (e) => {
        e.preventDefault();
        setLoginError("");
        setErrorCheck(true);

        if (email == "" || password == "" || !emailRegex.test(email) || password.length < 8 ) {
            return;
        }

        try {
            const User = {
                email: email,
                password: password,
            };

            const resp = await axios.post(
                "http://property.reworkstaging.name.ng/v1/auth/login",
                User
            );
            
            console.log(resp.data)

            if (resp.data?.type === "SUCCESS" || resp.data?.code === 200) {

                localStorage.setItem("userId", resp.data.data.id || resp.data.data._id);
                localStorage.setItem("user_id", resp.data.data.id || resp.data.data._id);
                localStorage.setItem("user_token", resp.data.data.token); 
                localStorage.setItem("token", resp.data.data.token); 
                localStorage.setItem("role", resp.data.data.role || "user");

                alert("Login successful");
                router.push("/");
            } 
            
            else if (resp.data?.type == "TOKEN_EXPIRED" || resp.data?.code == 419) {
                alert ("Token expired, re-login")
            } else {
                setLoginError("Wrong email or password");
            }
        } catch (err) {
            console.log(err);
            setLoginError("Invalid email or password");
        }
    };

    return (
        <div className="bg-white">
            <Nav />
            <div className="mx-auto my-20 w-[35%] border border-5 border-blue-700 p-10 rounded-lg">
                <div className="flex justify-center py-2">

                </div>
                <h3 className="text-xl text-[#A8A476] font-bold py-1 text-center">Signin to your <span className="text-blue-700">Boing</span> account</h3>
                <div></div>
                <div>
                    <p className="text-sm text-gray-400 py-5">Enter your email and password and you are good to go!</p>
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
                    <label>Password*</label>
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
                    {loginError && (
                        <p className="text-red-500 text-sm mb-3">{loginError}</p>
                    )}
                </div>
              <Link href="/createuser" >  <p className="text-gray-400 text-xs">Dont't have an Account <span className="text-teal-500 text-xs underline">Create</span></p></Link>
                <p className="text-xs text-gray-400">Securing your personal information is our priority. See our <u className="text-teal-500 cursor-pointer">Privacy measures</u></p>

                <button className="rounded-full text-white bg-blue-700 py-2 px-40 font-bold my-3 mb-10 cursor-pointer" onClick={submitForm}>Signin</button>
            </div>
            <Footer />
        </div>
    )
}