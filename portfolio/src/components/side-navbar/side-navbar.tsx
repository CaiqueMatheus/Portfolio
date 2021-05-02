import styles from "./side-navbar.module.scss";

export default function sideNavbar() {
  return (
    <section className={styles.sideNavbar}>
      <div className={styles.nav}>
        <ul>
          <a>
            <li>Home</li>
          </a>
          <a>
            <li>Codes</li>
          </a>
          <a>
            <li>Design</li>
          </a>
          <div className={styles.spacer} />
          <a>
            <li>About</li>
          </a>
          <a>
            <li>Contact</li>
          </a>
          <div className={styles.spacer} />
        </ul>
      </div>
    </section>
  );
}
