import React from 'react'
import "./Packages.css"
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Docs from "../../assets/Img/docs.jpg"
import { SiTicktick } from "react-icons/si";
import { BsFillTriangleFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";


const Packages = () => {

    function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth', 
    });
    }

  return (
    <>
    <div className='packages'>
    <motion.h1 
        className='packages-title'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
    >
        <span>Étrend Csomagok</span>
    </motion.h1>

        <div className="packages-container">
            <motion.div 
                className="package"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <h2>Alap étrend</h2>
                <ul>
                    <li><FaPlus className='list-style' /> Laktózmentes</li>
                    <li><FaPlus className='list-style' /> Gluténmentes</li>
                    <li><FaPlus className='list-style' /> Tejmentes</li>
                </ul>
                <h3>35.000Ft</h3>
            </motion.div>
            <motion.div 
                className="package"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <h2>Speciális étrend</h2>
                <ul>
                    <li><FaPlus className='list-style' /> IR / PCOS / IR+PCOS</li>
                    <li><FaPlus className='list-style' /> Pajzsmirigy / Pajzsmirigy + IR + PCOS</li>
                    <li><FaPlus className='list-style' /> Vegetáriánus</li>
                </ul>
                <h3>39.000Ft</h3>
            </motion.div>
        </div>

        {/* <motion.div 
                className="facts"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
            >
            4 hétre szoktam étrend javaslatot írni, konkrétan <strong>megadom a napi 5 étkezést</strong> a Te ízlésednek megfelelően, figyelembe véve a különböző intoleranciákat illetve az ételeket amiket nem szeretsz. Az étrend nem tartalmaz speciális liszteket (Szafi, Norbi), minden alapanyag könnyen beszerezhető: (Tesco,Spar, Auchan, Eco Family).
        </motion.div> */}
{/* 
        <div className="btn-container">
            <Link to="/jelentkezes/" onClick={scrollToTop} className="cta">Kezdjünk bele!</Link>
            <Link to="/kapcsolat/" onClick={scrollToTop} className="cta-secondary">Kapcsolat</Link>
        </div> */}

        <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="includes">
            <img src={Docs} alt="preview of the actual docs" />
            <div className="includes-content">
                <div className="arrow">
                    <div className="arrow-end"><BsFillTriangleFill className='end' /></div>
                </div>
                <h2>Mit <span>tartalmaznak</span> az étrend csomagok?</h2>
                <ul>
                    <li><SiTicktick className='tick' /> 4 hétre szóló, napi 5 étkezést lefedő étrend;</li>
                    <li><SiTicktick className='tick' /> Könnyen beszerezhető alapanyagok;</li>
                    <li><SiTicktick className='tick' /> Gyorsan elkészíthető receptek;</li>
                    <li><SiTicktick className='tick' /> Online állapotfelmérést kérdőív formájában;</li>
                    <li><SiTicktick className='tick' /> További termék ajánlásokat;</li>
                    <li><SiTicktick className='tick' /> Nyomtatható segédleteket;</li>
                </ul>
                <Link to="/jelentkezes/" onClick={scrollToTop} className="cta">Kezdjünk bele!</Link>
            </div>
        </motion.div>

    </div>
    </>
  )
}

export default Packages