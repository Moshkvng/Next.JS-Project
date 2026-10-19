export default function Question () {
    return (
        <div className="w-[91%] mx-auto mt-20">
            <div className="bg-[white] p-5 rounded-2xl shadow-2xl hover:bg-[#ddc7bb] ">
                <div className="bg-[#ddc7bb] hover:bg-white rounded-2xl p-5 broder border-blue-500">
                    <div className="grid grid-cols-2 gap-40  items-center">
                        <div className="col-1">
                            <p className="text-blue-500 font-bold text-md mb-2">Support</p>
                            <h1 className="text-3xl font-[700] text-black mb-2 ">We'er  here to help</h1>
                            <h1 className="text-md font-[500] text-gray-500 ">Questions about a listing, your account, or the Data Hub? Talk to our team.</h1>
                        </div>
                        <div className="col-2 ">
                            <input type="text" alt="email" placeholder="Your question" className=" p-2 bg-[white] h-11 w-60 mr-4 text-blue-500 text-sm mb-3 border-blue-500 border rounded-2xl" />
                             <button className="bg-blue-500 text-white px-10 py-2 rounded-2xl mt-4">SUbmit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}