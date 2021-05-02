import styles from "./working.module.scss";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

type Member = {
  nickname: string;
  photo: string;
};

type WorkingCard = {
  projectName: string;
  platform: string;
  technologies: string[];
  members: Member[];
  progress: string;
  timeEstimated: string;
  leftTime: string;
  public: boolean;
};

export default function Working() {
  return (
    <div className={styles.box}>
      <div className={styles.header}>
        <div className={styles.titles}>
          <h2>Project Name</h2>
          <h3>Mobile / Desktop</h3>
        </div>
        <div className={styles.minicard}>
          <Link href="https://github.com/caiqueazevedo">
            <a target="_blank">
              <FontAwesomeIcon
                className={styles.icons}
                icon={faGithub}
                size="2x"
              />
            </a>
          </Link>
          <p>Public</p>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.members}>
          <p>Members</p>
          <div className={styles.images}>
            <Image
              src="/profile.jpg"
              alt="User 01"
              width="30px"
              height="30px"
            />
            <Image
              src="/profile-02.jpg"
              alt="User 01"
              width="30px"
              height="30px"
            />
            <Image
              src="/profile-03.jpg"
              alt="User 01"
              width="30px"
              height="30px"
            />
          </div>
        </div>
        <div className={styles.progress}></div>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
}
