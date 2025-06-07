
import './whyChooseUs.css';
import { FaCar, FaUserShield} from 'react-icons/fa';
import { GiReceiveMoney } from "react-icons/gi";


function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="container">
        <h2>NEDEN BİZİ SEÇMELİSİNİZ?</h2>
        <div className="features">
          <div className="feature-box">
            <FaCar className="icon" />
            <h4>GENİŞ ARAÇ YELPAZESİ</h4>
            <p>Her ihtiyaca uygun geniş araç seçenekleri sunuyoruz.</p>
          </div>
          <div className="feature-box">
            <FaUserShield className="icon" />
            <h4>Güvenilir Hizmet</h4>
            <p>Tüm süreçlerde şeffaflık ve güven esasına dayalı profesyonel destek sağlıyoruz.</p>
          </div>
          <div className="feature-box">
            <GiReceiveMoney className="icon" />
            <h4>HESAPLI FİYATLAR</h4>
            <p>Kaliteli hizmeti en uygun fiyatlara sunmaktayız.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs