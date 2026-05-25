import './Navbar.scss';

const navigationLinks: { label: string; href: string }[] = [
  { label: 'Home', href: '#home' },
  { label: 'Over mij', href: '#about' },
  { label: 'Werk', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const navItems = navigationLinks.map((link) => (
    <li key={link.href}>
      <a className="navbar__link" href={link.href}>{link.label}</a>
    </li>
  ));

  return (
    <nav className="navbar">
      <a className="navbar__logo" href="#home">Ramiro</a>
      <ul className="navbar__list">{navItems}</ul>
    </nav>
  );
}

export default Navbar;
