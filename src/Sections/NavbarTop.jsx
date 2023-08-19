const NavbarTop = () => {
  return (
    <div className="top-navbar style-4">
      <div className="container">
        <div className="content text-white">
          <span className="btn sm-butn bg-white py-0 px-2 me-2 fs-10px">
            <small className="fs-10px">OFERTA</small>
          </span>
          <img
            src="../src/assets/img/icons/imoj_heart.png"
            alt=""
            className="icon-15"
          />
          <span className="fs-10px op-6">Obeten un </span>
          <small className="op-10 fs-10px">20% OFF por siempre </small>
          <span className="fs-10px op-6">para nuevas cuentas</span>
          <a
            href="page-contact-5.html"
            className="fs-10px text-decoration-underline ms-2"
          >
            Registrate ahora
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
