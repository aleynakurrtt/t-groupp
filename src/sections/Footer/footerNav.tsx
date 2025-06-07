import './footerNav.css'

function FooterNav() {
  return (
    <footer className='footer-nav'>
      <p>TÜMER GROUP TURİZM TİCARET A.Ş</p>
      <p> © 2025 | All Rights Reserved</p>
      <div className='footer-icons'>
      <a href="https://www.instagram.com/TumerCarRental/" target='blank'><img className='twitter' src="/instagram.svg" alt="instagram" /></a>
     <a href="https://www.facebook.com/TumerCarRental" target='blank'><img className='twitter' src="/facebook.svg" alt="facebook" /></a>
     <a href="https://x.com/TumerCarRental" target='blank'><img className='twitter' src="/twitter.svg" alt="twitter" /></a>
     <a href="https://www.youtube.com/channel/UC77dDPf3PaEmc_Wnz_hqKZQ" target='blank'><img className='twitter' src="/youtube.svg" alt="youtube" /></a>
      </div>
    </footer>
  )
}

export default FooterNav