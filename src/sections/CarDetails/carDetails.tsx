import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { carsDetails } from "../../data/carDetailsData";
import './carDetails.css';

const CarDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!id) return <div>Geçersiz araç ID'si.</div>;
  const car = carsDetails.find(car => car.id === id);
  if (!car) return <div>Araç bulunamadı.</div>;

  return (
    <div className="car-detail-container">
      <div className="car-detail-left">
        <div className="main-image-box">
          <img src={selectedImage || car.images[0]} alt={car.name} className="main-image" />
        </div>
        <div className="image-gallery">
          {car.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Gallery ${i + 1}`}
              onClick={() => setSelectedImage(img)}
              className={`thumbnail ${selectedImage === img ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
      <div className="car-detail-right">
  <div className="text-content">
    <h2 className="car-name">{car.name}</h2>
    <p className="description-text">
      {car.description || `${car.name} hakkında açıklama bulunamadı.`}
    </p>
    <div className="specs-section">
      <div style={{display:'flex', gap:25}}> 
      <p>🪑 {car.seats} Koltuk</p>
      <p>⚙️ {car.transmission}</p>
      </div>
      <p>⛽ {car.fuelType}</p>
    </div>
    <Link to={'/contactUs'} className="button-group">
    <button className="book-button">İLETİŞİME GEÇ </button>
  </Link>
  </div>
</div>

    </div>
  );
};

export default CarDetail;
