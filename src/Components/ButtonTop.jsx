import { useEffect, useState } from 'react';

const ButtonTop = () => {
  const [navScroll, setNavScroll] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div className={`topButton ${navScroll ? 'active' : ''}`}>
        <a onClick={scrollToTop}>
          <i className="bi bi-chevron-up" />
        </a>
      </div>
    </>
  );
};

export default ButtonTop;
