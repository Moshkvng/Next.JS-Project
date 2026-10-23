"use client";
// import AdminSidebar from "@/app/components/sidebar/page";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
export default function Shoppage() {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    const getProperties = async () => {
        setLoading(true);
        

        const token = 
            localStorage.getItem("merchant_token") || 
            localStorage.getItem("agent_token") || 
            localStorage.getItem("token") || 
            localStorage.getItem("user_token");

        const headers = token ? { authorization: `Bearer ${token}` } : {};

        try {

            let resp = await fetch("http://property.reworkstaging.name.ng/v1/properties?offset=0&limit=100", { headers });
            let result = await resp.json();
            let propertyList = Array.isArray(result.data) ? result.data : (Array.isArray(result) ? result : []);


            if (propertyList.length === 0) {
                const agentResp = await fetch("http://property.reworkstaging.name.ng/v1/merchants/agents?offset=0&limit=100", { headers });
                const agentData = await agentResp.json();
                const agents = Array.isArray(agentData.data) ? agentData.data : [];

                if (agents.length > 0) {
                    const requests = agents.map((agent) =>
                        fetch(`http://property.reworkstaging.name.ng/v1/properties?agent=${agent.id}`, { headers })
                            .then((res) => res.json())
                            .catch(() => ({}))
                    );
                    const results = await Promise.all(requests);
                    propertyList = results.flatMap((res) => (Array.isArray(res.data) ? res.data : []));
                }
            }

            console.log("FETCHED PROPERTIES:", propertyList);
            setProperties(propertyList);
        } catch (err) {
            console.error("Error fetching properties:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProperties();
    }, []);

    return (
        <div className="">
            <div className="mb-4 w-[91%] mx-auto mt-20">
                <h1 className="text-3xl font-[700] text-blue-500 mb-2">Houses for Sale in Estates, Abuja</h1>
                <p className="text-black  w-270 text-md">There are 3,210 houses for sale in Estates as of 14 Oct 2026, with an average price of ₦300M. Every listing is posted by an estate agent or developer you can contact directly — filter by price, type, furnishing and recency to find the right home.</p>
            </div>
            <div className="bg-[#f5f7fb]  py-15">
                <div className="w-[91%] mx-auto ">
                    <p className="text-md text-gray-500 font-bold">1–21 of 3,210 properties for sale</p>
                </div>
                                    <div className="grid grid-cols-3 gap-5 w-[91%] mx-auto mt-20">
                        {properties.length > 0 ? (
                            properties.map((item) => (

                                <Link href={`/properties/${item.id || item._id}`} key={item.id || item._id} className="rounded-lg shadow-md bg-white">
                                    <div className="flex justify-between text-sm p-2 rounded-t-lg bg-blue-900">
                                        <p className="text-orange-500">PREMIUM PLUS</p>
                                        <p className="text-green-500">Top listing</p>
                                    </div>
                                    <img
                                        src={item.image || (Array.isArray(item.images) ? item.images[0] : "") || "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"}
                                        alt={item.name}
                                        className="h-48 w-full object-cover"
                                    />
                                    <div className="p-5">
                                        <p className="text-3xl">${item.price}</p>
                                        <p className="text-red-500 text-sm">Stand alone mansion</p>
                                        <p className="text-2xl text-green-600">{item.name}</p>
                                        <p className="text-2xl text-gray-500 py-3">{item.description}</p>
                                        <div className="flex">
                                            <FaLocationDot className="text-gray-500 mt-1" />
                                            <p className="text-sm text-gray-400 pl-1">{item.city}, Abuja</p>
                                        </div>
                                    </div>
                                </Link>

                            ))
                        ) : (<p>Properties Loading, please wait...</p>)}
                    </div>
            </div> 

        </div>
    )
}


