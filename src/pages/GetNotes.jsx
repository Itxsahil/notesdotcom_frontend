import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetNotes = () => {
    const [formData, setFormData] = useState({
        branch: '',
        sem: '',
        subject: '',
        module: ''
    });

    const [notes, setNotes] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setNotes([]); // Reset notes when a new search is made
        setPage(1); // Reset to first page
        fetchNotes(1);
        setIsFilterOpen(false)
    };
    const fetchNotes = async (pageNumber) => {
        setIsLoading(true);
        try {
            const response = await axios.get('http://localhost:4040/api/v1/notes/getNotes', {
                params: {
                    branch: formData.branch,
                    sem: formData.sem,
                    subject: formData.subject,
                    module: formData.module,
                    page: pageNumber
                }
            });
            const { notes, currentPage, totalPages } = response.data;
            setNotes(prevNotes => [...prevNotes, ...notes]);
            setPage(currentPage);
            setTotalPages(totalPages);
        } catch (error) {
            console.error('Error fetching notes:', error);
        } finally {
            setIsLoading(false);
        }
    };
useEffect(()=>{
    fetchNotes()
},[])

    const loadMoreNotes = () => {
        if (page < totalPages) {
            fetchNotes(page + 1);
        }
    };

    const handleDownload = (url) => {
        window.open(url, '_blank');
    };

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
            <div className={`bg-white md:w-1/4 p-4 ${isFilterOpen ? 'block' : 'hidden'}`}>
                <h2 className="text-xl font-semibold mb-4">Filters</h2>
                <form onSubmit={handleSubmit}>
                    {/* Filter inputs */}
                    {/* Branch */}
                    <div className="mb-4">
                        <label htmlFor="branch" className="block text-sm font-medium text-gray-700 mb-1">Branch</label>
                        <select
                            id="branch"
                            name="branch"
                            value={formData.branch}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label htmlFor="sem" className="block text-sm font-medium text-gray-700 mb-1">Semester</label>
                            <select
                                id="sem"
                                name="sem"
                                value={formData.sem}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            >
                                <option value="">Select Semester</option>
                                {[1, 2, 3, 4, 5, 6, 7, 8].map((semester) => (
                                    <option key={semester} value={semester}>{semester}</option>
                                ))}
                            </select>
                        </div>
                        {/* Subject */}
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="Subject should be in lowercase"
                            />
                        </div>
                        {/* Module */}
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label htmlFor="module" className="block text-sm font-medium text-gray-700 mb-1">Module</label>
                            <select
                                id="module"
                                name="module"
                                value={formData.module}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            >
                                <option value="">Select Module</option>
                                {[1, 2, 3, 4, 5, 6, 7, 8].map((module) => (
                                    <option key={module} value={module}>{module}</option>
                                ))}
                            </select>
                        </div>
                    {/* Add other filter inputs similarly */}
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Search
                    </button>
                </form>
            </div>
            <div className="md:w-3/4 p-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold mb-6 text-blue-600">Get Notes</h1>
                    <button
                        onClick={toggleFilter}
                        className=" bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        {isFilterOpen ? 'Close Filters' : 'Open Filters'}
                    </button>
                </div>
                {/* Display Notes */}
                {/* Your notes display logic here */}
                </div>
            {/* Display Notes */}
            <div className="container mx-auto mt-8">
                <h2 className="text-xl font-semibold mb-4">Notes Found:</h2>
                <ul className="space-y-4">
                    {notes.map((note, index) => (
                        <li key={index} className="bg-gray-50 p-4 rounded-md shadow flex justify-between items-center">
                            <span className="text-gray-800">{note.title}</span>
                            <button
                                onClick={() => handleDownload(note.file)}
                                className="text-blue-600 underline hover:text-blue-800 ml-4"
                            >
                                Download
                            </button>
                        </li>
                    ))}
                </ul>
                {page < totalPages && (
                    <button
                        onClick={loadMoreNotes}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-4"
                    >
                        Load More
                    </button>
                )}
                {isLoading && (
                    <div className="mt-4 text-center">
                        <p>Loading...</p>
                    </div>
                )}
            
            </div>
        </div>
    );
};

export default GetNotes;

