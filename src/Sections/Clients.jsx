import { useEffect, useRef } from 'react';
import dataClient from '../Data/dataClients.json';
const Clients = () => {
  const sliderClients = useRef(null);

  const sliderAnimation = () => {
    const slider = sliderClients.current;
    if (slider.children.length > 0) {
      const firstElement = slider.children[0];
      const widthElement = firstElement.offsetWidth;
      const screen = window.innerWidth;
      slider.style.transition = 'all 600ms ease-in-out';
      slider.style.transform = `translateX(-${
        screen > 768 ? 250 : widthElement
      }px)`;
      slider.style.scrollBehavior = 'smooth';

      const transition = () => {
        slider.appendChild(firstElement);
        slider.style.transition = 'none';
        slider.style.transform = 'translateX(0)';
      };
      slider.addEventListener('transitionend', transition);
    }
  };

  useEffect(() => {
    setInterval(() => {
      sliderAnimation();
    }, 5000);
  }, []);

  return (
    <section className="clients style-4">
      <div className="container">
        <div className="text-center">
          <h5 className="fw-bold mb-100 clientsTitle">
            <span className="color-blue4">Desde 2009 </span> trabajando para los
            gastronómicos
          </h5>
        </div>
        <div className="client-logos pb-70">
          <div
            className="row align-items-center justify-content-center"
            style={{ flexWrap: 'nowrap', gap: '50px' }}
            ref={sliderClients}
          >
            {dataClient.data.map((client) => (
              <div key={client.id} className="col-6 col-lg-2 spanHover">
                <a href="#" className="img d-block">
                  <img
                    src={client.img}
                    alt={client.alt}
                    style={{ width: '100%' }}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
