import Titles from '../Components/Titles';
import dataFeatures from '../Data/dataFeatures.json';
import imgCircle from '../assets/img/Images/feat_circle.png';
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
                <img src={feature.src} alt={`feature-${feature.id}`} />
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
