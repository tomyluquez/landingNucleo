import dataScreenshots from '../Data/dataScreenshots.json';
import imgHand from '../assets/img/Screenshots/hand.png';
import imgScreen1 from '../assets/img/Screenshots/1.png';
import imgScreen2 from '../assets/img/Screenshots/2.png';
import imgScreen3 from '../assets/img/Screenshots/3.png';
import imgScreen4 from '../assets/img/Screenshots/4.png';
import imgScreen5 from '../assets/img/Screenshots/5.png';

const Screenshots = () => {
  return (
    <section
      className="screenshots style-4"
      data-scroll-index="4"
      id="pantallas"
    >
      <div className="screenshots-slider style-4">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {dataScreenshots.data.map((screenshot) => (
              <div key={screenshot.id} className="swiper-slide">
                <div className="img">
                  <img
                    src={
                      screenshot.id === 1
                        ? imgScreen1
                        : screenshot.id === 2
                        ? imgScreen2
                        : screenshot.id === 3
                        ? imgScreen3
                        : screenshot.id === 4
                        ? imgScreen4
                        : screenshot.id === 5 && imgScreen5
                    }
                    alt={`screenshot-${screenshot.id}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img src={imgHand} alt="" className="mob-hand" />
    </section>
  );
};

export default Screenshots;
