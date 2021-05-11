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

export default function home() {
  return (
    <div className="container mx-auto">
      <section className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <Working />
        <Working />
        <Working />
        <Working />
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
