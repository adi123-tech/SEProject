// Home.js
import React, { useState } from 'react';
import './Home.css';
import Footer from '../Footer/Footer';

// Sample course data (replace it with your actual course data)
const courses = [
  { title: 'Course 1', price: '$99', rating: '4.5' },
  { title: 'Course 2', price: '$149', rating: '4.2' },
  { title: 'Course 3', price: '$79', rating: '4.7' },
  { title: 'Course 1', price: '$99', rating: '4.5' },
  { title: 'Course 2', price: '$149', rating: '4.2' },
  { title: 'Course 3', price: '$79', rating: '4.7' },
  { title: 'Course 1', price: '$99', rating: '4.5' },
  { title: 'Course 2', price: '$149', rating: '4.2' },
  { title: 'Course 3', price: '$79', rating: '4.7' },
  // Add more courses as needed
];

function Home() {
  const [showGrid, setShowGrid] = useState(false);

  const toggleGrid = () => {
    setShowGrid(!showGrid);
  };

  return (
    <div className="container">
      <div className='Firstrow'>
        <div className="text-container">
          <h2 className='text'>
            Find & Compare 
            <br/>Courses to Improve 
            <br/>your Skills!
            <br />
          </h2>
          <h1 className='smalltext'>Get the best courses at a discounted price <br /> like nowhere. </h1>
        </div>
        <div className="image-container">
          <img src="https://coursekhoj.com/wp-content/uploads/2023/01/home4-3-1375x1536.png" alt="" />
        </div>
      </div>
      
      {!showGrid && (
        <button className="explore-button" onClick={toggleGrid}>Explore Courses</button>
      )}

      {showGrid && (
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div className="course" key={index}>
              <h2>{course.title}</h2>
              <p>Price: {course.price}</p>
              <p>Rating: {course.rating}</p>
            </div>
          ))}
        </div>
      )}
      <Footer/>
    </div>
  );
}

export default Home;
