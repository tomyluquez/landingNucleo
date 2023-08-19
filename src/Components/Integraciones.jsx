import dataAbout from '../Data/dataAbout.json';
import backInteg from '../assets/img/Images/intg_back.png';
import aboutWave from '../assets/img/Images/about_s4_wave.png';
import Titles from './Titles';
import imgInte1 from '../assets/img/Images/intg1.png';
import imgInte2 from '../assets/img/Images/intg2.png';
import imgInte3 from '../assets/img/Images/intg3.png';
import imgInte4 from '../assets/img/Images/intg4.png';
import imgInte5 from '../assets/img/Images/intg5.png';

const Integraciones = () => {
  return (
    <>
      <section
        className="integration pt-60"
        data-scroll-index="3"
        id="integraciones"
      >
        <Titles
          titleSmall="Todos los pedidos en un solo lugar"
          textBlack="Integrados con las"
          textColor="Apps mas usadas"
          textDescription="Pantalla integradora para recibir todos los pedidos en un solo lugar"
        />
        <div className="container">
          <div className="content">
            {dataAbout.dataIntegraciones.map((item) => (
              <div key={item.id} className="img">
                <img
                  src={
                    item.id === 1
                      ? imgInte1
                      : item.id === 2
                      ? imgInte2
                      : item.id === 3
                      ? imgInte3
                      : item.id === 4
                      ? imgInte4
                      : item.id === 5 && imgInte5
                  }
                  alt={`Logo Integracion ${item.id}`}
                  className="mt-30"
                />
              </div>
            ))}
          </div>
        </div>
        <img src={backInteg} alt="" className="intg-back" />
      </section>
      <img src={aboutWave} alt="" className="top-wave" />
      <img src={aboutWave} alt="" className="bottom-wave" />
    </>
  );
};

export default Integraciones;
