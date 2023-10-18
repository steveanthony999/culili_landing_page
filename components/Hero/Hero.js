import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.Hero__container}>
        <div className={styles.Hero__container__left}>
          <div className={styles.Hero__lead_in}>
            <p>From byte to bite...</p>
          </div>
          <div className={styles.Hero__heading}>
            <h1>
              Lead the culinary <span>digital</span> Renaissance.
            </h1>
          </div>
          <div className={styles.Here__sub_heading}>
            <p>
              Move beyond common website builders and create unique, next-gen
              experiences for your restaurant clients.
            </p>
          </div>
          <div className={styles.Hero__cta}>
            <input
              type="email"
              name="Hero__cta"
              id="Hero__cta"
              placeholder="Email"
            />
            <button>Get early access</button>
          </div>
        </div>
        <div className={styles.Hero__container__right}>
          <div className={styles.Hero__image}>
            <img
              src={'/images/isodevchef.png'}
              alt="Developer working in Chef's kitchen"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
