// Profile.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Profile.css'; // Import CSS file for styling

function Profile() {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState('John Doe');
  const [position, setPosition] = useState('Software Engineer at XYZ Company');
  const [location, setLocation] = useState('City, Country');
  const [experience, setExperience] = useState([
    'Software Engineer at XYZ Company',
    'Web Developer at ABC Corporation'
  ]);
  const [education, setEducation] = useState([
    'Master of Computer Science, University of ABC',
    'Bachelor of Engineering in Computer Science, University of XYZ'
  ]);
  const [skills, setSkills] = useState(['JavaScript', 'React', 'Node.js']);
  const [summary, setSummary] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sapien sit amet elit vehicula volutpat. Nullam id eros eu tortor sodales pharetra.'
  );

  const locationState = useLocation().state;

  useEffect(() => {
    if (locationState) {
      const { name, position, location, experience, education, skills, summary } = locationState;
      setName(name);
      setPosition(position);
      setLocation(location);
      setExperience(experience);
      setEducation(education);
      setSkills(skills);
      setSummary(summary);
    }
  }, [locationState]);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
    // Save the updated information to the backend or perform any other necessary actions
  };

  return (
    <div className="profile-container">
      {/* Profile Picture */}
      <div className="profile-picture">
        <img src="chrome://branding/content/about-logo@2x.png" alt="Profile" />
      </div>
      
      {/* Basic Information */}
      <div className="basic-info">
        <h1 className="name">{editing ? <input value={name} onChange={(e) => setName(e.target.value)} /> : name}</h1>
        <p className="position">{editing ? <input value={position} onChange={(e) => setPosition(e.target.value)} /> : position}</p>
        <p className="location">{editing ? <input value={location} onChange={(e) => setLocation(e.target.value)} /> : location}</p>
      </div>
      
      {/* Experience */}
      <div className="experience">
        <h2 className="section-title">Experience</h2>
        <ul>
          {experience.map((exp, index) => (
            <li key={index}>{editing ? <input value={exp} onChange={(e) => {
              const newExperience = [...experience];
              newExperience[index] = e.target.value;
              setExperience(newExperience);
            }} /> : exp}</li>
          ))}
        </ul>
      </div>
      
      {/* Education */}
      <div className="education">
        <h2 className="section-title">Education</h2>
        <ul>
          {education.map((edu, index) => (
            <li key={index}>{editing ? <input value={edu} onChange={(e) => {
              const newEducation = [...education];
              newEducation[index] = e.target.value;
              setEducation(newEducation);
            }} /> : edu}</li>
          ))}
        </ul>
      </div>
      
      {/* Skills */}
      <div className="skills">
        <h2 className="section-title">Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{editing ? <input value={skill} onChange={(e) => {
              const newSkills = [...skills];
              newSkills[index] = e.target.value;
              setSkills(newSkills);
            }} /> : skill}</li>
          ))}
        </ul>
      </div>
      
      {/* Summary */}
      <div className="summary">
        <h2 className="section-title">Summary</h2>
        {editing ? <textarea value={summary} onChange={(e) => setSummary(e.target.value)} /> : <p>{summary}</p>}
      </div>

      {/* User activity */}
      <div className="User-activity">
        <h2 className="section-title">User Activity</h2>
        Remaining..... :)
      </div>
      
      {/* Edit Button */}
      <div className="edit-button">
        {editing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <Link to="/profile/edit"><button onClick={handleEdit}>Edit Info</button></Link>
        )}
      </div>
    </div>
  );
}

export default Profile;
