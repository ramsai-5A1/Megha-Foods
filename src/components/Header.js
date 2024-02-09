import {COMPANY_LOGO} from "../helper/constants"
import { CgProfile } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import { BsCartDashFill } from "react-icons/bs";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useState } from "react";


const Header = () => {

    const [field, setField] = useState(1);

    const handleOnClick = (id) => {
        setField(id);
    }

    return (
        <div className="h-50 bg-white flex flex-col shadow-lg">
            <div className="flex items-center justify-between">
                <img className="w-50 h-36 pl-10 p-2 m-1 " alt="logo" src={COMPANY_LOGO}/>

                <div>
                    <input className="w-72 h-10 border-black rounded-l-full border p-2" type="text" placeholder="Search for"/>
                    <button className="w-20 h-10 border rounded-r-full border-black bg-gray-500 hover:cursor-pointer hover:bg-gray-50">Search</button>
                </div>

                <div className="flex space-x-5 items-center pr-16">
                    <div className="flex space-x-2 items-center hover:cursor-pointer">
                        <CgProfile className="w-8 h-8"/>
                        <div className="flex flex-col">
                            <span className="font-bold">Account</span>
                            <span className="font-semibold text-sm">Login/Register</span>
                        </div>
                    </div>

                    <FaHeart className="w-5 h-5 hover:cursor-pointer"/>
                    <BsCartDashFill className="w-5 h-5 hover:cursor-pointer"/>

                    <div className="flex items-center hover:cursor-pointer">
                        <FaIndianRupeeSign className="w-3 h-3"/>
                        <span>0.00</span>
                    </div>
                </div>
            </div>

            <div >
                <ul className="flex space-x-4 p-2 justify-center font-bold">
                    <li className={`hover:cursor-pointer hover:bg-blue-950 hover:text-white p-2 m-2 ${field == 1 ? 'bg-blue-950 text-white' : 'bg-white'}`} onClick={() => handleOnClick(1)}>HOME</li>
                    <li className={`hover:cursor-pointer hover:bg-blue-950 hover:text-white p-2 m-2 ${field == 2 ? 'bg-blue-950 text-white' : 'bg-white'}`} onClick={() => handleOnClick(2)}>SHOP BY CATEGORY</li>
                    <li className={`hover:cursor-pointer hover:bg-blue-950 hover:text-white p-2 m-2 ${field == 3 ? 'bg-blue-950 text-white' : 'bg-white'}`} onClick={() => handleOnClick(3)}>ABOUT US</li>
                    <li className={`hover:cursor-pointer hover:bg-blue-950 hover:text-white p-2 m-2 ${field == 4 ? 'bg-blue-950 text-white' : 'bg-white'}`} onClick={() => handleOnClick(4)}>EVENT/BULK ORDERS</li>
                    <li className={`hover:cursor-pointer hover:bg-blue-950 hover:text-white p-2 m-2 ${field == 5 ? 'bg-blue-950 text-white' : 'bg-white'}`} onClick={() => handleOnClick(5)}>GIFTING</li>
                    <li className={`hover:cursor-pointer hover:bg-blue-950 hover:text-white p-2 m-2 ${field == 6 ? 'bg-blue-950 text-white' : 'bg-white'}`} onClick={() => handleOnClick(6)}>SUGGEST</li>
                    <li className={`hover:cursor-pointer hover:bg-blue-950 hover:text-white p-2 m-2 ${field == 7 ? 'bg-blue-950 text-white' : 'bg-white'}`} onClick={() => handleOnClick(7)}>TESTIMONIALS</li>
                    <li className={`hover:cursor-pointer hover:bg-blue-950 hover:text-white p-2 m-2 ${field == 8 ? 'bg-blue-950 text-white' : 'bg-white'}`} onClick={() => handleOnClick(8)}>CONTACT US</li>
                </ul>
            </div>
        </div>
    )
}

export default Header