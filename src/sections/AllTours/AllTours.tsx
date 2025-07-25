import { Link } from 'react-router';
import './AllTours.css'
import { useTranslation } from 'react-i18next';



function AllTours() {
  const { t } = useTranslation();

  return (
    <div className="tours-section">
    <h2 className="tours-title">{t('tours.ourTours')}</h2>
    <div className="tour-cards">
      <div className="tour-card">
        <img src="/sehir-ici-tur.jpg" alt="Şehir İçi Tur" className="tour-image" />
        <div className="tour-content">
          <h3>{t('tours.cityTour')}</h3>
          <p>{t('tours.inİstanbul')}</p>
        <Link to={'/sehir-ici-tur'}> <button className='detail-button'> {t('tours.detail')}</button></Link>
        </div>
      </div>

      <div className="tour-card">
        <img src="/sehir-dısı-tur.jpg" alt="Şehir Dışı Tur" className="tour-image" />
        <div className="tour-content">
          <h3>{t('tours.outOfTown')}</h3>
          <p>{t('tours.outOfTour')}</p>
          <Link to={'/sehir-disi-tur'}>  <button className='detail-button'> {t('tours.detail')}</button></Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AllTours
