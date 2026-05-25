import './Navbar.scss';


function Navbar() {

  const navigationLinks: { label: string; href: string }[] = [
    { label: 'Over mij', href: '#about' },
    { label: "Meer foto's", href: '/gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="navbar">
      <a className="navbar__logo" href="/">RAMIRO SNACKEY</a>
      <ul className="navbar__list">{
        navigationLinks.map((link) => (
          <li key={link.href}>
            <a className="navbar__link" href={link.href}>{link.label}</a>
          </li>
        ))}</ul>
    </nav>
  );
}

export default Navbar;
