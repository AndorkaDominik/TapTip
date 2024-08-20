import React from 'react'
import "./Practise.css"
import { courseData } from '../../constants/data'
import CourseContent from '../CourseContent/CourseContent'
import java from '../../assets/Logos/java.svg'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

const Practise = () => {

    function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth', 
    });
    }

  return (
     <div className='course'>

        <motion.img 
            src={java} 
            alt="" 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        />


        <motion.div           
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
        >
            <div className="course-content">
            <h1>Practise Through <span>Projects</span></h1>
            <p>Engage with real-world Java programming by building practical projects that reinforce your understanding of core concepts. Below are a series of projects, each focusing on different aspects of Java development. Each project includes a brief description, followed by the core concepts and features you’ll work on. These projects are designed to progressively challenge your skills, ensuring a comprehensive learning experience.</p>
            </div>
            <div className='module-container'>
                <Link to="/practise/project1/" onClick={scrollToTop}>
                    <div className='module-link'>
                        <p><strong>Project 1:</strong> Simple Calculator</p>
                        <p>Start now <FaArrowRight /></p>
                    </div>
                </Link>
                <Link to="/practise/project2/" onClick={scrollToTop}>
                    <div className='module-link'>
                        <p><strong>Project 2:</strong> Todo List Application</p>
                        <p>Start now <FaArrowRight /></p>
                    </div>
                </Link>
                <Link to="/practise/project3/" onClick={scrollToTop}>
                    <div className='module-link'>
                        <p><strong>Project 3:</strong> Currency Converter</p>
                        <p>Start now <FaArrowRight /></p>
                    </div>
                </Link>
                <Link to="/practise/project4/" onClick={scrollToTop}>
                    <div className='module-link'>
                        <p><strong>Project 4:</strong> Tic-Tac-Toe Game</p>
                        <p>Start now <FaArrowRight /></p>
                    </div>
                </Link>
                <Link to="/practise/project5/" onClick={scrollToTop}>
                    <div className='module-link'>
                        <p><strong>Project 5:</strong> Basic Inventory Management System</p>
                        <p>Start now <FaArrowRight /></p>
                    </div>
                </Link>
                <br />
            </div>
        </motion.div>
        
    </div>
  )
}

export default Practise