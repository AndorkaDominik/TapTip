import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Learning.css';

import { FaCircleCheck } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";

import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { motion } from 'framer-motion';

import { BiLogoTypescript } from "react-icons/bi";
import { FaJava } from "react-icons/fa";



const feedback = [
  { user: "Alice", comment: "This course made transitioning from React to TypeScript effortless. The clear, step-by-step guidance was perfect for self-learning!", star: 5},
  { user: "Bob", comment: "Learning at my own pace was great, and the practical examples made TypeScript much easier to grasp for React developers like me.", star: 4},
  { user: "Charlie", comment: "The course was well-organized and intuitive, making it easy to integrate TypeScript into my React projects. Worth every minute!", star: 5}
];

const initialCourses = [
  { id: 1, name: 'Module 1: Introduction to Java', moduleKey: 'module1', completed: false },
  { id: 2, name: 'Module 2: Object-Oriented Programming in Java', moduleKey: 'module2', completed: false },
  { id: 3, name: 'Module 3: Advanced Java Programming', moduleKey: 'module3', completed: false },
  { id: 4, name: 'Module 4: Building Java Applications', moduleKey: 'module4', completed: false },
  { id: 5, name: 'Module 5: Java Syntax and Conventions', moduleKey: 'module5', completed: false },
  { id: 6, name: 'Module 6: Data Structures in Java', moduleKey: 'module6', completed: false },
  { id: 7, name: 'Module 7: Basic Input and Output', moduleKey: 'module7', completed: false },
  { id: 8, name: 'Module 8: Debugging and Error Handling', moduleKey: 'module8', completed: false },
  { id: 9, name: 'Module 9: Java Development Tools', moduleKey: 'module9', completed: false },
  { id: 10, name: 'Module 10: Collections Framework', moduleKey: 'module10', completed: false },
  { id: 11, name: 'Module 11: Java Streams and Lambdas', moduleKey: 'module11', completed: false },
  { id: 12, name: 'Module 12: Multithreading and Concurrency', moduleKey: 'module12', completed: false },
  { id: 13, name: 'Module 13: Networking in Java', moduleKey: 'module13', completed: false },
  { id: 14, name: 'Module 14: Java Database Connectivity (JDBC)', moduleKey: 'module14', completed: false },
  { id: 15, name: 'Module 15: Java Reflection and Annotations', moduleKey: 'module15', completed: false },
];
const reviewedProjects = [
  { id: 1, name: 'Project 1: Introduction to Java', moduleKey: 'project1', completed: false },
  { id: 2, name: 'Project 2: Object-Oriented Programming in Java', moduleKey: 'project2', completed: false },
  { id: 3, name: 'Project 3: Advanced Java Programming', moduleKey: 'project3', completed: false },
  { id: 4, name: 'Project 4: Building Java Applications', moduleKey: 'project4', completed: false },
  { id: 5, name: 'Project 5: Java Syntax and Conventions', moduleKey: 'project5', completed: false },
];

const MyLearning = () => {

  const [courses, setCourses] = useState ([]);
  const [projects, setProjects] = useState ([]);
    
  
  useEffect(() => {
    const completedModules = JSON.parse(localStorage.getItem('completedModules'));
    console.log(completedModules);

    const updatedCourses = initialCourses.map(course => ({
      ...course,
      completed: completedModules ? completedModules[course.moduleKey] : false,
    }));

    setCourses(updatedCourses);
    console.log(updatedCourses);
  }, [initialCourses]); 



  useEffect(() => {
    const completedProjects = JSON.parse(localStorage.getItem('completedProjects'));
    console.log(completedProjects);

    const updatedProjects = reviewedProjects.map(project => ({
      ...project,
      completed: completedProjects ? completedProjects[project.moduleKey] : false,
    }));
    // Set the updated courses in state
    setProjects(updatedProjects);
    console.log(updatedProjects);
  }, [reviewedProjects]); // Dependencies ensure the effect runs when initialCourses changes

  const resetModules = () => {
    localStorage.setItem('completedModules', JSON.stringify({
      "module1": false,
      "module2": false,
      "module3": false,
      "module4": false,
      "module5": false,
      "module6": false,
      "module7": false,
      "module8": false,
      "module9": false,
      "module10": false,
      "module11": false,
      "module12": false,
      "module13": false,
      "module14": false,
      "module15": false,
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
  const resetProjects = () => {
    localStorage.setItem('completedProjects', JSON.stringify({
      "project1": false,
      "project2": false,
      "project3": false,
      "project4": false,
      "project5": false,
    }));
    console.log(localStorage.getItem('completedProjects'));

    const completedProjects = JSON.parse(localStorage.getItem('completedProjects'));
    console.log(completedProjects);

    // If completedModules exists, map over initialCourses and update the completed status
    const updatedProjects = reviewedProjects.map(project => ({
      ...project,
      completed: completedProjects ? completedProjects[project.moduleKey] : false,
    }));

    // Set the updated courses in state
    setProjects(updatedProjects);
    console.log(updatedProjects);
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
        <h3><FaJava />Java</h3>
        <div className="course-list">
          {courses.map(course => (
            <div key={course.id} className="course-card">
              <h3>{course.name}</h3>
              {course.completed ? <FaCircleCheck className='blue' /> : <FaRegCircle />}
            </div>
          ))}
        </div>
        <button onClick={resetModules} className="cta">Reset modules</button>
        <br />
        <br />
        <br />
        <h2>Reviewed <span>Projects</span></h2>
        <h3><FaJava />Java Practise</h3>
        <div className="course-list">
          {projects.map(course => (
            <div key={course.id} className="course-card">
              <h3>{course.name}</h3>
              {course.completed ? <FaCircleCheck className='blue' /> : <FaRegCircle />}
            </div>
          ))}
        </div>
        <button onClick={resetProjects} className="cta">Reset projects</button>
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
