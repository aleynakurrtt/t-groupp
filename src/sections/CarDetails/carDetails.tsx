import { useState } from "react";
import { useParams } from "react-router-dom";
import { carsDetails } from "../../data/carDetailsData";
import './carDetails.css';
import { FaUser, FaSuitcase, FaCar, FaWrench, FaGasPump } from "react-icons/fa";

const CarDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!id) return <div>Geçersiz araç ID'si.</div>;
  const car = carsDetails.find(car => car.id === id);
  if (!car) return <div>Araç bulunamadı.</div>;

  return (
    <div className="car-detail-page">

    <h2 className="car-title">{car.name}</h2>

      <div className="car-main-image">
        <img
          src={car.images[0]}
          alt={car.name}
        />

<div className="car-specs">
        <div><FaCar /> Alfa Yılı: {car.model}</div>
        <div><FaWrench /> Vites Türü: {car.gear}</div>
        <div><FaGasPump /> Yakıt Tipi: {car.fuel}</div>
        <div><FaUser /> Kapasite: {car.seats} Kişi</div>
        <div><FaSuitcase /> Bagaj: {car.trunk} Litre</div>
      </div>
      </div>

      <div className="car-gallery">
        {car.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Galeri ${i + 1}`}
            onClick={() =>
              setSelectedImage(selectedImage === img ? null : img)
            }
          />
        ))}
      </div>


      <div className="car-description">
        <h3>Açıklama:</h3>
        <p>{car.description || `${car.name} hakkında detaylı açıklama bulunamadı.`}</p>

      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Büyük görsel" className="modal-image" />
        </div>
      )}
    </div>
    
  );
};

export default CarDetail;
