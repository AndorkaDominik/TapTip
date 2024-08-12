import React from 'react'

//components
import Footer from './components/Footer/Footer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

//pages
import Home from './pages/Home/Home.jsx';
import Course from './pages/Course/Course.jsx';
import { courseData } from './constants/data'
import CourseContent from './pages/CourseContent/CourseContent.jsx';
import Learning from './pages/Learning/Learning.jsx';
import Join from './pages/Join/Join.jsx';

import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path="/typescript" element={<Course />} />
        <Route path="/typescript/module1" element={<CourseContent courseData={courseData.module1} module={"module1"} />} />
        <Route path="/typescript/module2" element={<CourseContent courseData={courseData.module2} module={"module2"} />} />
        <Route path="/typescript/module3" element={<CourseContent courseData={courseData.module3} module={"module3"} />} />
        <Route path="/typescript/module4" element={<CourseContent courseData={courseData.module4} module={"module4"} />} />
        <Route path="/typescript/module5" element={<CourseContent courseData={courseData.module5} module={"module5"} />} />
        <Route path="/learning/" element={<Learning />} />
        <Route path="/join/" element={<Join />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
