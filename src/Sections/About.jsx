import FirstAbout from '../Components/FirstAbout';
import Integraciones from '../Components/Integraciones';
import SecondAbout from '../Components/SecondAbout';
import ThirdAbout from '../Components/ThirdAbout';

const About = () => {
  return (
    <section className="about section-padding style-4" id="about">
      <FirstAbout />
      <SecondAbout />
      <ThirdAbout />
      <Integraciones />
    </section>
  );
};

export default About;
