"use client";

import { useState } from "react";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import { useRouter } from "next/navigation";

const API =
    process.env.NEXT_PUBLIC_API_URL || "http://property.reworkstaging.name.ng/v1";

const MAX_IMAGE_BYTES = 2 * 1024 * 1024; // 2 MB
const IMAGE_FIELD_NAMES = ["avatar", "image", "file"];

const extractToken = (res) => {
    const d = res?.data;
    if (typeof d === "string") return d;
    return (
        d?.token ??
        d?.access_token ??
        d?.accessToken ??
        d?.jwt ??
        res?.token ??
        res?.access_token
    );
};

const extractId = (res) =>
    res?._id ||
    res?.id ||
    res?.data?._id ||
    res?.data?.id ||
    res?.data?.agent?._id ||
    res?.data?.agent?.id;

// This API can return HTTP 200 with a failure code inside the body
const isFailure = (resp, body) =>
    !resp.ok ||
    (typeof body?.code === "number" && body.code >= 300) ||
    body?.type === "EXISTS" ||
    body?.type === "NOT_EXIST" ||
    body?.type === "ERROR";

export default function CreateAgent() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [imageFiles, setImageFiles] = useState([]);
    const [imageErr, setImageErr] = useState("");
    const [errorCheck, setErrorCheck] = useState(false);
    const [loading, setLoading] = useState(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(?:\+234\d{10}|\d{11})$/;

    const router = useRouter();

    // Tries one field name with one token
    const tryUpload = async (agentId, file, token, field) => {
        const formData = new FormData();
        formData.append(field, file);

        const resp = await fetch(`${API}/agents/${agentId}/resource`, {
            method: "PUT",
            headers: { Authorization: `Bearer ${token}` },
            body: formData, // don't set Content-Type here
        });

        const text = await resp.text();
        let body = {};
        try {
            body = JSON.parse(text);
        } catch {
            /* not JSON */
        }

        console.log(`IMAGE [${field}] STATUS:`, resp.status, "BODY:", text || "(empty)");
        return !isFailure(resp, body);
    };

    // Tries every field name with the given token
    const uploadWithToken = async (agentId, file, token) => {
        for (const field of IMAGE_FIELD_NAMES) {
            if (await tryUpload(agentId, file, token, field)) return true;
        }
        return false;
    };

    const createAgent = async (e) => {
        e.preventDefault();
        setErrorCheck(true);

        const cleanPhone = phone.replace(/\s/g, "");
        const cleanEmail = email.trim();

        if (
            fullName.trim() === "" ||
            cleanEmail === "" ||
            cleanPhone === "" ||
            password === "" ||
            !emailRegex.test(cleanEmail) ||
            !phoneRegex.test(cleanPhone) ||
            password.length < 8 ||
            imageErr
        ) {
            return;
        }

        // The merchant's login token (works for both "remember me" modes)
        const merchantToken =
            localStorage.getItem("token") ?? sessionStorage.getItem("token");

        if (!merchantToken) {
            alert("Please log in as a merchant first.");
            router.push("/logins");
            return;
        }

        setLoading(true);

        try {
            // 1. Merchant creates the agent
            const resp = await fetch(`${API}/merchants/agents`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${merchantToken}`,
                },
                body: JSON.stringify({
                    full_name: fullName.trim(),
                    company: "BOING",
                    email: cleanEmail,
                    phone: cleanPhone,
                    password: password,
                }),
            });

            const data = await resp.json().catch(() => ({}));
            console.log("Agent Creation Response:", data);

            if (isFailure(resp, data)) {
                if (data?.type === "NOT_EXIST") {
                    alert(
                        "The saved login is not a valid merchant login. Clear localStorage, log in again with your merchant account, then retry."
                    );
                } else {
                    alert(data.msg || data.message || "Failed to create agent");
                }
                return;
            }

            const agentId = extractId(data);
            let imageMessage = "";

            // 2. Upload image (optional, never blocks the agent creation)
            if (imageFiles.length > 0) {
                if (!agentId) {
                    console.warn("No agent ID in response, skipping image upload", data);
                    imageMessage =
                        "The profile image could not be uploaded (no agent ID returned).";
                } else {
                    let uploaded = await uploadWithToken(
                        agentId,
                        imageFiles[0],
                        merchantToken
                    );

                    // Retry as the new agent
                    if (!uploaded) {
                        const loginResp = await fetch(`${API}/auth/login`, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ email: cleanEmail, password }),
                        });
                        const loginData = await loginResp.json().catch(() => ({}));
                        console.log("Auto-login response:", loginData);

                        const agentToken = extractToken(loginData);
                        if (!isFailure(loginResp, loginData) && agentToken) {
                            uploaded = await uploadWithToken(
                                agentId,
                                imageFiles[0],
                                agentToken
                            );
                        }
                    }

                    if (!uploaded) {
                        imageMessage =
                            "The profile image could not be uploaded. The server returned an error, so the agent can add a photo later.";
                    }
                }
            }

            alert(
                imageMessage
                    ? `Agent created successfully! ${imageMessage}`
                    : "Agent created successfully!"
            );
            router.push("/agentlogin");
        } catch (err) {
            console.error("Error occurred:", err);
            alert("An unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    };

    const inputClass =
        "w-full p-3 shadow-md border border-gray-600 rounded-lg bg-teal-950 text-white";

    return (
        <div className="bg-teal-950 min-h-screen text-white">
            <Nav />
            <div className="min-h-screen bg-teal-950 md:flex justify-center items-center">
                <form
                    onSubmit={createAgent}
                    noValidate
                    className="mx-auto my-10 w-full md:w-[35%] border-2 border-teal-500 p-10 rounded-lg bg-teal-900 shadow-xl"
                >
                    <h3 className="text-xl text-teal-400 font-bold py-1 text-center">
                        Create your property agent
                    </h3>
                    <p className="text-sm text-gray-400 py-5">*Required fields</p>

                    <div className="mb-4">
                        <label htmlFor="avatar" className="mb-2 block text-[#BBBBAC]">
                            Profile Image (optional, max 2 MB)
                        </label>
                        <input
                            id="avatar"
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                                const files = Array.from(e.target.files || []).slice(0, 1);
                                if (files[0] && files[0].size > MAX_IMAGE_BYTES) {
                                    setImageErr("Image is too large. Choose one under 2 MB.");
                                    setImageFiles([]);
                                    return;
                                }
                                setImageErr("");
                                setImageFiles(files);
                            }}
                            className="w-full rounded-lg border border-teal-700 bg-teal-900 p-3 text-[#BBBBAC]"
                        />
                        {imageErr && (
                            <span className="text-red-400 text-sm">{imageErr}</span>
                        )}
                    </div>

                    <div className="font-bold pb-3">
                        <label htmlFor="fullName">Full name*</label>
                        <input
                            id="fullName"
                            className={inputClass}
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        {errorCheck && fullName.trim() === "" && (
                            <span className="text-red-400 text-sm">Full name required</span>
                        )}
                    </div>

                    <div className="font-bold pb-3">
                        <label htmlFor="email">Email*</label>
                        <input
                            id="email"
                            className={inputClass}
                            type="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errorCheck && email.trim() === "" && (
                            <span className="text-red-400 text-sm">Email required</span>
                        )}
                        {errorCheck && email.trim() !== "" && !emailRegex.test(email.trim()) && (
                            <span className="text-red-400 text-sm">Enter a valid email</span>
                        )}
                    </div>

                    <div className="font-bold pb-3">
                        <label htmlFor="phone">Phone number*</label>
                        <input
                            id="phone"
                            className={inputClass}
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        {errorCheck && phone === "" && (
                            <span className="text-red-400 text-sm">Phone number required</span>
                        )}
                        {errorCheck &&
                            phone !== "" &&
                            !phoneRegex.test(phone.replace(/\s/g, "")) && (
                                <span className="text-red-400 text-sm">
                                    Phone must be 11 digits and must be valid
                                </span>
                            )}
                    </div>

                    <div className="font-bold pb-3">
                        <label htmlFor="password">Create a password*</label>
                        <input
                            id="password"
                            className={inputClass}
                            type="password"
                            autoComplete="new-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errorCheck && password === "" && (
                            <span className="text-red-400 text-sm">Password required</span>
                        )}
                        {errorCheck && password !== "" && password.length < 8 && (
                            <span className="text-red-400 text-sm">
                                Password must be at least 8 characters
                            </span>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-full text-white bg-teal-500 py-3 font-bold my-3 cursor-pointer hover:bg-teal-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? "Creating Agent..." : "Create Agent"}
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
}