import { useState } from 'react';

const Collapse = ({ data, widthItem }) => {
  const [openPanelId, setOpenPanelId] = useState(
    data.filter((item) => item.collapse === true)[0]?.id
  );

  const togglePanel = (panelId) => {
    if (openPanelId === panelId) {
      setOpenPanelId(null);
    } else {
      setOpenPanelId(panelId);
    }
  };

  return (
    <div
      className="accordion"
      style={{ width: widthItem || '100%' }}
      id="accordionSt4"
    >
      {data.map((item) => (
        <div key={item.id} className="accordion-item border-bottom">
          <h2 className="accordion-header" id={`heading${item.id}`}>
            <button
              className={`accordion-button py-4 ${
                openPanelId === item.id ? '' : 'collapsed rounded-0'
              }`}
              type="button"
              data-bs-toggle="collapse"
              onClick={() => togglePanel(item.id)}
              aria-expanded={openPanelId === item.id ? true : false}
              aria-controls={`collapse${item.id}`}
              data-bs-target={`#collapse${item.id}`}
            >
              {item.textHeader}
            </button>
          </h2>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse rounded-0 ${
              openPanelId === item.id ? 'show' : ''
            }`}
            aria-labelledby={`heading${item.id}`}
            data-bs-parent="#accordionSt4"
          >
            <div className="accordion-body">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collapse;
