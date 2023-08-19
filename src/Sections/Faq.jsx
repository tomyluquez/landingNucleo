import Collapse from '../Components/Collapse';
import Titles from '../Components/Titles';
import dataFaq from '../Data/dataFaq.json';

const Faq = () => {
  return (
    <section
      className="faq section-padding style-4 pt-50"
      data-scroll-index="7"
      id="faq"
    >
      <div className="container">
        <Titles
          titleSmall="Preguntas frecuentes"
          textBlack="Sacate todas las dudas que tengas"
        />
        <div className="content">
          <div className="faq style-3 style-4">
            <div className="accordion" id="accordionSt4">
              <div
                className="row gx-5"
                style={{ display: 'grid', placeItems: 'center' }}
              >
                <div className="col-lg-6 collapseFaq">
                  <Collapse data={dataFaq.data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
