import styles from "./side-navbar.module.scss";
import ActiveLink from "../services/ActiveLink";
import React from "react";
import { useRouter } from "next/router";

export default function sideNavbar() {
  return (
    <section className="fixed h-screen w-56 top-0 left-0 bg-gray p-4 ">
      <div className="m-4">
        <ul className="list-none p-0 text-gray-200 text-lg font-varela">
          <ActiveLink href="/" activeClassName="active">
            <a className={styles.navHover}>
              <li className={styles.navItem}>Home</li>
            </a>
          </ActiveLink>
          <ActiveLink href="/codes/dashboard" activeClassName="active">
            <a className={styles.navHover}>
              <li className={styles.navItem}>Codes</li>
            </a>
          </ActiveLink>
          <ActiveLink href="/">
            <a className={styles.navHover}>
              <li className={styles.navItem}>Design</li>
            </a>
          </ActiveLink>

          <div className={styles.spacer} />

          <ActiveLink href="">
            <a className={styles.navHover}>
              <li className={styles.navItem}>About</li>
            </a>
          </ActiveLink>
          <ActiveLink href="">
            <a className={styles.navHover}>
              <li className={styles.navItem}>Contact</li>
            </a>
          </ActiveLink>

          <div className={styles.spacer} />
        </ul>
      </div>
    </section>
  );
}
