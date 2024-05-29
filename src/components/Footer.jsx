import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4 flex flex-col items-center justify-between sm:flex-row">
                <div className="mb-4 sm:mb-0">
                    <p className="text-center sm:text-left">
                        Connect with me on social media
                    </p>
                </div>
                <div className="flex space-x-6">
                    <a href="https://github.com/Itxsahil" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FaGithub size={30} />
                    </a>
                    <a href="https://x.com/SahilKh32102162?s=09" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FaTwitter size={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/sahil-khan-545b5b227/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FaLinkedin size={30} />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100056419887256&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FaFacebook size={30} />
                    </a>
                </div>
            </div>
            <div className="mt-4 text-center text-sm">
                © 2024 Sahil Khan. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
