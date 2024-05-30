import React from 'react';
import { motion } from 'framer-motion';

const ApplySuccess = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-purple-400 to-indigo-500 min-h-screen flex flex-col justify-center items-center">
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 0.5, duration: 0.5 }}
                className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-white mb-6">Request Submitted</h1>
                <p className="text-xl text-white mb-8">Applied request, wait for approval.</p>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-0 left-0 w-full text-center py-4 text-white">
                Made with ❤️ by Your Company
            </motion.div>
        </motion.div>
    );
};

export default ApplySuccess;
