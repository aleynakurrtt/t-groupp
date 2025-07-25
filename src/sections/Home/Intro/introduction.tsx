import './introduction.css';
import { useTranslation } from 'react-i18next';

function Introduction() {
  const { t } = useTranslation();

  return (
    <div className="hero-section">
      <div className="car-overlay">
        <img src="/car-rent.jpg" alt="Siyah araba arka planda" loading="lazy" />
      </div>
      <div className="hero-text">
        <h1>{t('hero.title')}</h1>
        <p>{t('hero.subtitle')}</p>
        <a href="#popular-cars" className="hero-button">
          {t('hero.button')}
        </a>
      </div>
    </div>
  );
}

export default Introduction;