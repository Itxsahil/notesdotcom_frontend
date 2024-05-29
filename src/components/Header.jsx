import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if access token exists in cookie or local storage
        const accessToken = localStorage.getItem('accessToken'); // Adjust accordingly if you're using cookies
        if (accessToken) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-blue-600 p-4">
            <nav className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    NotesDotCom
                </div>
                <ul className="hidden md:flex space-x-4">
                    <li>
                        <NavLink to="/" 
                        className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700":"text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" 
                        className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700":"text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/upload-notes" 
                        className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700":"text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }>
                            Upload Notes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/get-notes" 
                        className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700":"text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }>
                            Get Notes
                        </NavLink>
                    </li>
                    {/* Conditionally render based on authentication */}
                    {!isLoggedIn && (
                        <>
                            <li>
                                <NavLink to="/login" 
                                className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700":"text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }>
                                    Login
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/signup" 
                                className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700":"text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }>
                                    Sign Up
                                </NavLink>
                            </li>
                        </>
                    )}
                </ul>
                <div className="md:hidden">
                    <button onClick={toggleMenu} 
                    className="text-white focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                            />
                        </svg>
                    </button>
                </div>
            </nav>
            {isMenuOpen && (
                <div className="md:hidden">
                    <ul className="flex flex-col space-y-4 mt-4">
                        <li>
                            <NavLink to="/" 
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700":"text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            } onClick={toggleMenu}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" 
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700":"text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            } onClick={toggleMenu}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/upload-notes" 
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700":"text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            } onClick={toggleMenu}>
                                Upload Notes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/get-notes" 
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700":"text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            } onClick={toggleMenu}>
                                Get Notes
                            </NavLink>
                        </li>
                        {/* Conditionally render based on authentication */}
                        {!isLoggedIn && (
                            <>
                                <li>
                                    <NavLink to="/login" 
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700":"text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    } onClick={toggleMenu}>
                                        Login
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/signup" 
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700":"text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    } onClick={toggleMenu}>
                                        Sign Up
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
