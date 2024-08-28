import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Blog.css"
import Grape from '../../assets/Img/grape.jpg'
import { FaStar } from "react-icons/fa";

import preview from "../../constants/preview"

const Blog = () => {
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    ) 
  }

  return (
    <div className='blog'>
      <h1><span>Blog</span></h1>
      <Link to={'/blog/popular'}>
        <div className="popular">
          <img src={Grape} alt="" />
          <div className="popular-content">
            <div>
              <h3>Most Felkapott</h3>
              <div><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
            </div>
            <h2>Tudta? Ezek az ételek természetes módon csökkentik a testsúlyát!</h2>
            <p>Meglepő, de bizonyos ételek fogyasztása segíthet a súlycsökkentésben! Ismerje meg, mely összetevők gyorsítják az anyagcserét és csökkentik az étvágyat, hogy könnyebben elérje ideális testsúlyát.</p>
          </div>
        </div>
      </Link>

      <div className="preview-container">
      {preview.map((preview, index) => {
        return(
          <Link to={`/blog/${preview.shortName}`} key={index}>
            <div className="preview">
              <img src={preview.img} alt="" />
              <div className="title">
                <h2>{preview.title}</h2>
              </div>
            </div>
          </Link>
        )
      })}
      </div>
      
    </div>
  )
}

export default Blog