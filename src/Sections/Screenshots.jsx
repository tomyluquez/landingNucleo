import dataScreenshots from '../Data/dataScreenshots.json';

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
                    src={screenshot.src}
                    alt={`screenshot-${screenshot.id}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img
        src="src/assets/img/Screenshots/hand.png"
        alt=""
        className="mob-hand"
      />
    </section>
  );
};

export default Screenshots;
