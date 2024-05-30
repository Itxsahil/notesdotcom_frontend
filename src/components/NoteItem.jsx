import React, { useState } from 'react';
import axios from 'axios';
import { deleteApi } from '../Api/api';

const NoteItem = ({ note, setNotes, notes, index }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleDownload = (fileUrl) => {
        window.open(fileUrl, '_blank');
    };

    const handleDelete = async (noteId) => {
        try {
            await axios.post(`${deleteApi}/${noteId}`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setNotes(notes.filter(note => note._id !== noteId));
        } catch (err) {
            console.error(err.message);
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="bg-white p-4 rounded shadow relative">
            <h3 className="text-lg font-bold text-indigo-600">{note.title}</h3>
            <p className="text-gray-800">{note.content}</p>
            <p className="text-gray-600 text-sm">Created at: {new Date(note.createdAt).toLocaleString()}</p>
            <button
                onClick={toggleMenu}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
                &#x22EE;
            </button>
            {menuOpen && (
                <div className="absolute top-8 right-2 bg-white border rounded shadow-lg">
                    <button
                        onClick={() => handleDownload(note.file)}
                        className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                        Download
                    </button>
                    <button
                        onClick={() => handleDelete(note._id)}
                        className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                        Delete
                    </button>
                </div>
            )}
        </div>
    );
};

export default NoteItem;
