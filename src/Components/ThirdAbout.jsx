import dataAbout from '../Data/dataAbout.json';
import calendarImg from '../assets/img/Images/about_s4_img3.png';
import bublesImg from '../assets/img/Images/about_s4_bubble.png';
import Titles from './Titles';
const ThirdAbout = () => {
  return (
    <div className="content trd-content">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            <div className="img mb-30 mb-lg-0">
              <img src={calendarImg} alt="" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="info">
              <Titles
                titleSmall="Beatiful themes"
                textBlack="Focus more whit"
                textColor="Dark theme"
                textAlign="start"
              />
              <p className="text mb-40">
                Apply Notero’s elegant themes to your taste. Dark themes work
                excellently for those who prefer distraction-free mode.
              </p>
              <ul>
                {dataAbout.dataThird.map((item) => (
                  <li
                    key={item.id}
                    className={`d-flex align-items-center ${
                      !item.op && 'op-4'
                    }`}
                  >
                    <i className="bi bi-dot fs-2 me-2 lh-1 color-blue4"></i>
                    <h6 className="fw-bold">{item.text}</h6>
                  </li>
                ))}
              </ul>
              <a
                href="page-services-5.html"
                className="btn rounded-pill bg-blue4 fw-bold text-white mt-50 buton"
              >
                <small> Discovery Now </small>
              </a>
            </div>
          </div>
        </div>
      </div>
      <img src={bublesImg} alt="" className="bubble" />
    </div>
  );
};

export default ThirdAbout;
