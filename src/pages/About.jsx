// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center h-screen bg-gradient-to-br from-purple-500 to-pink-500">
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 0.5, duration: 0.5 }}
                className="max-w-md p-6 bg-white rounded shadow-lg">
                <h1 className="text-3xl font-bold mb-4">About Page</h1>
                <p className="text-gray-700 mb-6">Welcome to our About page! Here at our educational hub, we are dedicated to providing accessible and enriching learning experiences for all. Whether you're a student, educator, or lifelong learner, we believe that education is the key to unlocking your full potential. Our mission is to empower individuals through knowledge and inspiration. Join us on this journey as we strive to make a positive impact in the world through education.</p>
                <div className="bg-gray-200 p-4 rounded">
                    <p className="italic text-gray-600">"Education is the passport to the future, for tomorrow belongs to those who prepare for it today." - Malcolm X</p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default About;
