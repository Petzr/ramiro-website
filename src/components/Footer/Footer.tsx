import './Footer.scss';
import { FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import FooterSocialCard from './FooterSocialCard';

type SocialCard = {
  platform: string;
  subtitle?: string;
  handle: string;
  href: string;
  icon: React.ReactNode;
  iconClassName: string;
};

type ContactLink = {
  label: string;
  href: string;
};

const SOCIAL_CARDS: SocialCard[] = [
  {
    platform: 'Instagram',
    subtitle: 'Persoonlijk',
    handle: '@ramirosfeestje',
    href: 'https://www.instagram.com/ramirosfeestje?igsh=cHpzaHJhYjkyZjR0&utm_source=qr',
    icon: <FaInstagram />,
    iconClassName: 'footer__card-icon--instagram',
  },
  {
    platform: 'Instagram',
    subtitle: 'De Bangemannen',
    handle: '@bangemannen',
    href: 'https://www.instagram.com/bangemannen?igsh=MTJndHpqMjc4M3M0MQ%3D%3D&utm_source=qr',
    icon: <FaInstagram />,
    iconClassName: 'footer__card-icon--instagram',
  },
  {
    platform: 'LinkedIn',
    handle: 'Ramiro Snackey',
    href: 'https://www.linkedin.com/in/ramiro-snackey-935439383?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    icon: <FaLinkedin />,
    iconClassName: 'footer__card-icon--linkedin',
  },
  {
    platform: 'YouTube',
    handle: '@ramirosnackey1288',
    href: 'https://youtube.com/@ramirosnackey1288?si=2Kp7rWQL32MGHuG5',
    icon: <FaYoutube />,
    iconClassName: 'footer__card-icon--youtube',
  },
];

const CONTACT_LINKS: ContactLink[] = [
  { label: 'ramirosnackey@hotmail.com', href: 'mailto:ramirosnackey@hotmail.com' },
  { label: 'bangemannen@hotmail.com', href: 'mailto:bangemannen@hotmail.com' },
];

const KVK_NUMBER = '98396242';

function Footer() {
  const socialCards = SOCIAL_CARDS.map((card) => (
    <FooterSocialCard
      key={`${card.platform}-${card.handle}`}
      platform={card.platform}
      subtitle={card.subtitle}
      handle={card.handle}
      href={card.href}
      icon={card.icon}
      iconClassName={card.iconClassName}
    />
  ));

  const contactLinks = CONTACT_LINKS.map((link) => (
    <a key={link.label} className="footer__contact-link" href={link.href}>
      {link.label}
    </a>
  ));

  const footerElement = (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__eyebrow">Volg Ramiro</p>
        <div className="footer__social-grid">{socialCards}</div>
        <div className="footer__contact">{contactLinks}</div>
        <p className="footer__legal">KVK {KVK_NUMBER} · © 2025 Ramiro — De Bangemannen</p>
      </div>
    </footer>
  );

  return footerElement;
}

export default Footer;
