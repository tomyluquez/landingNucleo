import Titles from '../Components/Titles';
import dataFeatures from '../Data/dataFeatures.json';
import imgCircle from '../assets/img/Images/feat_circle.png';
import imgFeatures1 from '../assets/img/Logos/fe1.png';
import imgFeatures2 from '../assets/img/Logos/fe2.png';
import imgFeatures3 from '../assets/img/Logos/fe3.png';
import imgFeatures4 from '../assets/img/Logos/fe4.png';
import imgFeatures5 from '../assets/img/Logos/fe5.png';

const Features = () => {
  return (
    <section className="features pt-70 pb-70 style-4" id="features">
      <div className="container">
        <Titles
          titleSmall="Nucleo Check"
          textBlack="Increibles"
          textColor="caracteristicas"
        />
        <div className="content">
          {dataFeatures.data.map((feature) => (
            <div key={feature.id} className="features-card">
              <div className="icon img-contain">
                <img
                  src={
                    feature.id === 1
                      ? imgFeatures1
                      : feature.id === 2
                      ? imgFeatures2
                      : feature.id === 3
                      ? imgFeatures3
                      : feature.id === 4
                      ? imgFeatures4
                      : feature.id === 5 && imgFeatures5
                  }
                  alt={`feature-${feature.id}`}
                />
              </div>
              <h6>
                {feature.text1}
                <br /> {feature.text2}
              </h6>
            </div>
          ))}
        </div>
      </div>
      <img src={imgCircle} alt="" className="img-circle" />
    </section>
  );
};

export default Features;
