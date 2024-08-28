import React from 'react'
import "./Experts.css"

import Eszti from '../../assets/profile/Eszti.jpg'
import Petra from '../../assets/profile/Petra.png'

const Experts = () => {
  return (
    <div className='experts'>
        <h1>Ismerje meg <span>szakértőink</span>!</h1>
        <p>Szakértői csapatunk személyre szabott táplálkozási tanácsokkal segít Önnek elérni egészségi céljait, legyen szó fogyásról, egészséges életmódról vagy speciális étrendekről.</p>
        <div className="experts-content">
            <div className="experts-profile">
                <div className="profile">
                    <div className="img-container">
                        <img src={Petra} alt="" />
                    </div>
                    <h3>Zoller Petra</h3>
                    <p>Vegán Táplálkozási <br /> tanácsadó</p>
                </div>
                {/* <div className="profile">
                    <div className="img-container">
                        <img src={Eszti} alt="" />
                    </div>
                    <h3>Szőcs Eszter</h3>
                    <p>Általános Táplálkozási <br /> tanácsadó</p>
                </div> */}
                
            </div>
        </div>
    </div>
  )
}

export default Experts