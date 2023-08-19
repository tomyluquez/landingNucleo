import Titles from '../Components/Titles';
import dataTestimonials from '../Data/dataTestimonials.json';
import imgTesti1 from '../assets/img/Testimonials/testi_s4_ic1.png';
import imgTesti2 from '../assets/img/Testimonials/testi_s4_ic2.png';
import imgTesti3 from '../assets/img/icons/contact_globe.svg';

const Testimonials = () => {
  return (
    <section
      className="testimonials style-4 pt-70"
      data-scroll-index="5"
      id="clientes"
    >
      <div className="container">
        <div className="content">
          <div className="row">
            <div className="col-lg-5">
              <Titles
                titleSmall="Testimonios"
                textBlack="Conoce lo que opinan"
                textColor="nuestros clientes de nosotros"
                textAlign={'start'}
              />
              <p className="text mb-40">
                Notero loved from thoudsands customer worldwide and get trusted
                from big companies.
              </p>
              <div className="numbs">
                <div className="num-card">
                  <div className="icon img-contain">
                    <img src={imgTesti1} alt="" />
                  </div>
                  <h2>2,5M+</h2>
                  <p>
                    Downloaded and <br /> Installation
                  </p>
                </div>
                <div className="num-card">
                  <div className="icon img-contain">
                    <img src={imgTesti2} alt="" />
                  </div>
                  <h2>4.8/5</h2>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p>Based on 1,258 reviews</p>
                </div>
              </div>
              <div className="d-flex align-items-center mt-70">
                <a
                  href="https://www.apple.com/app-store/"
                  className="btn rounded-pill bg-blue4 fw-bold text-white me-4 buton"
                  target="_blank"
                  rel="noreferrer"
                >
                  <small> See Reviews On App Store </small>
                </a>
                <a
                  href="https://youtu.be/pGbIOC83-So?t=21"
                  data-lity
                  className="play-btn"
                >
                  <span className="icon me-2">
                    <i className="fas fa-play ms-1"></i>
                  </span>
                  <strong className="small">
                    View <br /> Promotion
                  </strong>
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="testi-cards">
                {dataTestimonials.data.map((item) => (
                  <div key={item.id} className="client_card">
                    <div className="user_img">
                      <img src={item.src} alt="" />
                    </div>
                    <div className="inf_content">
                      <div className="stars mb-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <h6>
                        {item.text1} {item.text2 && <br />}
                        {item.text2 && item.text2}
                      </h6>
                      <p>
                        {item.name}
                        <span className="text-muted">
                          {item.puesto} <span>{item.company}</span>
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
                <img src={imgTesti3} alt="" className="testi-globe" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
