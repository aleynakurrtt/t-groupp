import  { useState } from "react";
import { cars } from "../../data/cars";
import CarCard from '../../components/CarCard/CarCard';
import "./carRental.css";

const CarRental = () => {
  const [search, setSearch] = useState("");

  const filteredCars = cars.filter((car) =>
    car.name.toUpperCase().includes(search.toUpperCase())
  );

  return (
    <div className="car-rental-page">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Araç ara..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="car-list ">
        {filteredCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarRental;