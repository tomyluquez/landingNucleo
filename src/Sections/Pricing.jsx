import { useState } from 'react';
import Montly from '../Components/Montly';
import Titles from '../Components/Titles';
import dataPricing from '../Data/dataPricing.json';

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(false); // Estado para el interruptor

  const handleToggleChange = () => {
    setIsMonthly(!isMonthly); // Cambiar el estado cuando se cambie el interruptor
  };

  return (
    <section
      className="pricing section-padding style-4 pb-50"
      data-scroll-index="6"
      id="precios"
      style={{ backgroundColor: '#e8eee0' }}
    >
      <div className="container">
        <Titles
          titleSmall="Precio de planes"
          textBlack="Elige el plan ideal para"
          textColor="tu negocio"
        />
        <div className="content">
          <div className="toggle_switch d-flex align-items-center justify-content-center mb-40">
            <div className="form-check form-switch p-0">
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                <small>Pago mensual</small>
              </label>
              <input
                className="form-check-input float-none bg-blue4"
                type="checkbox"
                id="flexSwitchCheckDefault"
                checked={isMonthly}
                onChange={handleToggleChange} // Manejar el cambio del interruptor
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                <small>Pago anual</small>
              </label>
            </div>
          </div>
          <div className="containerPrices">
            <Montly data={dataPricing.data} isMonthly={isMonthly} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
