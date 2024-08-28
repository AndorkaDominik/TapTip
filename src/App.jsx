import React from 'react'

//components
import Footer from './components/Footer/Footer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

//pages
import Home from './pages/Home/Home.jsx';

import { Route, Routes } from 'react-router-dom'
import Form from './pages/Form/Form.jsx';
import Packages from './pages/packages/Packages.jsx';
import Blog from './pages/Blog/Blog.jsx';
import BlogPost from './components/BlogPost/BlogPost.jsx';
import Impresszum from './pages/Impresszum/Impresszum.jsx';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/jelentkezes/' element={<Form />} />
        <Route path='/csomagok/' element={<Packages />} />
        <Route path='/blog/' element={<Blog />} />
        <Route path='/blog/:shortName' element={<BlogPost />}/>
        <Route path='/impresszum/' element={<Impresszum />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
