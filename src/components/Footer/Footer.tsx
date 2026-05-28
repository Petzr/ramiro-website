import './Footer.scss';

type SocialLink = {
  label: string;
  href: string;
};

function Footer() {
  const socialLinks: SocialLink[] = [
    { label: 'Instagram', href: '#' },
    { label: 'Facebook', href: '#' },
  ];

  const footerElement = (
    <footer className="footer">
      <div className="footer__socials">
        {socialLinks.map((link) => (
          <a key={link.label} className="footer__social-link" href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
      <p className="footer__copyright">© 2025 Ramiro — De Bangemannen</p>
    </footer>
  );

  return footerElement;
}

export default Footer;
