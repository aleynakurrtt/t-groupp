import React from 'react'
import './popularCars.css'
import { Link } from 'react-router-dom';


const cars = [
    {
      id: 1,
      name: 'FİAT EGEA',
      image: '/public/araclar/fiat-egea/fiat-egea-1.jpg',
    },
    {
      id: 2,
      name: 'RENAULT MEGANE',
      image: '/public/araclar/renault-megane/renault-megane-1.jpg',
    },
    {
      id: 3,
      name: 'SKODA SUPERB',
      image: '/public/araclar/skoda-superb/skoda-superb-1.jpg',
    },
    {
      id: 4,
      name: 'PEUGEOT 2008',
      image: '/public/araclar/peugeot-2008/peugeot-2008-1.jpg',
    },
  ];


function PopularCars() {
  return (
    <section id='popular-cars' className="popular-cars">
      <div className="container">
        <h2>Popüler Araçlar</h2>
        <div className="cars-grid">
          {cars.map((car) => (
            <div className="car-card" key={car.id}>
              <img src={car.image} alt={car.name}  />
              <div className="car-info">
                <h4>{car.name}</h4>
              </div>
            </div>
          ))}
            <Link className='showMore' style={{marginTop:10}} to={'carRental'} >Daha fazlasını göster</Link>
        </div>
      </div>
    </section>
  )
}

export default PopularCars