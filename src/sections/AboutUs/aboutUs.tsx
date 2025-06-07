import React, { useState } from 'react';
import './aboutUs.css';
import { CgEnter } from 'react-icons/cg';

function AboutUs() {
  const [activeTab, setActiveTab] = useState('tab1-content'); 

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
          Hakkımızda
        </button>
        <button
          className={`allPartner ${activeTab === 'tab2-content' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab2-content')}
        >
          Faaliyetlerimiz
        </button>
        <button
          className={`allPartner ${activeTab === 'tab3-content' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab3-content')}
        >
          Ortaklarımız
        </button>
      </div>

      <div className="company" id="tab1-content" style={{ display: activeTab === 'tab1-content' ? 'block' : 'none' }}>
        <h2>HAKKIMIZDA</h2>
        <p>
          Firmamız 20 yılı aşkın bir süredir gerçekleştirdiği profesyonel hayatına; 1995 yılında Dış Ticaret ve Erkek Giyim üzerine faaliyet gösteren
          TÜMER DIŞ TİCARET firmamız ile başlamıştır.
        </p>

        <p>
          Gelişen sektör ve doğurduğu ihtiyaçlarının sonucu; 2003 yılında profesyonel ekibimizi genişletip bünyemize İNVİTE (Doğan Tekstil) firmamızı
          ilave ettik.
        </p>

        <p>
          Büyüyen profesyonel ekibimiz, güçlü ve sağlam altyapımız, tecrübelerimiz ile sağlıklı yurt dışı bağlantılarımız, her zaman yeniliklere açık dünya
          görüşümüz ve müşteri memnuniyetini ön planda tutma isteğimiz ile 2013 yılında bünyemize; Gayrimenkul Alım – Satım ve Turizm firmalarımızı da
          ekleyerek tüm firmalarımızı TÜMER GROUP çatısı altında birleştirdik.
        </p>

        <p>
          TÜMER GROUP ve bünyesinde bulunan firmalar; başta Suudi Arabistan, Yemen, Kuveyt, Birleşik Arap Emirlikleri, Katar ve diğer tüm Ortadoğu
          ülkeleri ile yapmış olduğu uzun süreli, güvene dayalı sağlam iş ilişkileri sayesinde ülke ekonomisine de büyük katkı sağlamaktadır.
        </p>

        <p>
          TÜMER GROUP günümüzde de büyüme hızını kesmeden, yenilikçi ve profesyonel hayatında ilerlerken; müşteri memnuniyeti, dürüst çalışma ilkesi ve
          devlet ekonomisine yapmış olduğu katkı ile de sektörde daima en iyi ve en güvenilir firma olarak gelecekte de faaliyetlerinde hep bir adım önde
          olmaya devam edecektir..
        </p>

        <p style={{fontWeight:'bold', display:'flex', justifyContent:'center'}}>MUHİTTİN UÇAR</p>  
         <p  style={{fontWeight:'bold', display:'flex', justifyContent:'center'}}>TÜMER GROUP Yönetim Kurulu Başkanı</p>
      </div>

      <div className="company" id="tab2-content" style={{ display: activeTab === 'tab2-content' ? 'block' : 'none' }}>
        <h2>FAALİYETLERİMİZ</h2>
        <p>
          <span>DIŞ TİCARET:</span>  Suudi Arabistan, Kuveyt, Katar, U.A.E ve diğer tüm Ortadoğu ülkelerinde bulunan mevcut müşteri ve yeni tüm müşteri
          potansiyelimize tekstil ihracatı ve danışmanlığı yapmaktadır.
        </p>

        <p>
         <span>TEKSTİL İMÂLATI:</span>  2003 Yılından bu yana Erkek Giyim sektöründe kaliteli, yenilikçi, sıra dışı ve özel tasarımlar Gömlek ve T-Shirt üretimi
          ile devam etmektedir.
        </p>

        <p>
         <span> GAYRİMENKUL ALIM – SATIM:</span> Tekstil ve Dış Ticaret sektöründeki tecrübemiz, güvenilirliğimiz, kuvvetli altyapımız, mevcut konumumuz ve Yabancı
          Uyruklu müşteri portföyümüzden yola çıkarak tüm Yabancı Uyruklu müşterilere Gayrimenkul Alım – Satım işlemleri gerçekleştirilmektedir.
        </p>

        <p>
       <span>  TURİZM:</span>  Gerek firmamızın müşterileri ve konuklarına gerekse farklı firmaların Yurt Dışından gelen müşterilerine ve konuklarına; Havaalanı
          Hizmeti, seçkin ve elit otellerde uygun seçeneklerde Otel Rezervasyon hizmeti, firmamıza ait mevcut lüks ve konforlu son model araçlarımız ile
          Araç Kiralama hizmeti, İstanbul’un tarihi, kültürel, sosyal ve eğlence yerlerine Şehir Turları ve Rehberlik hizmetleri verilmektedir.
        </p>
      </div>

      <div className="company" id="tab3-content" style={{ display: activeTab === 'tab3-content' ? 'block' : 'none' }}>
        <h2>ORTAKLARIMIZ</h2>
         
         <div className='partners'>
            <img src="/public/ciragan-palace-kempinski-istanbul-logo-vector-Photoroom.png" alt="" />
            <img src="/public/conrad_hotels-removebg-preview.png" alt="" />
            <img src="/public/divan-removebg-preview.png" alt="" />
         </div>
         <div className='partners'>
            <img src="/public/four_seasons-removebg-preview.png" alt="" />
            <img src="/public/hilton_istanbul-removebg-preview.png" alt="" />
            <img src="/public/pera_palace-removebg-preview.png" alt="" />
         </div>
      </div>
    </div>
  );
}

export default AboutUs;
