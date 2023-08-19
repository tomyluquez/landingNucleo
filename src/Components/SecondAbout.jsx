import dataAbout from '../Data/dataAbout.json';
import chromeIcon from '../assets/img/icons/chrome_icon.png';
import aboutIpad from '../assets/img/Images/ipad.png';
import aboutBubble2 from '../assets/img/Images/about_s4_bubble2.png';
import Collapse from './Collapse';
import Titles from './Titles';
const SecondAbout = () => {
  return (
    <div className="content sec-content">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5 order-2 order-lg-0">
            <div className="info">
              <Titles
                titleSmall="Ahorro en papel"
                textBlack="Monitor de cocina,"
                textColor="comandas virtuales"
                textAlign={'start'}
              />
              <p className="text mb-40">
                Ahorro en papel + cuidado del planeta. Con el monitor de cocina,
                podras adicionar todo sin necesidad de imprimir. Teniendo un
                dispositivo en la cocina podrás encargarte de todo.
              </p>
              <div className="faq style-3 style-4">
                <div className="accordion" id="accordionExample">
                  <Collapse data={dataAbout.dataSecond} />
                </div>
              </div>
              <a
                href="https://chrome.google.com/webstore/category/extensions"
                className="btn btn-img mt-40 rounded-pill buton"
                target="_blank"
                rel="noreferrer"
              >
                <div className="icon img-contain">
                  <img src={chromeIcon} alt="" />
                </div>
                <div className="inf">
                  <small> Available in the </small>
                  <h6>Chrome Web Store</h6>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-6 order-0 order-lg-2">
            <div className="img mb-30 mb-lg-0">
              <img src={aboutIpad} alt="" />
            </div>
          </div>
        </div>
      </div>
      <img src={aboutBubble2} alt="" className="bubble2" />
    </div>
  );
};

export default SecondAbout;
