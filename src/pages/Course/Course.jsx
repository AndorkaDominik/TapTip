import React from 'react'
import "./Course.css"
import { courseData } from '../../constants/data'
import CourseContent from '../CourseContent/CourseContent'
import typeScript from '../../assets/Logos/typescript.svg'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Course = () => {

    function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth', 
    });
    }

  return (
    <div className='course'>

        <img src={typeScript} alt="" />

        <CourseContent courseData={courseData.preview} />

        <div className='module-container'>
            <Link to="/typescript/module1/" onClick={scrollToTop}>
                <div className='module-link'>
                    <p><strong>Module 1:</strong> Introduction</p>
                    <p>Start now <FaArrowRight /></p>
                </div>
            </Link>
            <Link to="/typescript/module2/" onClick={scrollToTop}>
                <div className='module-link'>
                    <p><strong>Module 2:</strong> Transitioning</p>
                    <p>Start now <FaArrowRight /></p>
                </div>
            </Link>
            <Link to="/typescript/module3/" onClick={scrollToTop}>
                <div className='module-link'>
                    <p><strong>Module 3:</strong> Advanced TypeScript</p>
                    <p>Start now <FaArrowRight /></p>
                </div>
            </Link>
            <Link to="/typescript/module4/" onClick={scrollToTop}>
                <div className='module-link'>
                    <p><strong>Module 4:</strong> Testing & Debugging</p>
                    <p>Start now <FaArrowRight /></p>
                </div>
            </Link>
            <Link to="/typescript/module5/" onClick={scrollToTop}>
                <div className='module-link'>
                    <p><strong>Module 5:</strong> Deployment</p>
                    <p>Start now <FaArrowRight /></p>
                </div>
            </Link>
            
        </div>
    </div>
  )
}

export default Course