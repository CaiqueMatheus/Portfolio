import { GetStaticProps } from "next";
import { api } from "../../services/api";
import { format, parseISO } from "date-fns";
import styles from "./home.module.scss";

type User = {
  nickname: string;
  description: string;
  photo: string;
};

type Member = {
  nickname: string;
  photo: string;
};

type Repository = {
  name: string;
  totalCommits: number;
};

type Contribuition = {
  totalCommits: string;
  topRepoList: Repository[];
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

type ProfileCard = {
  user: User;
  technologies: string[];
  repositories: number;
  commits: number;
  contribuition: Contribuition;
};

export default function home(ProfileCard, WorkingCard) {
  return (
    <div className={styles.container}>
      <section className={styles.board}>
        <div className={styles.working}>
          <div className={styles.card}>
            <h3></h3>
          </div>
        </div>
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
/*
export const getServerSideProps: GetStaticProps = async () => {
  const { data } = await api.get("working-card", {
    params: {
      _limit: 4,
      _sort: "published_at",
      _order: "desc",
    },
  });

  let workingCards = data.map((card) => {
    return {
      projectName: card.projectName,
      platform: card.platform,
      technologies: card.technologies,
      members: card.members,
      progress: card.progress,
      timeEstimated: card.timeEstimated,
      leftTime: card.leftTime,
      public: card.public,
    };
  });

  const latestCard = workingCards.slice(0, 2);
  const allCards = workingCards.slice(2, workingCards.length);

  return {
    props: {
      workingCards,
      revalidate: 60 * 60 * 8,
    },
  };
}; */
