type FooterSocialCardProps = {
  platform: string;
  subtitle?: string;
  handle: string;
  href: string;
  iconSrc: string | null;
  iconAlt: string;
};

function FooterSocialCard({ platform, subtitle, handle, href, iconSrc, iconAlt }: FooterSocialCardProps) {
  const card = (
    <a className="footer__social-card" href={href} target="_blank" rel="noopener noreferrer">
      <div className="footer__card-info">
        <span className="footer__card-platform">{platform}</span>
        {subtitle && <span className="footer__card-subtitle">{subtitle}</span>}
        <span className="footer__card-handle">{handle}</span>
      </div>
      {iconSrc && (
        <img className="footer__card-icon" src={iconSrc} alt={iconAlt} />
      )}
    </a>
  );

  return card;
}

export type { FooterSocialCardProps };
export default FooterSocialCard;
