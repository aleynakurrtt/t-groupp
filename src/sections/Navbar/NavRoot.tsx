import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '/src/sections/Navbar/NavRoot.css';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';

function NavRoot() {
  const { t } = useTranslation();

  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand>
          <Link to={'/'}> 
            <img className='navbar-picture' src="/tumer-group-logo2.png" alt="tumer_group_logo" />
          </Link>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-link' />
        <Navbar.Collapse aria-controls="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-link' to={'/'}>{t('navbar.home')}</Link>
            <Link className='nav-link' to={'/arackiralama'}>{t('navbar.rental')}</Link>
            <Link className='nav-link' to={'/turlar'}>{t('navbar.tours')}</Link>
            <Link className='nav-link' to={'/hakkimizda'}>{t('navbar.about')}</Link>
            <Link className='nav-link' to={'/iletisim'}>{t('navbar.contact')}</Link>
          </Nav>

          <div>
            <LanguageSelector />
          </div>

          <div className="all-icons">
            <Navbar.Text className='icons'>
              <a href="https://www.instagram.com/TumerCarRental/" target='blank'><img className='twitter' src="/instagram.svg" alt="instagram" /></a>
              <a href="https://www.facebook.com/TumerCarRental" target='blank'><img className='twitter' src="/facebook.svg" alt="facebook" /></a>
              <a href="https://x.com/TumerCarRental" target='blank'><img className='twitter' src="/twitter.svg" alt="twitter" /></a>
              <a href="https://www.youtube.com/channel/UC77dDPf3PaEmc_Wnz_hqKZQ" target='blank'><img className='twitter' src="/youtube.svg" alt="youtube" /></a>
            </Navbar.Text>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavRoot;