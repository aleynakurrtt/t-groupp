import { Link } from 'react-router-dom'
import './CityTour.css'
import { useTranslation } from 'react-i18next';


function CityTour() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="city-tour-container">
  <div className="tour-hero">
    <img src="/istanbul-2.jpg" alt="Şehir İçi Tur" />
    <div className="hero-overlay">
      <h1>{t('cityTour.title')}</h1>
      <p>{t('cityTour.subtitle')}</p>
    </div>
  </div>

  <div className="tour-details">
    <h2>{t('cityTour.aboutTitle')}</h2>
    <p>
    {t('cityTour.aboutText')}
    </p>

    <div className="tour-highlights">
      <div className="highlight-box">
        <img src="/clock.svg" alt="Süre" />
        <h3> {t('cityTour.highlights.durationTitle')}</h3>
        <p>{t('cityTour.highlights.durationText')}</p>
      </div>
      <div className="highlight-box">
        <img src="/public/geo.svg" alt="Güzergah" />
        <h3>{t('cityTour.highlights.routeTitle')}</h3>
        <p>{t('cityTour.highlights.routeText')}</p>
      </div>
      <div className="highlight-box">
        <img src="/car.svg" alt="Sürücü" />
        <h3>{t('cityTour.highlights.driverTitle')}</h3>
        <p>{t('cityTour.highlights.driverText')}</p>
      </div>
    </div>
  </div>

  <div className="call-to-action">
    <h2>{t('cityTour.callToActionTitle')}</h2>
    <Link to={'/iletisim'} className="btn-primary">{t('cityTour.contactButton')}</Link>
  </div>
</div>

    </div>
  )
}

export default CityTour