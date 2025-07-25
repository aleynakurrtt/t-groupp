import { Link } from 'react-router-dom'
import '../CityTour/CityTour.css'
import { useTranslation } from 'react-i18next';

function OutOfTownTour() {
  const { t } = useTranslation();

  return (
    <div className="city-tour-container">
      <div className="tour-hero-1">
        <img src="/uzungol.jpg" alt="uzungöl" />
        <div className="hero-overlay">
          <h1>{t('outOfTownTour.title')}</h1>
          <p>{t('outOfTownTour.subtitle')}</p>
        </div>
      </div>

      <div className="tour-details">
        <h2>{t('outOfTownTour.aboutTitle')}</h2>
        <p>{t('outOfTownTour.aboutText')}</p>

        <div className="tour-highlights">
          <div className="highlight-box">
            <img src="/clock.svg" alt="Süre" />
            <h3>{t('outOfTownTour.highlights.durationTitle')}</h3>
            <p>{t('outOfTownTour.highlights.durationText')}</p>
          </div>
          <div className="highlight-box">
            <img src="/public/geo.svg" alt="Güzergah" />
            <h3>{t('outOfTownTour.highlights.routeTitle')}</h3>
            <p>{t('outOfTownTour.highlights.routeText')}</p>
          </div>
          <div className="highlight-box">
            <img src="/car.svg" alt="Sürücü" />
            <h3>{t('outOfTownTour.highlights.driverTitle')}</h3>
            <p>{t('outOfTownTour.highlights.driverText')}</p>
          </div>
        </div>
      </div>

      <div className="call-to-action">
        <h2>{t('outOfTownTour.callToActionTitle')}</h2>
        <Link to={'/iletisim'} className="btn-primary">
          {t('outOfTownTour.contactButton')}
        </Link>
      </div>
    </div>
  );
}

export default OutOfTownTour;