
import CarCard from '../../components/CarCard/CarCard';
import { cars } from '../../data/cars'
import './carRental.css'


function CarRental() {
  return (
    <div className='car-rental-container'>
    <h1 className='car-rental-title'>ARAÇ KİRALAMA</h1>
    <div className='car-grid'>
      {cars.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  </div>


  )
}




export default CarRental