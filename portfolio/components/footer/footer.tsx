import { Navbar } from "reactstrap";
import styles from "./icons.module.scss";
import ReactDOM from "react-dom";
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
    <Navbar color="light" expand="md" fixed="bottom">
      <FontAwesomeIcon
        className={styles.icons}
        icon={faFacebookSquare}
        size="lg"
      />
      <FontAwesomeIcon
        className={styles.icons}
        icon={faInstagramSquare}
        size="lg"
      />
      <FontAwesomeIcon className={styles.icons} icon={faLinkedin} size="lg" />
      <FontAwesomeIcon
        className={styles.icons}
        icon={faBehanceSquare}
        size="lg"
      />
      <FontAwesomeIcon className={styles.icons} icon={faArtstation} size="lg" />
      <FontAwesomeIcon className={styles.icons} icon={faGithub} size="lg" />
    </Navbar>
  );
}
