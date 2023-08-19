const Progress = ({ progress, width }) => {
  const progressBarStyle = {
    width: `${progress}%`,
    height: '100%',
    background: 'linear-gradient(to right, #fafafa, #fafafa)',
    transition: 'width 0.3s ease-in-out',
  };

  const containerStyle = {
    width: `${width === 100 ? '100%' : '50%'}`,
    height: '2px',
    background: 'rgba(0, 0, 0, 0.2)', // Cambio el color de fondo para mayor contraste
    borderRadius: '5px',
    overflow: 'hidden',
    zIndex: 999,
    opacity: `${width === 100 ? 0 : 1}`,
    transition: 'all 0.3s ease-in-out',
  };

  return (
    <div style={containerStyle}>
      <div style={progressBarStyle}></div>
    </div>
  );
};

export default Progress;
