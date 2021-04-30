import styles from "./footer.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  faBehanceSquare,
  faArtstation,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  faBehanceSquare,
  faArtstation,
  faGithub
);

export default function footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.icons}>
        <Link href="https://www.facebook.com/CaiqueMatheusA/">
          <a target="_blank">
            <FontAwesomeIcon
              className={styles.icons}
              icon={faFacebookSquare}
              size="lg"
            />
          </a>
        </Link>
        <Link href="https://www.instagram.com/eujovis/">
          <a target="_blank">
            <FontAwesomeIcon
              className={styles.icons}
              icon={faInstagramSquare}
              size="lg"
            />
          </a>
        </Link>
        <Link href="https://www.facebook.com/CaiqueMatheusA/">
          <a target="_blank">
            <FontAwesomeIcon
              className={styles.icons}
              icon={faLinkedin}
              size="lg"
            />
          </a>
        </Link>
        <Link href="https://www.behance.net/eujovis">
          <a target="_blank">
            <FontAwesomeIcon
              className={styles.icons}
              icon={faBehanceSquare}
              size="lg"
            />
          </a>
        </Link>
        <Link href="https://www.artstation.com/eujovis">
          <a target="_blank">
            <FontAwesomeIcon
              className={styles.icons}
              icon={faArtstation}
              size="lg"
            />
          </a>
        </Link>
        <Link href="https://github.com/caiqueazevedo">
          <a target="_blank">
            <FontAwesomeIcon
              className={styles.icons}
              icon={faGithub}
              size="lg"
            />
          </a>
        </Link>
      </div>
      <div className="spacer" />
    </div>
  );
}
