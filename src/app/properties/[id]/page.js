"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Footer from "@/app/components/Footer";
import Nav from "@/app/components/Nav";

export default function () {

    const { id } = useParams();
    const router = useRouter();
    const [property, setProperty] = useState({});

    useEffect(() => {
        const getProperty = async () => {
            const token = localStorage.getItem("token");
            try {
                const resp = await fetch(
                    `http://property.reworkstaging.name.ng/v1/properties/${id}`,
                    {
                        headers: {
                            authorization: `Bearer ${token}`,
                        },
                    }
                );

                const data = await resp.json();
                const property = data.data || data;
                
                console.log(property)
                if (property.id) {
                    setProperty(property);
                }
            } catch (err) {
                console.log(err);
            }
        };

        getProperty();
    }, [id]);


    const handleBookAppointment = () => {
        const propId = property.id || property._id;
        if (!propId) return;

        router.push(
            `/appointmentpage?propertyId=${propId}&propertyName=${encodeURIComponent(
                property.name || ""
            )}`
        );
    };

    return (
        <div className="bg-gray-100">
            <Nav />
            <h2 className="text-2xl text-gray-500 text-center p-5">This is the Single House Page</h2>
            <div className="w-[95%] mx-auto p-5 shadow-md bg-white mb-10">
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
            <div className="w-[95%] mx-auto p-5 shadow-sm bg-gray-150 gap-5 grid grid-cols-[70%_30%]">
                {property.id ? (
                    <div className="rounded-lg bg-gray-100 flex gap-5">
                        <div className="rounded-lg">
                            <img src={property.image} alt="" />
                        </div>
                        <div className="p-5">
                            <p className="text-3xl">{property.price}</p>
                            <p className="text-red-500 text-sm">Stand alone mansion</p>
                            <p className="text-2xl text-teal-900">{property.name}</p>
                            <p className="text-2xl text-gray-500 py-3 max-w-100">{property.description}</p>
                            <p className="text-2xl text-gray-500 py-3 max-w-100">{[property.amenities]}</p>
                            <div className="flex">
                                <FaLocationDot className="text-gray-500 mt-1" />
                                <p className="text-sm text-gray-400 pl-1">{property.city} District, Abuja</p>
                            </div>
                            <div className="m-2">
                                <button className="px-3 py-1 cursor-pointer rounded-lg text-white bg-green-700">BUY</button>
                            </div>
                            <p className="font-bold text-teal-600 text-xl px-5">Or</p>
                            <div className="m-2">
                                <button 
                                    onClick={handleBookAppointment}
                                    className="px-4 py-2 rounded-lg font-bold text-white bg-blue-700 text-lg cursor-pointer"
                                >
                                    BOOK AN APPOINTMENT
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (<p>Property loading, please wait...</p>)}

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
            <Footer />
        </div>
    )
}