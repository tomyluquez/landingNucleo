import Titles from '../Components/Titles';
import dataComunity from '../Data/dataComunity..json';

const Comunity = () => {
  return (
    <section className="community section-padding pt-0 style-4">
      <div className="container">
        <Titles
          titleSmall="Canales de comunicacion"
          textBlack="Seguinos en"
          textColor="nuestras redes"
        />
        <div className="content">
          {dataComunity.data.map((item) => (
            <a key={item.id} href={item.href} className="commun-card">
              <div
                className="icon "
                style={{ width: '68px', textAlign: 'center' }}
              >
                <i className={item.icon}></i>
              </div>
              <div className="inf" style={{ width: '200px' }}>
                <h5>{item.title}</h5>
                <p>{item.text}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comunity;
