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
    <div className="flex fixed w-screen justify-end bottom-0 right-0 p-3.5 bg-gray">
      <div className="icons">
        <Link href="https://www.facebook.com/CaiqueMatheusA/">
          <a className="mr-4" target="_blank">
            <FontAwesomeIcon
              className="text-gray-200 hover:text-violet"
              icon={faFacebookSquare}
              size="lg"
            />
          </a>
        </Link>
        <Link href="https://www.instagram.com/eujovis/">
          <a className="mr-4" target="_blank">
            <FontAwesomeIcon
              className="text-gray-200 hover:text-violet"
              icon={faInstagramSquare}
              size="lg"
            />
          </a>
        </Link>
        <Link href="https://www.facebook.com/CaiqueMatheusA/">
          <a className="mr-4" target="_blank">
            <FontAwesomeIcon
              className="text-gray-200 hover:text-violet"
              icon={faLinkedin}
              size="lg"
            />
          </a>
        </Link>
        <Link href="https://www.behance.net/eujovis">
          <a className="mr-4" target="_blank">
            <FontAwesomeIcon
              className="text-gray-200 hover:text-violet"
              icon={faBehanceSquare}
              size="lg"
            />
          </a>
        </Link>
        <Link href="https://www.artstation.com/eujovis">
          <a className="mr-4" target="_blank">
            <FontAwesomeIcon
              className="text-gray-200 hover:text-violet"
              icon={faArtstation}
              size="lg"
            />
          </a>
        </Link>
        <Link href="https://github.com/caiqueazevedo">
          <a className="mr-4" target="_blank">
            <FontAwesomeIcon
              className="text-gray-200 hover:text-violet"
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
