import styles from "./home.module.scss";

type user = {
  nickname: string;
  description: string;
  photo: string;
};

type member = {
  nickname: string;
  photo: string;
};

type repository = {
  name: string;
  totalCommits: number;
};

type contribuition = {
  totalCommits: string;
  topRepoList: repository[];
};

type working = {
  projectName: string;
  platform: string;
  technologies: string[];
  members: member[];
  progress: string;
  timeEstimated: string;
  leftTime: string;
  public: boolean;
};

type profileCard = {
  user: user;
  technologies: string[];
  repositories: number;
  commits: number;
  contribuition: contribuition;
};

export default function home() {
  return (
    <div className={styles.container}>
      <section className={styles.board}>
        <div className={styles.working}></div>
        <div className={styles.infos}>
          <div className={styles.commits}>
            <div className={styles.dayCommits}></div>
            <div className={styles.commitsHistory}></div>
          </div>
          <div className={styles.redirectBox}></div>
        </div>
      </section>
      <aside className={styles.github}></aside>
    </div>
  );
}
