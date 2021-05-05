import styles from "./side-navbar.module.scss";
import ActiveLink from "../services/ActiveLink";
import React from "react";
import { useRouter } from "next/router";

export default function sideNavbar() {
  const router = useRouter();
  return (
    <section className={styles.sideNavbar}>
      <div className={styles.nav}>
        <ul>
          <ActiveLink href="/" activeClassName="active">
            <a>
              <li>Home</li>
            </a>
          </ActiveLink>
          <ActiveLink href="/codes/dashboard" activeClassName="active">
            <a>
              <li>Codes</li>
            </a>
          </ActiveLink>
          <ActiveLink href="/">
            <a>
              <li>Design</li>
            </a>
          </ActiveLink>

          <div className={styles.spacer} />

          <ActiveLink href="">
            <a>
              <li>About</li>
            </a>
          </ActiveLink>
          <ActiveLink href="">
            <a>
              <li>Contact</li>
            </a>
          </ActiveLink>

          <div className={styles.spacer} />
        </ul>
      </div>
    </section>
  );
}
