import React, { useState } from 'react';
import './aboutUs.css';
import { useTranslation } from 'react-i18next';


function AboutUs() {
  const [activeTab, setActiveTab] = useState('tab1-content'); 
  const { t } = useTranslation();

  const paragraph = t('aboutUs.about.content', { returnObjects: true }) as string[];

  const handleTabClick = (tabName: React.SetStateAction<string>) => {
    setActiveTab(tabName);
  };

  return (
    <div className='allAbout'>
      <div className="aboutUs mb-5">
        <button
          className={`allPartner ${activeTab === 'tab1-content' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab1-content')}
        >
          {t('aboutUs.tabs.services')}
        </button>
        <button
          className={`allPartner ${activeTab === 'tab2-content' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab2-content')}
        >
          {t('aboutUs.tabs.about')}
        </button>
        <button
          className={`allPartner ${activeTab === 'tab3-content' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab3-content')}
        >
          {t('aboutUs.tabs.partners')}
        </button>
      </div>

      <div className="company" id="tab1-content" style={{ display: activeTab === 'tab1-content' ? 'block' : 'none' }}>
        <h2>{t('aboutUs.about.title')}</h2>
        {(t('aboutUs.about.content', { returnObjects: true }) as string[]).map((paragraph, index) => (
  <p key={index}>{paragraph}</p>
))}
        <p style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'center' }}>
          {t('aboutUs.about.author')}
        </p>
        <p style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'center' }}>
          {t('aboutUs.about.titlePosition')}
        </p>
      </div>

      <div className="company" id="tab2-content" style={{ display: activeTab === 'tab2-content' ? 'block' : 'none' }}>
  <h2>{t('aboutUs.services.title')}</h2>
  <p>
    <span>{t('aboutUs.services.export.title')}</span> {t('aboutUs.services.export.description')}
  </p>
  <p>
    <span>{t('aboutUs.services.textile.title')}</span> {t('aboutUs.services.textile.description')}
  </p>
  <p>
    <span>{t('aboutUs.services.realEstate.title')}</span> {t('aboutUs.services.realEstate.description')}
  </p>
  <p>
    <span>{t('aboutUs.services.tourism.title')}</span> {t('aboutUs.services.tourism.description')}
  </p>
</div>

  
      <div className="company" id="tab3-content" style={{ display: activeTab === 'tab3-content' ? 'block' : 'none' }}>
        <h2>{t('aboutUs.partners.title')}</h2>
        <div className='partners'>
          <img src="/ciragan-palace-kempinski-istanbul-logo-vector-Photoroom.png" alt="Çırağan" />
          <img src="/conrad_hotels-removebg-preview.png" alt="Conrad" />
          <img src="/divan-removebg-preview.png" alt="Divan" />
        </div>
        <div className='partners'>
          <img src="/four_seasons-removebg-preview.png" alt="Four Seasons" />
          <img src="/hilton_istanbul-removebg-preview.png" alt="Hilton" />
          <img src="/pera_palace-removebg-preview.png" alt="Pera Palace" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
