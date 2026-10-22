
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

export default function () {

    const [properties, setProperties] = useState([]);
    const [id, setId] = useState("");

    const getProperties = async () => {
        const token = localStorage.getItem("token");

        try {

            const agentResp = await fetch(
                "http://property.reworkstaging.name.ng/v1/merchants/agents?offset=0&limit=100",
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                }
            );

            const agentData = await agentResp.json();

            const agents = Array.isArray(agentData.data)
                ? agentData.data
                : [];

            const requests = agents.map((agent) =>
                fetch(
                    `http://property.reworkstaging.name.ng/v1/properties?agent=${agent.id}&verified=true`,
                    {
                        headers: {
                            authorization: `Bearer ${token}`,
                        },
                    }
                ).then((resp) => resp.json())
            );

            const results = await Promise.all(requests);

            const allProperties = results.flatMap((result) =>
                Array.isArray(result.data) ? result.data : []
            );

            console.log("ALL MERCHANT PROPERTIES:", allProperties);
            setProperties(allProperties);

        } catch (err) {
            console.log(err);
        }
    };


    useEffect(() => {
        getProperties();
    }, []);


    return (
        <div className="bg-gray-100">
            <Nav />
            <div className="w-[95%] mx-auto p-5 shadow-md bg-white mb-10">
                <div>
                    <hr className="text-gray-300 py-5" />
                    <h2 className="text-3xl text-blue-700 font-bold">BOING Houses for Sale in Estates, Abuja</h2>
                    <p className="text-gray-500 py-3">There are hundreds of houses for sale in Estates as of 13 Oct 2026, with an average price of ₦300M. Every listing posted is readily available as seen in the picture, you can visit properties through an estate agent approved by BOING or contact us directly — filter by price, type, furnishing and recency to find the right home.</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Bedrooms</p>
                    <div className="flex py-3 gap-3">
                        <p className="px-3 py-1 rounded-full bg-gray-100 border border-gray-200">1 Bedrooms</p>
                        <p className="px-3 py-1 rounded-full bg-teal-100 border border-gray-200">2 Bedrooms</p>
                        <p className="px-3 py-1 rounded-full bg-orange-100 border border-gray-200">3 Bedrooms</p>
                        <p className="px-3 py-1 rounded-full bg-green-100 border border-gray-200">4 Bedrooms</p>
                        <p className="px-3 py-1 rounded-full bg-blue-200 border border-gray-200">5 Bedrooms</p>
                        <p className="px-3 py-1 rounded-full bg-pink-100 border border-gray-200">6 Bedrooms</p>
                        <p className="px-3 py-1 rounded-full bg-teal-200 border border-gray-200">7+ Bedrooms</p>
                    </div>
                    <p className="text-sm text-gray-500 py-3">Property types</p>
                    <div className="flex gap-3">
                        <p className="px-3 py-1 rounded-full bg-teal-400 border border-gray-200">Block of flats</p>
                        <p className="px-3 py-1 rounded-full bg-blue-400 border border-gray-200">Terraced Duplexes</p>
                        <p className="px-3 py-1 rounded-full bg-red-300 border border-gray-200">Terraced Bungalows</p>
                        <p className="px-3 py-1 rounded-full bg-green-300 border border-gray-200">Semi-detached Bungalows</p>
                        <p className="px-3 py-1 rounded-full bg-yellow-300 border border-gray-200">Detached Bungalows</p>
                        <p className="px-3 py-1 rounded-full bg-gray-100 border border-gray-200">Semi-detached Duplexes</p>
                        <p className="px-3 py-1 rounded-full bg-purple-300 border border-gray-200">Detached Duplexes</p>
                    </div>
                </div>
            </div>

            <div className="w-[95%] mx-auto p-5 shadow-md bg-gray-150 gap-5 grid grid-cols-[70%_30%]">
                <div>
                    <div className="grid grid-cols-2 gap-5">
                        {properties.length > 0 ? (
                            properties.map((item) => (

                                <Link href={`/properties/${item.id}`} key={item.id} className="rounded-lg shadow-md bg-white">
                                    <div className="flex justify-between text-sm p-2 rounded-t-lg bg-blue-900">
                                        <p className="text-orange-500">PREMIUM PLUS</p>
                                        <p className="text-green-500">Top listing</p>
                                    </div>
                                    <img
                                        src={item.image || item.images[0]}
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

                <div className="bg-gray-100">
                    <div className="bg-white p-2 mr-5 rounded-lg">
                        <div className="flex justify-between p-3">
                            <h4>Advanced Filters</h4>
                            <h4>clear all</h4>
                        </div>
                        <hr className="text-gray-200 text-2xl" />
                        <div className="flex justify-between p-3">
                            <h4>Location</h4>
                            <h4 className="font-bold">Abuja</h4>
                        </div>
                        <hr className="text-gray-200 text-2xl" />
                        <div className="flex justify-between p-3">
                            <h4>Category</h4>
                            <select>
                                <option value="sale">For Sale</option>
                                <option value="rent">For Rent</option>
                                <option value="rent">Short Let</option>
                            </select>
                        </div>
                        <hr className="text-gray-200 text-2xl" />
                        <div className="flex justify-between p-3">
                            <h4>Type</h4>
                            <select>
                                <option value="house">House</option>
                                <option value="house">Flat</option>
                            </select>
                        </div>
                        <hr className="text-gray-200 text-2xl" />
                        <div className="flex justify-between p-3">
                            <h4>Price range</h4>
                            <select>
                                <option value="price">Any Price</option>
                                <option value="price">200m-290m</option>
                                <option value="price">300m-390m</option>
                                <option value="price">400m-490m</option>
                                <option value="price">500m +</option>
                            </select>
                        </div>
                        <hr className="text-gray-200 text-2xl" />
                        <div className="flex justify-between p-3">
                            <h4>Bedrooms</h4>
                            <select>
                                <option value="bed">Any beds</option>
                                <option value="bed">One beds</option>
                                <option value="bed">Two beds</option>
                                <option value="bed">Three beds</option>
                                <option value="bed">Four beds</option>
                                <option value="bed">Five beds</option>
                            </select>
                        </div>
                        <hr className="text-gray-200 text-2xl" />
                        <div className="flex justify-between p-3">
                            <h4>Amenities</h4>
                            <select>
                                <option value="amenities">Any</option>
                                <option value="amenities">Customized</option>
                            </select>
                        </div>
                        <hr className="text-gray-200 text-2xl" />
                    </div>
                    <div className="bg-white p-2 mr-5 rounded-lg my-5">
                        <h3 className="text-lg text-center font-bold">Can't find what you want?</h3>
                        <p className="text-gray-500 py-2">Make inquiries directly with an agent, Let an agent help you find your desired house in Abuja</p>
                        <button className="text-white text-center rounded-full bg-blue-600 px-30 mx-auto cursor-pointer py-1">Call an Agent</button>
                    </div>
                    <div className="bg-white p-2 mr-5 rounded-lg my-5">
                        <div className="flex">
                            <FaShareAlt className="mt-2" />
                            <h3 className="text-lg text-center pl-2 font-bold">Share this list</h3>
                        </div>
                        <div className="flex justify-center gap-10">
                            <FaFacebookF className="rounded-full text-blue-600 text-5xl bg-teal-300 p-2" />
                            <FaWhatsapp className="rounded-full text-blue-600 text-5xl bg-teal-300 p-2" />
                            <FaInstagram className="rounded-full text-blue-600 text-5xl bg-teal-300 p-2" />
                            <FaXTwitter className="rounded-full text-blue-600 text-5xl bg-teal-300 p-2" />
                        </div>
                    </div>
                </div>
            </div>
            <hr className="text-gray-200 py-5 text-2xl" />
            <div className="w-[95%] mx-auto p-5 shadow-md bg-gray-150">
                <div className="flex justify-between p-5">
                    <h2 className="text-xl font-bold">Most Viewed Houses</h2>
                    <u className="cursor-pointer text-blue-500">View More</u>
                </div>
                <div className="grid grid-cols-4 gap-5">
                    <div className="rounded-lg shadow-md bg-white">
                        <img src="/image.jpg" alt="" />
                        <div className="p-5">
                            <p className="text-3xl font-bold">$320,000,000</p>
                            <p className="text-red-500 text-sm">Block of Flat</p>
                            <p className="text-2xl text-blue-600">4 Bedroom mansion</p>
                            <div className="flex">
                                <FaLocationDot className="text-gray-500 mt-1" />
                                <p className="text-sm text-gray-400 pl-1">Gusape District, Abuja</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-md bg-white">
                        <img src="/images.jpg" alt="" />
                        <div className="p-5">
                            <p className="text-3xl font-bold">$310,000,000</p>
                            <p className="text-red-500 text-sm">Detached duplex for sale</p>
                            <p className="text-2xl text-blue-600">4 Bedroom Detached Duplex</p>
                            <div className="flex">
                                <FaLocationDot className="text-gray-500 mt-1" />
                                <p className="text-sm text-gray-400 pl-1">Karsana District, Abuja</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-md bg-white">
                        <img src="/img1.jpg" alt="" />
                        <div className="p-5">
                            <p className="text-3xl font-bold">$240,000,000</p>
                            <p className="text-red-500 text-sm">Block of Flat</p>
                            <p className="text-2xl text-blue-600">4 Bedroom Terraced</p>
                            <div className="flex">
                                <FaLocationDot className="text-gray-500 mt-1" />
                                <p className="text-sm text-gray-400 pl-1">Gusape District, Abuja</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-md bg-white">
                        <img src="/img.jpg" alt="" />
                        <div className="p-5">
                            <p className="text-3xl font-bold">$210,000,000</p>
                            <p className="text-red-500 text-sm">Semi-detached</p>
                            <p className="text-2xl text-blue-600">3 Bedroom Terraced</p>
                            <div className="flex">
                                <FaLocationDot className="text-gray-500 mt-1" />
                                <p className="text-sm text-gray-400 pl-1">Asokoro District, Abuja</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="text-gray-200 py-5 text-2xl" />
            <div className="w-[95%] mx-auto p-5 shadow-md bg-gray-150">
                <div className="flex justify-between p-5">
                    <h2 className="text-xl font-bold">Recently Viewed Houses</h2>
                    <u className="cursor-pointer text-blue-500">View More</u>
                </div>
                <div className="grid grid-cols-4 gap-5">
                    <div className="rounded-lg shadow-md bg-white">
                        <div className="flex justify-between text-sm p-2 rounded-t-lg bg-blue-900">
                            <p className="text-orange-500">PREMIUM PLUS</p>
                            <p className="text-green-500">Top listing</p>
                        </div>
                        <img src="/images.jpg" alt="" />
                        <div className="p-5">
                            <p className="text-3xl font-bold">$470,000,000</p>
                            <p className="text-red-500 text-sm">Stand alone mansion</p>
                            <p className="text-2xl text-blue-600">6 Bedroom mansion</p>
                            <div className="flex">
                                <FaLocationDot className="text-gray-500 mt-1" />
                                <p className="text-sm text-gray-400 pl-1">Gusape District, Abuja</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-md bg-white">
                        <div className="flex justify-between text-sm p-2 rounded-t-lg bg-blue-900">
                            <p className="text-orange-500">PREMIUM PLUS</p>
                            <p className="text-green-500">Top listing</p>
                        </div>
                        <img src="/image.jpg" alt="" />
                        <div className="p-5">
                            <p className="text-3xl font-bold">$290,000,000</p>
                            <p className="text-red-500 text-sm">Detached duplex for sale</p>
                            <p className="text-2xl text-blue-600">4 Bedroom Detached Duplex</p>
                            <div className="flex">
                                <FaLocationDot className="text-gray-500 mt-1" />
                                <p className="text-sm text-gray-400 pl-1">Karsana District, Abuja</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-md bg-white">
                        <img src="/img2.jpg" alt="" />
                        <div className="p-5">
                            <p className="text-3xl font-bold">$240,000,000</p>
                            <p className="text-red-500 text-sm">Block of Flat</p>
                            <p className="text-2xl text-blue-600">4 Bedroom Terraced</p>
                            <div className="flex">
                                <FaLocationDot className="text-gray-500 mt-1" />
                                <p className="text-sm text-gray-400 pl-1">Gusape District, Abuja</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-md bg-white">
                        <img src="/img5.jpg" alt="" />
                        <div className="p-5">
                            <p className="text-3xl font-bold">$210,000,000</p>
                            <p className="text-red-500 text-sm">Semi-detached</p>
                            <p className="text-2xl text-blue-600">3 Bedroom Terraced</p>
                            <div className="flex">
                                <FaLocationDot className="text-gray-500 mt-1" />
                                <p className="text-sm text-gray-400 pl-1">Asokoro District, Abuja</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="text-gray-200 py-5 text-2xl" />
            <div className="w-[95%] mx-auto p-5 shadow-md bg-gray-150">
                <div className="flex justify-between p-5">
                    <h2 className="text-xl font-bold">Recently Sold Houses</h2>
                    <u className="cursor-pointer text-blue-500">View More</u>
                </div>
                <div className="grid grid-cols-4 gap-5">
                    <div className="rounded-lg shadow-md bg-white">
                        <img src="/img4.jpg" alt="" />
                        <div className="p-5">
                            <p className="text-3xl font-bold">$470,000,000</p>
                            <p className="text-red-500 text-sm">Stand alone mansion</p>
                            <p className="text-2xl text-blue-600">6 Bedroom mansion</p>
                            <div className="flex">
                                <FaLocationDot className="text-gray-500 mt-1" />
                                <p className="text-sm text-gray-400 pl-1">Gusape District, Abuja</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-md bg-white">
                        <img src="/img.jpg" alt="" />
                        <div className="p-5">
                            <p className="text-3xl font-bold">$290,000,000</p>
                            <p className="text-red-500 text-sm">Detached duplex for sale</p>
                            <p className="text-2xl text-blue-600">4 Bedroom Detached Duplex</p>
                            <div className="flex">
                                <FaLocationDot className="text-gray-500 mt-1" />
                                <p className="text-sm text-gray-400 pl-1">Karsana District, Abuja</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-md bg-white">
                        <img src="/img2.jpg" alt="" />
                        <div className="p-5">
                            <p className="text-3xl font-bold">$240,000,000</p>
                            <p className="text-red-500 text-sm">Block of Flat</p>
                            <p className="text-2xl text-blue-600">4 Bedroom Terraced</p>
                            <div className="flex">
                                <FaLocationDot className="text-gray-500 mt-1" />
                                <p className="text-sm text-gray-400 pl-1">Gusape District, Abuja</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-md bg-white">
                        <img src="/image.jpg" alt="" />
                        <div className="p-5">
                            <p className="text-3xl font-bold">$210,000,000</p>
                            <p className="text-red-500 text-sm">Semi-detached</p>
                            <p className="text-2xl text-blue-600">3 Bedroom Terraced</p>
                            <div className="flex">
                                <FaLocationDot className="text-gray-500 mt-1" />
                                <p className="text-sm text-gray-400 pl-1">Asokoro District, Abuja</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="text-gray-200 py-5 text-2xl" />
            <div className="w-[95%] mx-auto p-5 shadow-md bg-gray-150">
                <div className="flex justify-between p-5">
                    <h2 className="text-xl font-bold">Houses You May Like</h2>
                    <u className="cursor-pointer text-blue-500">View More</u>
                </div>
                <div className="grid grid-cols-4 gap-5">
                    <div className="rounded-lg shadow-md bg-white">
                        <img src="/img5.jpg" alt="" />
                        <div className="p-5">
                            <p className="text-3xl font-bold">$170,000,000</p>
                            <p className="text-red-500 text-sm">Stand alone mansion</p>
                            <p className="text-2xl text-blue-600">2 Bedroom mansion</p>
                            <div className="flex">
                                <FaLocationDot className="text-gray-500 mt-1" />
                                <p className="text-sm text-gray-400 pl-1">Jahi District, Abuja</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-md bg-white">
                        <img src="/img3.jpg" alt="" />
                        <div className="p-5">
                            <p className="text-3xl font-bold">$140,000,000</p>
                            <p className="text-red-500 text-sm">Detached duplex for sale</p>
                            <p className="text-2xl text-blue-600">2 Bedroom Detached Duplex</p>
                            <div className="flex">
                                <FaLocationDot className="text-gray-500 mt-1" />
                                <p className="text-sm text-gray-400 pl-1">Gwagwalada District, Abuja</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-md bg-white">
                        <img src="/img4.jpg" alt="" />
                        <div className="p-5">
                            <p className="text-3xl font-bold">$280,000,000</p>
                            <p className="text-red-500 text-sm">Block of Flat</p>
                            <p className="text-2xl text-blue-600">4 Bedroom Terraced</p>
                            <div className="flex">
                                <FaLocationDot className="text-gray-500 mt-1" />
                                <p className="text-sm text-gray-400 pl-1">Garki District, Abuja</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-md bg-white">
                        <img src="/images.jpg" alt="" />
                        <div className="p-5">
                            <p className="text-3xl font-bold">$220,000,000</p>
                            <p className="text-red-500 text-sm">Semi-detached</p>
                            <p className="text-2xl text-blue-600">3 Bedroom Terraced</p>
                            <div className="flex">
                                <FaLocationDot className="text-gray-500 mt-1" />
                                <p className="text-sm text-gray-400 pl-1">Nyanya District, Abuja</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[95%] mx-auto p-5 shadow-md bg-gray-150">
                <div className="mb-5">
                    <h4 className="text-teal-700 text-lg font-bold pt-5 pb-3">AREA GUIDE</h4>
                    <h2 className="text-5xl text-blue-700 pb-5">About Abuja, Nigeria</h2>
                    <p className="max-w-200">Abuja is the capital city of Nigeria. It is located in the centre of Nigeria, within the Federal Capital Territory (FCT). Abuja is a planned city, and was built mainly in the 1980s. It officially became Nigeria's capital on 12 December 1991, replacing Lagos, which is still the country's most populous city. At the 2006 census, the city of Abuja had a population of 776,298, making it one of the top ten most populous cities in Nigeria. The unofficial metropolitan area of Abuja is well over three million, which would make it the fourth largest urban area in Nigeria only surpassed by Lagos, Kano and Ibadan.</p>
                </div>
                <div>
                    <h4 className="text-teal-700 text-lg font-bold pt-5 pb-3">FAQ</h4>
                    <h2 className="text-5xl text-blue-700 pb-5">Frequently asked questions</h2>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="shadow-sm bg-gray-200 p-5">
                            <h3 className="text-lg font-bold">What is Boing's average price of houses for sale in Estates, Abuja?</h3>
                            <p>The average price of houses for sale in Estates, Abuja is ₦300,000,000.</p>
                        </div>
                        <div className="shadow-sm bg-gray-200 p-5">
                            <h3 className="text-lg font-bold">What is the price of the most expensive houses for sale at Boing, Abuja?</h3>
                            <p>Boing's prices for houses for sale in Estates, Abuja go up to around ₦3,500,000,000.</p>
                        </div>
                        <div className="shadow-sm bg-gray-200 p-5">
                            <h3 className="text-lg font-bold">What is Boing's price of the cheapest houses for sale in Estates, Abuja?</h3>
                            <p>Boing's prices for houses for sale in Estates, Abuja start from around ₦30,000,000.</p>
                        </div>
                        <div className="shadow-sm bg-gray-200 p-5">
                            <h3 className="text-lg font-bold">What is Boing's price of the cheapest houses for sale in Estates, Abuja?</h3>
                            <p>Boing's prices for houses for sale in Estates, Abuja start from around ₦30,000,000.</p>
                        </div>
                        <div className="shadow-sm bg-gray-200 p-5">
                            <h3 className="text-lg font-bold">What is Boing's price of the cheapest houses for sale in Estates, Abuja?</h3>
                            <p>Boing's prices for houses for sale in Estates, Abuja start from around ₦30,000,000.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}