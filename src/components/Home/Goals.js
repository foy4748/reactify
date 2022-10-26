import styles from "./Goals.module.css";

export default function Goals() {
  return (
    <section className={styles.goalsContainer}>
      <div className="d-flex justify-content-center">
        <div className={styles.sideLeft}>
          <h1>Goals</h1>
          <p>
            With frontend engineering come frameworks, and with frameworks comes
            React. Our Reactify course gives you the practical knowledge you
            need to be a true frontend expert.
          </p>
        </div>
        <div className={styles.sideRight}>
          <h1>Outline</h1>
          <p>
            We assume you already know HTML, CSS and Modern ES6 JavaScript. In
            our platform we will talk about React's design pattern, best
            practices, performance optimizations etc.
          </p>
        </div>
      </div>
    </section>
  );
}
