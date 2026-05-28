import './Navbar.scss';


function Navbar() {

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <a className="navbar__logo" href="/">RAMIRO SNACKEY</a>
        <ul className="navbar__list">
          <li>
            <a className="navbar__link" href="/">Home</a>
          </li>
          <li>
            <a className="navbar__link" href="/gallery">Meer foto's</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
