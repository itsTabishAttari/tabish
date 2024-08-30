"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCartShopping, faLocation, faClose } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className="w-full  lg:h-[140vh] md:h-[100vh] sm:h-[80vh] h-[80vh] bg-cover" style={{ backgroundImage: "url('/bg3.jpg')" }}>
                <nav className={`w-full h-16 flex justify-around items-center sticky top-0 transition duration-500 ${isScrolled ? 'bg-red-500/90' : ''}`}>
                    <div className="logo">
                        <Image src="/logo3.png" alt="logo" width={90} height={90} />
                    </div>

                    {/* Center part - your location */}
                    <div className={`hidden address md:flex justify-center items-center gap-2 px-4 py-2 ${isScrolled ? '': ''}`}>
                        <FontAwesomeIcon icon={faLocationDot} width={20} height={20} /> New Address Select Your Address
                    </div>

                    {/* Right part - login, signup, cart */}
                    <div className={`flex items-center justify-center gap-5 ${isScrolled ? '' : ''}`}>
                        <a className="border-gray-500 border text-white font-bold py-2 px-4 rounded-xl hover:scale-110 transition duration-300" href="/">Login</a>
                        <a className="px-4 bg-yellow-500 hover:bg-yellow-600 py-2 font-bold rounded-xl text-white hover:scale-110 transition-transform  duration-300" href="/">SignUp</a>
                        <div className="flex justify-center items-center px-2 py-2 rounded-full bg-gray-800">
                            <a className="text-white flex items-center" href="/">
                                <FontAwesomeIcon icon={faCartShopping} width={30} height={30} />
                                <div className="ml-2">1</div>
                            </a>
                        </div>
                    </div>

                </nav>

                <div className="  p- lg:ml-[90px] md:ml-[60px] sm:ml-[40px] ml-[40px] w-[70%] mt-[20%] ">
                  <div className="search_city text-white font-bold sm:text-xl md:text-[210%] ">
                        <h1>Fresh food and groceries you adore, delivered to your home.</h1>
                  </div>
                  <div className=" block  lg:flex items-center justify-start lg:gap-4  mt-5">
                        <div className="flex items-center justify-start  bg-white px-16 py-4 lg:w-[75%] border-b-2 border-blue-500">
                               <FontAwesomeIcon className="bg-white" width={20} height={20} icon={faLocation}  />
                            <input type="text" placeholder="Enter your street/town" className="ml-1 w-full  bg-white outline-none border-none  text-lg " />
                               <FontAwesomeIcon className="bg-white" icon={faClose} width={20} height={20} />
                            </div>
                            <button className=" bg-yellow-500  hover:bg-yellow-600 lg:mt-0 mt-1 w-full lg:w-[25%] lg:py-4  md:py-2 py-2 px-10 rounded text-white  transition-transform  duration-300">Find Food</button>
                  </div>
                </div>
            </header>
           
        </>
    );
}

export default Navbar;
