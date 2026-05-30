import './Hero.scss';

const HERO_IMAGE_PATH = '/images/ramiro.jpeg';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        
        <div className="hero__content">
          <span className="hero__badge">Theatermaker &amp; Performer</span>
          <h1 className="hero__name">Ramiro</h1>
          <p className="hero__subtitle">De Bangemannen — Cabaret &amp; Theater</p>
          <p className="hero__bio">
            Acteur, Theatermaker en oprichter van theaterduo De Bangemannen. Ramiro maakt Theater dat schuurt, 
            ontroert en mensen iets minder eenzaam laat voelen.
          </p>
        </div>

        <div className="hero__visual">
          <div className="hero__circle hero__circle--large" />
          <div className="hero__circle hero__circle--small-top" />
          <div className="hero__circle hero__circle--small-bottom" />
          <div className="hero__square" />
          <img
            className="hero__photo"
            src={HERO_IMAGE_PATH}
            alt="Portret van Ramiro"
          />
        </div>

        <div className="hero__actions">
          <a className="hero__button hero__button--filled" href="/gallery">Bekijk meer foto's</a>
          <a className="hero__button hero__button--outlined" href="#about">Over Ramiro</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
