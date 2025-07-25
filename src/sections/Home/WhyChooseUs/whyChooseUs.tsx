import './whyChooseUs.css';
import { FaCar, FaUserShield} from 'react-icons/fa';
import { GiReceiveMoney } from "react-icons/gi";
import { useTranslation } from 'react-i18next';


function WhyChooseUs() {
  const { t } = useTranslation();

  return (
    <section className="why-choose-us">
      <div className="container">
        <h2>{t('whyChooseUs.whyChoose')}</h2>
        <div className="features">
          <div className="feature-box">
            <FaCar className="icon" />
            <h4>{t('whyChooseUs.largeVehicles')}</h4>
            <p>{t('whyChooseUs.offerOptions')}</p>
          </div>
          <div className="feature-box">
            <FaUserShield className="icon" />
            <h4>{t('whyChooseUs.reService')}</h4>
            <p>{t('whyChooseUs.profSupport')}</p>
          </div>
          <div className="feature-box">
            <GiReceiveMoney className="icon" />
            <h4>{t('whyChooseUs.price')}</h4>
            <p>{t('whyChooseUs.afforPrice')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs