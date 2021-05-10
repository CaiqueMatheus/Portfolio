import styles from "./side-navbar.module.scss";
import ActiveLink from "../services/ActiveLink";
import React from "react";
import { useRouter } from "next/router";

export default function sideNavbar() {
  const router = useRouter()
  return (
    <section className="md:fixed h-screen w-56 top-0 left-0 p-4 ">
      <div className="m-4">
        <ul className="list-none p-0 text-gray-200 text-lg font-varela">
          <div className={styles.sidebar}>
            <ActiveLink href="/" activeClassName="">
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

            <ActiveLink href="#">
              <a>
                <li>About</li>
              </a>
            </ActiveLink>
            <ActiveLink href="#">
              <a>
                <li>Contact</li>
              </a>
            </ActiveLink>
          </div>

          <div className={styles.spacer} />
        </ul>
      </div>
    </section>
  );
}
