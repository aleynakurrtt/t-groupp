import React from 'react';
import './CarCard.css';
import { Car } from '../../data/cars';
import { useNavigate } from 'react-router-dom';

interface Props {
  car: Car;
}

const CarCard: React.FC<Props> = ({ car }) => {
  const navigate = useNavigate();

  return (
    <div className="car-card-1">
      <img src={car.image} alt={car.name} />
      <h3>{car.name}</h3>
      <button onClick={() => navigate(`/carRental/${car.id}`)}>İncele</button>
    </div>
  );
};

export default CarCard;