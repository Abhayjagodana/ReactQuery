// src/Pages/Header.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-blue-200 text-black shadow-md">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="text-2xl font-bold">Abhi Jagodana</div>

                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>

                <nav
                    className={`${isOpen ? 'block' : 'hidden'
                        } md:flex md:items-center md:space-x-6`}
                >
                    <NavLink to="/" className="block py-2 md:py-0 hover:underline">
                        Home
                    </NavLink>
                    <NavLink to="/FetchOld" className="block py-2 md:py-0 hover:underline">
                        FetchOld
                    </NavLink>
                    <NavLink to="/FetchRq" className="block py-2 md:py-0 hover:underline">
                        FetchRq
                    </NavLink>

                    

                </nav>
            </div>
        </header>
    );
};

export default Header;
