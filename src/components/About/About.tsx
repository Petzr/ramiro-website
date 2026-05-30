import './About.scss';

const ABOUT_IMAGE_PATH = '/images/nude-in-woods.jpg';

function About() {
  const section = (
    <section id="about" className="about">
      <div className="about__inner">
        <div className="about__photo-wrapper">
          <div className="about__accent about__accent--circle" />
          <div className="about__accent about__accent--block" />
          <img
            className="about__photo"
            src={ABOUT_IMAGE_PATH}
            alt="Ramiro op het podium"
          />
        </div>

        <div className="about__content">
          <h2 className="about__title">Over Ramiro</h2>
          <p className="about__bio">
            Ramiro is theatermaker, performer en een van de oprichters van theaterduo De Bangemannen.
            Met humor, eerlijkheid en een scherp oog voor het menselijke verbindt hij mensen op het podium en op de werkvloer.
          </p>
          <p className="about__bio">
            Als fysieke speler die even goed thuis is in tekst als in beweging, zoekt hij altijd naar de onverwachte ingang. De hoek die niemand ziet aankomen maar achteraf vanzelfsprekend voelt.
            Samen met Martijn Aalten vormt hij theaterduo De Bangemannen, waarmee hij cabaret, jeugdtheater en poppenspel inzet om mensen een hart onder de riem te steken.
          </p>
        </div>
      </div>
    </section>
  );

  return section;
}

export default About;
