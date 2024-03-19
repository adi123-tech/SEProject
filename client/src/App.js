// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Profile from './Profile';
import EditProfile from './Components/EditProfile/EditProfile'; // Import the EditProfile component

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/profile/edit" element={<EditProfile />} /> {/* Route for editing profile */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
