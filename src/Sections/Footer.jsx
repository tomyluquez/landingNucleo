import logoNucleo from '../assets/img/Nucleo-img/Nucleo_Check_Logovariables-02.png';
import imgWave from '../assets/img/Images/footer_4_wave.png';
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="style-4" data-scroll-index="8">
      <div className="container">
        <div className="section-head text-center style-4">
          <h2 className="mb-10">
            {' '}
            ¿Listo para <span> descubrirnos? </span>{' '}
          </h2>
          <p>
            Accede a la prueba gratuita y ponete en contacto con nuestro equipo
            de asesores quien te ayudaran en lo que necesites.
          </p>
          <div className="d-flex align-items-center justify-content-center mt-50">
            <a
              href="https://www.apple.com/app-store/"
              className="btn rounded-pill bg-blue4 fw-bold text-white me-4 buton"
              target="_blank"
              rel="noreferrer"
            >
              <small>
                {' '}
                <i className="fab fa-apple me-2 pe-2 border-end"></i> Download
                On App Store{' '}
              </small>
            </a>
            <a
              href="https://play.google.com/store/apps"
              className="btn rounded-pill hover-blue4 fw-bold border-blue4 buton"
              target="_blank"
              rel="noreferrer"
            >
              <small>
                {' '}
                <i className="fab fa-google-play me-2 pe-2 border-end"></i>{' '}
                Download On Google Play{' '}
              </small>
            </a>
          </div>
        </div>
        <div className="foot mt-80">
          <div className="row align-items-center">
            <div className="col-lg-2">
              <div className="logo">
                <img src={logoNucleo} alt="" />
              </div>
            </div>
            <div className="col-lg-8">
              <ul className="links">
                <li>
                  <a href="" className="active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="">Nosotros</a>
                </li>
                <li>
                  <a href="">Servicios</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Contacto</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copywrite text-center">
          <small className="small">
            © {year}{' '}
            <a href="#" className="fw-bold text-decoration-underline">
              Núcleo IT
            </a>
            . Todos los derechos reservados. 2009 - {year}
          </small>
        </div>
      </div>
      <img src={imgWave} alt="" className="wave" />
    </footer>
  );
};

export default Footer;
