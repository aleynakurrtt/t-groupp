import { carsDetails } from "../../../data/carDetailsData";
import './popularCars.css'
import { Link } from 'react-router-dom';



function PopularCars() {
  const popularCarIds = ["fiat-egea", "renault-megane", "skoda-superb", "peugeot-2008"];
  const popularCars = carsDetails.filter(car => popularCarIds.includes(car.id));
  return (
    <section id='popular-cars' className="popular-cars">
    <div className="container">
      <h2>Popüler Araçlar</h2>
      <div className="cars-grid">
        {popularCars.map((car) => (
          <div className="car-card" key={car.id}>
            <img src={car.images[0]} alt={car.name} />
            <div className="car-info">
              <Link to={`/carRental/${car.id}`}>
                <h4>{car.name}</h4>
              </Link>
            </div>
          </div>
        ))}
        <Link className='showMore' style={{ marginTop: 10 }} to={'/carRental'}>Daha fazlasını göster</Link>
      </div>
    </div>
  </section>
  )
}

export default PopularCars