
import './introduction.css'

function Introduction() {
  return (

  <div className="hero-section">
  <div className="car-overlay">
  <img src="/car-rent.jpg" alt="Siyah araba arka planda" loading="lazy" />
  </div>
  <div className="hero-text">
    <h1>TUMER GROUP TRAVEL AGENCY</h1>
    <p>Konforlu, güvenli ve şık araç kiralama deneyimi</p>
    <a href="#popular-cars" className="hero-button">Araçları Keşfet</a>
  </div>
  </div>


  )
}

export default Introduction