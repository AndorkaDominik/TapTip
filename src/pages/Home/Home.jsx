// src/components/Home.js
import React, { useEffect } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { motion } from 'framer-motion';


import welcomeImg from '../../assets/welcome (2).png'

import { Typewriter } from 'react-simple-typewriter'

import javaScript from '../../assets/Logos/javascript.svg'
import react from '../../assets/Logos/react.svg'
import typeScript from '../../assets/Logos/typescript.svg'
import github from '../../assets/Logos/github.svg'
import git from '../../assets/Logos/git.svg'

const needText = [
  {
    img: "https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Learn from the Basics of TypeScript",
    description: "Start with the fundamentals of TypeScript."
  },
  {
    img: "https://hasznaltalma.hu/upload/default/1697487717_1192_ai-jpeg",
    title: "Master Advanced Techniques",
    description: "Dive deep into TypeScript's advanced features."
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Boost Your Productivity With Us",
    description: "Write cleaner, more efficient code with TypeScript."
  },
  {
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "Debug with Confidence",
    description: "Identify, troubleshoot, and fix errors swiftly with precise debugging tools and best practices."
  },
  {
    img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
    title: "Stay Ahead in Tech",
    description:  "Keep your skills relevant, up-to-date, and in line with industry trends."
  }
];



import './Home.css'
import { Link } from 'react-router-dom';
const Home = () => {

  const handleScroll = () => {
        window.scrollBy({ top: 550, behavior: 'smooth' });
    };

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  }

  // set initial state for My Learning track
  useEffect(() => {
    // Check if 'completedModules' exists in localStorage
    if (!localStorage.getItem('completedModules')) {
      // If it doesn't exist, set it with default values
      localStorage.setItem('completedModules', JSON.stringify({
        "module1": false,
        "module2": false,
        "module3": false,
        "module4": false,
        "module5": false,
      }));
    }
  }, []);
  //localStorage.removeItem('completedModules')

  console.log(localStorage.getItem('completedModules'))

  return (
    <div className="landing-page">
      <section className="hero">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Transform Your React <br /> Skills with <span>TypeScript</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Join our comprehensive course to master TypeScript in React and build robust, type-safe applications.
        </motion.p>
         <motion.div 
          className="btn-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Link to="/typescript/" onClick={scrollToTop} className="cta">Get Started</Link>
          <Link to="/join/" onClick={scrollToTop} className="cta-secondary">Join Us</Link>
        </motion.div>
        <motion.a 
          className='invite' 
          onClick={handleScroll}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Learn more
        </motion.a>
        <motion.div 
          className='invite-arrow'
          onClick={handleScroll}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <MdKeyboardArrowDown />
        </motion.div>



        <motion.div 
          className="welcome"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className='header'>
            <div className='action-btn-container'>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p><Typewriter
              words={['React.jsx','TypeScript.tsx' ]}
              loop={5}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={900}
            /></p>
          </div>
          <img src={welcomeImg} alt="" draggable="false"/>
        </motion.div>


        <div className='why-container'>
          <h2>Why should you learn <span>Typescript</span></h2>
          <p>Learning TypeScript enhances your development process by <strong>catching errors early</strong> through static typing, making your code more reliable and easier to maintain. Ready to boost your JavaScript skills? Learn more about TypeScript today!</p>
        </div>


        <div className='showcase'>
                <div className="logo-container">
                  <div><img src={github} alt="" /></div>
                  <div><img src={react} alt="" /></div>
                  <div><img src={typeScript} alt="" /></div>
                  <div><img src={javaScript} alt="" /></div>
                  <div><img src={git} alt="" /></div>
                </div>

                <h2>Here is what we can do <span>cross-functionally</span></h2>
                <p>With LearnLab, you can master TypeScript and boost your career prospects, paving the way for that well-deserved raise at your job.</p>

                <div className='showcase-content'>
                  <div className="card-container">
                    <div className="card">
                      <div className="top">
                        <img src={react} alt="" />
                        <FaPlus />
                        <img src={typeScript} alt="" />
                      </div>
                        <div className="bottom">
                          <div>
                            <p>Number of new members</p>
                            <b>+8020</b>
                          </div>
                          <div>
                            <p>Members who uses Typescript</p>
                            <b>13,139</b>
                          </div>
                          <div>
                            <p>New member growth</p>
                            <b>+120%</b>
                          </div>
                        </div>
                    </div>
                    <div className="card">
                      <div className="top">
                        <img src={javaScript} alt="" />
                        <FaPlus />
                        <img src={typeScript} alt="" />
                      </div>
                        <div className="bottom">
                          <div>
                            <p>New Registrations</p>
                            <b>+4,567</b>
                          </div>
                          <div>
                            <p>Active TypeScript Users</p>
                            <b>12,345</b>
                          </div>
                          <div>
                            <p>Monthly Growth Rate</p>
                            <b>98%</b>
                          </div>
                        </div>
                    </div>
                    <div className="card">
                      <div className="top">
                        <img src={github} alt="" />
                        <FaPlus />
                        <img src={typeScript} alt="" />
                      </div>
                        <div className="bottom">
                          <div>
                            <p>New Contributors</p>
                            <b>3,210</b>
                          </div>
                          <div>
                            <p>Projects Using TypeScript</p>
                            <b>10,109</b>
                          </div>
                          <div>
                            <p>Weekly Growth Trend</p>
                            <b>+85%</b>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
        </div>
        <div className="need">
          <h2>Everything you need. <br /><span>Nothing you don't.</span></h2>
          <div className="need-content">
            <div className="top">
              {needText.slice(0, 3).map((item, i) => (
                <div key={i} className='card'>
                  <img src={item.img} alt={item.title} />
                  <div className="text">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bottom">
              {needText.slice(3, 5).map((item, i) => (
                <div key={i} className='card'>
                  <img src={item.img} alt={item.title} />
                  <div className="text">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        

        <hr className='separator' />
        <h2>See where our <span>coding courses</span>  can take you!</h2>
        <h2>All our courses <span>are next level...</span></h2>
        <div className="btn-container">
          <Link to="/typescript/" onClick={scrollToTop} className="cta">Get Started</Link>
          <Link to="/join/" onClick={scrollToTop} className="cta-secondary">Join Us</Link>
        </div>
        <hr className='separator' />
      </section>
    </div>
  );
};

export default Home;
