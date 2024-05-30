import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import NoteItem from '../components/NoteItem'; // Import NoteItem component
import { applyManagerApi, myNotesApi } from '../Api/api';

const Home = () => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);
    const navigate = useNavigate();

    const applyManager = async () => {
        try {
            const res = await axios.post(`${applyManagerApi}`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            console.log(res);
            if (res.status === 200) {
                navigate('/apply-success');
            }
        } catch (error) {
            console.error('Error applying to be a manager:', error);
        }
    };

    const fetchNotes = async (page) => {
        try {
            setLoadingMore(true);
            const response = await axios.post(myNotesApi, { page }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            if (page === 1) {
                setNotes(response.data.notes);
            } else {
                setNotes(prevNotes => [...prevNotes, ...response.data.notes]);
            }
            setCurrentPage(response.data.currentPage);
            setTotalPages(response.data.totalPages);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
            setLoadingMore(false);
        }
    };

    useEffect(() => {
        fetchNotes(1); // Load the first page on initial render
    }, []);

    const loadMore = () => {
        if (currentPage < totalPages) {
            fetchNotes(currentPage + 1);
        }
    };

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
                <h1 className="text-5xl font-bold text-white mb-6">Welcome to NoteHub</h1>
                <p className="text-xl text-white mb-8">Share your knowledge. Learn from others.</p>
                <p className="text-xl text-white mb-8">Apply for manager? </p>
                <button onClick={applyManager} className="bg-white text-indigo-600 py-3 px-6 rounded-md font-semibold hover:bg-indigo-600 hover:text-white transition duration-300">Get Started</button>
            </motion.div>
            <div className="mt-8 w-full max-w-4xl mx-auto px-4">
                {loading ? (
                    <p className="text-white text-center">Loading notes...</p>
                ) : error ? (
                    <p className="text-red-500 text-center">Error: {error}</p>
                ) : notes.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 gap-4">
                            {notes.map((note) => (
                                <NoteItem 
                                    key={note._id} 
                                    note={note} 
                                    setNotes={setNotes} 
                                    notes={notes} 
                                />
                            ))}
                        </div>
                        {currentPage < totalPages && (
                            <div className="text-center mt-4">
                                <button 
                                    onClick={loadMore} 
                                    className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
                                    disabled={loadingMore}
                                >
                                    {loadingMore ? 'Loading...' : 'Load More'}
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <p className="text-white text-center">No notes found</p>
                )}
            </div>
        </motion.div>
    );
};

export default Home;
