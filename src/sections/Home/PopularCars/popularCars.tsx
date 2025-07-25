import { carsDetails } from "../../../data/carDetailsData";
import './popularCars.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function PopularCars() {
  const { t } = useTranslation();

  const popularCarIds = ["fiat-egea", "renault-megane", "skoda-superb", "peugeot-2008"];
  const popularCars = carsDetails.filter(car => popularCarIds.includes(car.id));

  return (
    <section id='popular-cars' className="popular-cars">
      <div className="container">
        <h2>{t('popularCar.popular')}</h2>
        <div className="cars-grid">
          {popularCars.map((car) => (
            <div className="car-card" key={car.id}>
              <img src={car.images[0]} alt={car.name} />
              <div className="car-info">
                <Link to={`/arackiralama/${car.id}`}>
                  <h4>{car.name}</h4>
                </Link>
              </div>
            </div>
          ))}          
        </div>
        <div style={{ marginTop: 20 }}>
          <Link className='showMore'  to={'/arackiralama'}>
            {t('popularCar.showMore')}
          </Link>
          </div>
      </div>
    </section>
  );
}

export default PopularCars;