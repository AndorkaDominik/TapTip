import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Learning.css';

import { FaCircleCheck } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";

const feedback = [
  { user: "Alice", comment: "The React course was incredibly insightful and well-structured!" },
  { user: "Bob", comment: "I loved the advanced JavaScript techniques covered in the course." },
  { user: "Charlie", comment: "CSS Grid and Flexbox section was very helpful and practical." }
];

const initialCourses = [
  { id: 1, name: 'Module 1: Introduction', moduleKey: 'module1', completed: false },
  { id: 2, name: 'Module 2: Transitioning', moduleKey: 'module2', completed: false },
  { id: 3, name: 'Module 3: Advanced TypeScript', moduleKey: 'module3', completed: false },
  { id: 4, name: 'Module 4: Testing & Debugging', moduleKey: 'module4', completed: false },
  { id: 5, name: 'Module 5: Deployment', moduleKey: 'module5', completed: false },
];

const MyLearning = () => {

  const [courses, setCourses] = useState ([]);

  useEffect(() => {
    // Get completedModules from localStorage
    const completedModules = JSON.parse(localStorage.getItem('completedModules'));
    console.log(completedModules);

    // If completedModules exists, map over initialCourses and update the completed status
    const updatedCourses = initialCourses.map(course => ({
      ...course,
      completed: completedModules ? completedModules[course.moduleKey] : false,
    }));

    // Set the updated courses in state
    setCourses(updatedCourses);
    console.log(updatedCourses);
  }, [initialCourses]); // Dependencies ensure the effect runs when initialCourses changes

  const resetModules = () => {
    localStorage.setItem('completedModules', JSON.stringify({
      "module1": false,
      "module2": false,
      "module3": false,
      "module4": false,
      "module5": false,
    }));
    console.log(localStorage.getItem('completedModules'));

    const completedModules = JSON.parse(localStorage.getItem('completedModules'));
    console.log(completedModules);

    // If completedModules exists, map over initialCourses and update the completed status
    const updatedCourses = initialCourses.map(course => ({
      ...course,
      completed: completedModules ? completedModules[course.moduleKey] : false,
    }));

    // Set the updated courses in state
    setCourses(updatedCourses);
    console.log(updatedCourses);
  }


  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  }



 
  return (
    <div className="my-learning">
      <h1>My <span>Learning Progress</span></h1>
      <p>Track your learning journey and explore new resources to enhance your skills.</p>

      <section className="course-overview">
        <h2>Your Courses</h2>
        <h3>Typescript</h3>
        <div className="course-list">
          {courses.map(course => (
            <div key={course.id} className="course-card">
              <h3>{course.name}</h3>
              {course.completed ? <FaCircleCheck className='blue' /> : <FaRegCircle />}
            </div>
          ))}
        </div>
        <button onClick={resetModules} className="cta">Reset modules</button>
      </section>

      
      <section className="feedback">
        <h2>User Feedback</h2>
        <div className="feedback-list">
          {feedback.map((item, index) => (
            <div key={index} className="feedback-card">
              <p><strong>{item.user}</strong>: {item.comment}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>Ready to enhance your skills?</h2>
        <div className="btn-container">
          <Link to="/typescript/" onClick={scrollToTop} className="cta-btn">Learn more</Link>
          <Link to="/join/" onClick={scrollToTop} className="cta-secondary">Join Us</Link>
        </div>
      </section>
    </div>
  );
};

export default MyLearning;
