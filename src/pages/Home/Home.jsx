import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { motion } from 'framer-motion';

import Apply from '../../components/Apply/Apply'
import Experts from '../../components/Experts/Experts';

import { Typewriter } from 'react-simple-typewriter'


import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    const [cookieConsent, setCookieConsent] = useState(false);

    useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'true') {
      setCookieConsent(true);
    }
  }, []);

  const handleScroll = () => {
        window.scrollBy({ top: 674, behavior: 'smooth' });
    };

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  }

  const handleCookieConsent = () => {
    localStorage.setItem('cookieConsent', 'true');
    setCookieConsent(true);
  };

  return (
    <div className="landing-page">
      {!cookieConsent && (
        <div className="cookie-consent-banner">
          <p>Ez az oldal sütiket használ a jobb felhasználói élmény érdekében. Kérjük, fogadja el a sütik használatát.</p>
          <button onClick={handleCookieConsent}>Elfogadom</button>
        </div>
      )}
      <section className="hero">
        <div className="content-wrapper">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span>Étkezz</span> okosan,<br />élj <span> jobban!</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Tanuld meg, hogyan alakíthatsz ki egészséges étrendet a legjobb tanácsokkal, és hozd meg a legjobb döntéseket az ételeidről.
        </motion.p>
         <motion.div 
          className="btn-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Link to="/jelentkezes/" onClick={scrollToTop} className="cta">Jelentkezek</Link>
          <Link to="/csomagok/" onClick={scrollToTop} className="cta-secondary">Árak</Link>
        </motion.div>
        <motion.a 
          className='invite' 
          onClick={handleScroll}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Tudj meg többet!
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
        </div>


        <motion.div 
          className="welcome"
          initial={{ opacity: 0, }}
          animate={{ opacity: 1, }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
            <p><Typewriter
              words={['Egészség', 'Tudatosság','Étrend', 'Energia', 'Jóllét' ]}
              loop={10}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={900}
            /></p>
        </motion.div>


        <div className='why-container'>
          <h2>Hogyan segíthet az <span>egészséges étrend</span> a betegségek megelőzésében?</h2>
          <p>A vitaminok alapvető szerepet játszanak a szervezet megfelelő működésében és az immunrendszer erősítésében. Az egészséges étrend segít pótolni ezeket az elengedhetetlen tápanyagokat, hozzájárulva a jobb közérzethez és a mentális egészséghez. Készen állsz, hogy támogasd testedet és elmédet?</p>
        </div>

        <Experts />
        

        

        <Apply />

        
      </section>
    </div>
  );
};

export default Home;
