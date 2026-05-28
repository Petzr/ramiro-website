import './About.scss';

const ABOUT_IMAGE_PATH = '/images/Ramiro 2.JPG';

const BIO_PARAGRAPH_ONE =
  'Ramiro is theatermaker, performer en een van de oprichters van theaterduo De Bangemannen. ' +
  'Met humor, eerlijkheid en een scherp oog voor het menselijke verbindt hij mensen op de werkvloer en op het podium.';

const BIO_PARAGRAPH_TWO =
  'Hij maakt cabaret en jeugdtheater dat mensen raakt — en een beetje minder eenzaam laat voelen. ' +
  'De Bangemannen speelt door heel Nederland en combineert theater met maatschappelijke thema's.';

function About() {
  const section = (
    <section id="about" className="about">
      <div className="about__inner">
        <div className="about__content">
          <h2 className="about__title">Over Ramiro</h2>
          <p className="about__bio">{BIO_PARAGRAPH_ONE}</p>
          <p className="about__bio">{BIO_PARAGRAPH_TWO}</p>
        </div>

        <div className="about__photo-wrapper">
          <div className="about__accent about__accent--circle" />
          <div className="about__accent about__accent--block" />
          <img
            className="about__photo"
            src={ABOUT_IMAGE_PATH}
            alt="Ramiro op het podium"
          />
        </div>
      </div>
    </section>
  );

  return section;
}

export default About;
