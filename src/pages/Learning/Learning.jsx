import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Learning.css';

import { FaCircleCheck } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";

import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { motion } from 'framer-motion';

import { BiLogoTypescript } from "react-icons/bi";



const feedback = [
  { user: "Alice", comment: "This course made transitioning from React to TypeScript effortless. The clear, step-by-step guidance was perfect for self-learning!", star: 5},
  { user: "Bob", comment: "Learning at my own pace was great, and the practical examples made TypeScript much easier to grasp for React developers like me.", star: 4},
  { user: "Charlie", comment: "The course was well-organized and intuitive, making it easy to integrate TypeScript into my React projects. Worth every minute!", star: 5}
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
       <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My <span>Learning Progress</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Track your learning journey and explore new resources to enhance your skills.
      </motion.p>

      <motion.section 
        className="course-overview" 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2>Your <span>Courses</span></h2>
        <h3><BiLogoTypescript />Typescript</h3>
        <div className="course-list">
          {courses.map(course => (
            <div key={course.id} className="course-card">
              <h3>{course.name}</h3>
              {course.completed ? <FaCircleCheck className='blue' /> : <FaRegCircle />}
            </div>
          ))}
        </div>
        <button onClick={resetModules} className="cta">Reset modules</button>
      </motion.section>

      
      <section className="feedback">
        <h2>User <span>Feedback</span></h2>
        <div className="feedback-list">
          {feedback.map((item, index) => (
            <div key={index} className="feedback-card">
              <div className="stars">
                {Array.from({ length: 5 }, (_, i) => 
                  i < item.star ? <FaStar key={i} /> : <FaRegStar key={i} />
                )}
              </div>
              <p><strong>{item.user}</strong>: <br /> {item.comment}</p>
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
