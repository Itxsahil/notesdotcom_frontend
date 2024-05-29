import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { uploadNoteApi } from '../Api/api';
const UploadNotes = () => {
    const [formData, setFormData] = useState({
        branch: '',
        sem: '',
        subject: '',
        title: '',
        module: '',
        file: null
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            file: e.target.files[0]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('branch', formData.branch);
        formDataToSend.append('sem', formData.sem);
        formDataToSend.append('subject', formData.subject);
        formDataToSend.append('title', formData.title);
        formDataToSend.append('module', formData.module);
        formDataToSend.append('file', formData.file);
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
            setError('No authorization token found. Please log in.');
            return;
        }
        try {
            const response = await axios.post(uploadNoteApi, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${accessToken}`
                }
            });
            console.log(response.data); // Assuming the server returns the uploaded note data
            // Reset form after successful upload if needed
            navigate('/get-notes')
        } catch (error) {
            console.error(error);
            // Handle error
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 0.5, duration: 0.5 }}
                className="bg-white p-8 rounded shadow-md max-w-md w-full">
                <h1 className="text-2xl font-bold mb-6 text-center">Upload Notes</h1>
                <form onSubmit={handleSubmit}>
                    {/* Form Inputs */}
                    {/* Branch */}
                    <div className="mb-4">
                        <label htmlFor="branch" className="block text-sm font-medium text-gray-700 mb-1">Branch</label>
                        <select
                            id="branch"
                            name="branch"
                            value={formData.branch}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        >
                            <option value="">Select Branch</option>
                            <option value="cs">Computer Science</option>
                            <option value="it">Information Technology</option>
                            <option value="mechanical">Mechanical</option>
                            <option value="electrical">Electrical</option>
                            <option value="civil">Civil</option>
                        </select>
                    </div>
                    {/* Semester */}
                    <div className="mb-4">
                        <label htmlFor="sem" className="block text-sm font-medium text-gray-700 mb-1">Semester</label>
                        <select
                            id="sem"
                            name="sem"
                            value={formData.sem}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        >
                            <option value="">Select Semester</option>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((semester) => (
                                <option key={semester} value={semester}>{semester}</option>
                            ))}
                        </select>
                    </div>
                    {/* Module */}
                    <div className="mb-4">
                        <label htmlFor="module" className="block text-sm font-medium text-gray-700 mb-1">Module</label>
                        <select
                            id="module"
                            name="module"
                            value={formData.module}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        >
                            <option value="">Select Module</option>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((module) => (
                                <option key={module} value={module}>{module}</option>
                            ))}
                        </select>
                    </div>
                    {/* Subject */}
                    <div className="mb-4">
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                            placeholder="Subject should be in lowercase"
                        />
                    </div>
                    {/* Title */}
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                            placeholder="Title will be the name of the file"
                        />
                    </div>
                    {/* File Upload */}
                    <div className="mb-4">
                        <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-1">File</label>
                        <input
                            type="file"
                            id="file"
                            name="file"
                            onChange={handleFileChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Upload
                    </button>
                </form>
            </motion.div>
        </motion.div>
    );
};
export default UploadNotes;
