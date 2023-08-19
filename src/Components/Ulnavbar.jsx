import dataUl from '../Data/dataUlNavbar.json';
const Ulnavbar = () => {
  return (
    <ul className="navbar-nav mb-2 mb-lg-0 text-uppercase">
      {dataUl.data.map((li) => (
        <li key={li.id} className="nav-item">
          <a className="nav-link" href={li.href}>
            {li.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Ulnavbar;
