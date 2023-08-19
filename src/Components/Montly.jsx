const Montly = ({ data, isMonthly }) => {
  return (
    <>
      {data.map((item) => (
        <div
          key={item.id}
          className="containerPlan"
          style={
            item.elegido
              ? {
                  border: '4px solid #7ea940',
                  backgroundColor: '#fff',
                }
              : null
          }
        >
          {item.elegido && (
            <div className="containerFavoritePlan">
              <i
                className="fa-solid fa-trophy"
                style={{ color: '#fafafa' }}
              ></i>
              <span>El mas elegido</span>
            </div>
          )}
          <div className="flexRow" style={{ height: '70px', fontSize: '25px' }}>
            <i className={item.icon}></i>
            <h2>{item.title}</h2>
          </div>
          <p style={{ height: '80px' }}>{item.description}</p>
          <p>
            <span className="spanPrice">
              ${isMonthly ? item.yearPrice : item.price}
            </span>{' '}
            <span className="secondSpanPrice">
              {isMonthly ? '/anual' : '/mes'}
            </span>
          </p>
          <div style={{ minHeight: '120px', marginTop: '20px' }}>
            {item.ul.map((virtud) => (
              <div key={virtud.id} className="containerPlanInd">
                <i className={virtud.icon}></i>
                <span>{virtud.text}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Montly;
