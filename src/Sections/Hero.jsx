import InfoHero from '../Components/InfoHero';
import imgHero from '../assets/img/Images/header_4.png';
import imgHero2 from '../assets/img/Images/header_4_bubble.png';
import imgHero3 from '../assets/img/Images/header_4_wave.png';

const Hero = () => {
  return (
    <header className="style-4" data-scroll-index="0">
      <div className="content">
        <div className="container">
          <div className="row gx-0">
            <InfoHero />
            <div className="col-lg-6">
              <div className="img">
                <img src={imgHero} alt="" />
              </div>
            </div>
          </div>
        </div>
        <img src={imgHero2} alt="" className="bubble" />
      </div>
      <img src={imgHero3} alt="" className="wave" />
    </header>
  );
};

export default Hero;
