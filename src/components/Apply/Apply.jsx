import React from 'react'
import "./Apply.css"
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter'

const Text = [
    {
        title: "Jelentkezés",
        description: "Weboldalon keresztül az űrlap kitöltésével."
    },
    {
        title: "Kapcsolatfelvétel",
        description: "24 órán belül felveszem veled a kapcsolatot, elküldöm a tájékoztatót és megbeszéljük a részleteket."
    },
    {
        title: "Fizetés",
        description: "Visszajelzésed után küldöm a számla adatokat az utaláshoz."
    },
    {
        title: "Kérdőív",
        description: "Amint megérkezett az utalás küldöm az étrendhez tartozó részletes kérdőívet, amelyre 3-4 napod van kitölteni."
    },
    {
        title: "Étrend készítés",
        description: "Miután beérkezett hozzám a kitöltött kérdőív, kielemzés után elkészítem a személyre szabott étrendet."
    },
    {
        title: "Kapcsolattartás",
        description: "Személyre szabott étrend csomag kiküldése után pontosan 6 hétig van a kapcsolattartás. Hetente várom a jelentést, és az esetlegesen kérdéseket megválaszolom."
    }
]


const Apply = () => {
  return (
    <div className='apply'>
        <h2 className='apply-title'>Hogyan zajlik az <span>együttműködés</span>?</h2>
        <div className="apply-content">
            {Text.map((item, i)=>(
                <div className="apply-card" key={i}>
                    <h3>{i+1}. {item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
        <div className="reason">
            <motion.div 
          className=""
          id='apply-title'
          initial={{ opacity: 0, }}
          animate={{ opacity: 1, }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
            <h1><Typewriter
              words={['Kizáró okok', 'Nem tudom vállalni']}
              loop={10}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={900}
            /></h1>
        </motion.div>
            <ul>
                <li>Cukorbetegség (1-es és 2-es típusú)</li>
                <li>Vesebetegség / Májbetegség / Szív és érrendszeri betegségek</li>
                <li>Várandós / szoptatós kismamák</li>
                <li>Emésztőrendszeri / Hormonrendszeri szerv teljes vagy részleges hiánya</li>
                <li>Krónikus emésztőrendszeri betegségek (pl. IBS, IBD, Crohn stb.)</li>
                <li>Hormonális betegség, hormonkezelés</li>
                <li>Autoimmun betegség (pl. hashimoto, cöliákia)</li>
                <li>Hisztamin érzékenység</li>
                <li>Lelki eredetű evészavarok</li>
                <li>Zabpehely / zabpehelyliszt nem fogyasztása / intolerancia</li>
                <li>Zöldségek nem fogyasztása</li>
                <li>18 év alatti életkor</li>
                <li>Édesítőszer intolerancia/nem fogyasztása (eritrit, stevia, glicin)</li>
            </ul>
            <p className='reason-caution'><strong>A tanácsadás nem helyettesíti az orvosi diagnosztikát</strong>, csak kiegészíti azt. Az eltitkolt betegségekért, egyéb állapotokért és az étrend helytelen betartása miatt keletkező problémák
                miatt nem vállalunk felelősséget, valamint nincs pénz visszafizetési garancia.</p>
        </div>
    </div>
  )
}

export default Apply