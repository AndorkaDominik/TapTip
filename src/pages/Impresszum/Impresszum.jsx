import React from 'react';
import "./Impresszum.css"
const Impresszum = () => {
  return (
    <div className="impresszum">
          <h1>Impresszum</h1>
          <div className="last-updated">
            <strong>Legutoljára frissítetve 2024 Június 25</strong>
          </div>
          <br />
          <div className="container">
            <div className="section">
                <h2>Vállalkozás adatai:</h2>
                <p><strong>Válalkozás neve:</strong> Valami Kft.</p>
                <p><strong>Kapcsolattartó neve:</strong> Valakai neve</p>
                <p><strong>Székhely:</strong> Valamilyen cím</p>
                <p><strong>E-mail:</strong> Valamilyen emailcím</p>
                <p><strong>Telefonszám:</strong> +36telefonszám</p>
                <p><strong>Adószám:</strong> Valamilyen adószám</p>
                <p><strong>Nyilvántartásba bejegyző hatóság:</strong> Igazságügyi Minisztérium</p>
                <p><strong>Kamara neve:</strong> Magyar Kereskedelmi és Iparkamara</p>
                <p><strong>Kamarai nyilvántartásba vételi szám:</strong> GY32164255</p>
            </div>
            <div className="section">
                <h2>Tárhelyszolgáltató adatai:</h2>
                <p><strong>Cégnév:</strong> Nethely Kft.</p>
                <p><strong>Adószám:</strong> 23358005-2-43</p>
                <p><strong>Székhely:</strong> 1115 Budapest, Halmi utca 29.</p>
                <p><strong>E-mail:</strong> info@nethely.hu</p>
            </div>
          <div className="section">
            <h2>Jogi nyilatkozat</h2>
            <p>
              A weboldal tartalma szerzői jogvédelem alatt áll. A weboldal felhasználója a tartalmat kizárólag magáncélra használhatja fel.
              A tartalom bármilyen formában történő további felhasználása (másolása, terjesztése, átdolgozása stb.) kizárólag a szerző írásos engedélyével lehetséges.
            </p>
          </div>
          <br />
          </div>

    </div>
  );
};

export default Impresszum;