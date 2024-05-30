import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import UploadNotes from './pages/UploadNotes';
import GetNotes from './pages/GetNotes';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ApplySuccess from './pages/ApplySuccess'; // Import ApplySuccess page

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="upload-notes" element={<UploadNotes />} />
          <Route path="get-notes" element={<GetNotes />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="apply-success" element={<ApplySuccess />} /> {/* Add ApplySuccess route */}
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
