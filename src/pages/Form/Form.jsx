import React, { useState } from 'react';
import "./Form.css"
import { motion } from 'framer-motion';
import Plate from '../../assets/Img/plate.png'
function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    package: '',
    condition: '',
    message: '',
    privacyPolicy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <motion.div           
            className='form'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
    >
      <img src={Plate} alt="" />
      <h1>JELENTKEZÉS</h1>
      <p>Személyre szabott étrend tervezésre</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Név</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email <span>*</span></label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Csomag</label>
          <select
            name="package"
            value={formData.package}
            onChange={handleChange}
          >
            <option value="">-Válassz-</option>
            <option value="basic">Alap</option>
            <option value="premium">Prémium</option>
            <option value="pro">Pro</option>
          </select>
        </div>
        <div>
          <label>Van-e valamilyen betegséged vagy ételallergiád/intoleranciád</label>
          <input
            type="text"
            name="condition"
            value={formData.condition}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Üzenet</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', margin: '10px 0', height: '100px' }}
          ></textarea>
        </div>
        <p>Mielőtt jelentkeznél, kérlek <strong>olvasd el, hogy milyen kizáró okok vannak</strong>, amik miatt esetleg nem tudom elkészíteni az étrendedet. Ha egyéb betegséged van, azt pedig kérlek jelezd!</p>
        <div>
          <label>
            <input
              type="checkbox"
              name="privacyPolicy"
              checked={formData.privacyPolicy}
              onChange={handleChange}
              required
              className='checkbox'
            />{' '}
            Elolvastam és elfogadtam az adatkezelési tájékoztatóban foglaltakat.
          </label>
        </div>
        <button type="submit" className='cta'>
          Küldés
        </button>
      </form>

    </motion.div>
  );
}

export default Form;
