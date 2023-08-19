import dataHero from '../Data/dataHero.json';
import Titles from './Titles';

const InfoHero = () => {
  return (
    <section className="col-lg-6" id="hero">
      <div className="info">
        <Titles
          titleSmall="Sumate a la revolucion gastronomica"
          textBlack="Nucleo Check"
          textColor="el software gastronomico que esperabas"
          textAlign={'start'}
        />
        <p className="text">
          Podrás usarlo en cualquier dispositivo con internet y <br />
          tiene todo lo que necesitas.
        </p>
        <div className="d-flex align-items-center mt-50">
          <a
            href="https://www.apple.com/app-store/"
            className="btn buton rounded-pill bg-blue4 fw-bold text-white me-4"
            target="_blank"
            rel="noreferrer"
          >
            <small> Probalo gratis </small>
          </a>
          <a
            href="https://youtu.be/pGbIOC83-So?t=21"
            data-lity
            className="play-btn spanHover"
          >
            <span className="icon me-2">
              <i className="fas fa-play ms-1"></i>
            </span>
            <strong className="small spanHover">
              Ver video <br /> prsentación
            </strong>
          </a>
        </div>
        <div className="d-flex align-items-center">
          {dataHero.data.map((data) => (
            <span key={data.id} className="mt-50 me-5">
              <small className="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-1">
                <i className={data.icon}></i>
              </small>
              <small className="text-uppercase">{data.text}</small>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoHero;
