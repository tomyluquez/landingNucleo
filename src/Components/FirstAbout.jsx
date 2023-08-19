import dataAbout from '../Data/dataAbout';
import img2mobiles from '../assets/img/Images/2mobiles.png';
import aboutBubles from '../assets/img/Images/about_s4_bubble.png';
import aboutLines from '../assets/img/Images/about_s4_lines.png';
import Titles from './Titles';

const FirstAbout = () => {
  return (
    <div className="content frs-content" id="about" data-scroll-index="2">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            <div className="img mb-30 mb-lg-0">
              <img src={img2mobiles} alt="2mobiles" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="info">
              <Titles
                titleSmall="Automatizacion"
                textBlack="Autogestion de"
                textColor="pedidos de salon"
                textAlign={'start'}
              />
              <p className="text mb-40">
                Los clientes podrán tomarse su propio pedido sin necesidad de
                esperar a un camarero. También cuenta con la funcionalidad de
                llamar a un mozo y de pagar la cuenta virtualmente.
              </p>
              <ul>
                {dataAbout.dataFirst.map((item) => (
                  <li key={item.id} className="d-flex align-items-center mb-3">
                    <small className="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                      <i className={item.icon}></i>
                    </small>
                    <h6 className="fw-bold">{item.text}</h6>
                  </li>
                ))}
              </ul>
              <a
                href="page-contact-5.html"
                className="btn rounded-pill bg-blue4 fw-bold text-white mt-50 buton"
              >
                <small> Ver video </small>
              </a>
            </div>
          </div>
        </div>
      </div>
      <img src={aboutLines} alt="lineas" className="lines" />
      <img src={aboutBubles} alt="about1" className="bubble" />
    </div>
  );
};

export default FirstAbout;
