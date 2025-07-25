import React from 'react';
import './CarCard.css';
import { Car } from '../../data/cars';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface Props {
  car: Car;
}

const CarCard: React.FC<Props> = ({ car }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className=" car-card-1">
      <img src={car.image} alt={car.name} />
      <h3>{car.name}</h3>
      <button onClick={() => navigate(`/arackiralama/${car.id}`)}>{t('reviews.review')}</button>
    </div>
  );
};

export default CarCard;