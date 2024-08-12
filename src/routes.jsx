import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import CourseContent from './components/CourseContent/CourseContent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/course-content',
    element: <CourseContent />,
  },
]);

export default router;