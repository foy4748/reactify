import styles from "./Success.module.css";

export default function Success() {
  return (
    <section className={styles.successContainer}>
      <div>
        <h2> 30K+</h2>
        <p>Students</p>
      </div>
      <div>
        <h2>500+</h2>
        <p>Mentors</p>
      </div>
      <div>
        <h2>10+</h2>
        <p>Vendors</p>
      </div>
    </section>
  );
}
