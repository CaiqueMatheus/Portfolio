import { GetStaticProps } from "next";
import { api } from "../../services/Api";
import { format, parseISO } from "date-fns";
import styles from "./codes.module.scss";
import React from "react";
import Working from "../../components/codes/boxes/working/working";

type User = {
  nickname: string;
  description: string;
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
          <Working />
          <Working />
          <Working />
          <Working />
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
