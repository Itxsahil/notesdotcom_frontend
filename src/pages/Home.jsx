// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-gradient-to-r from-purple-400 to-indigo-500 min-h-screen flex flex-col justify-center items-center">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-white mb-6">Welcome to NoteShare</h1>
                <p className="text-xl text-white mb-8">Share your knowledge. Learn from others.</p>
                <Link to="/upload-notes" className="bg-white text-indigo-600 py-3 px-6 rounded-md font-semibold hover:bg-indigo-600 hover:text-white transition duration-300">Get Started</Link>
            </div>
            <div className="absolute bottom-0 left-0 w-full text-center py-4 text-white">
                Made with ❤️ by Your Company
            </div>
        </div>
    );
};

export default Home;
