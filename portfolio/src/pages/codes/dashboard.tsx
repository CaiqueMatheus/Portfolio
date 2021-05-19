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
    <div className="container-fluid mx-auto font-varela">
      <section className="grid grid-cols-1 grid-rows-5 md:grid-cols-12 gap-4">
        <Working />
        <Working />
        <Working />
        <Working />
        <aside className="col-span-3 row-span-5 text-center text-gray-200 bg-gray-500 mt-4 rounded-2xl shadow-md">
          <img src="#" alt="" />
          <h2 className="text-lg text-violet leading-none">Caiqueazevedo</h2>
          <h3 className="text-xs">Designer & Developer</h3>
          <div className="col-start-2 col-span-7 p-4">
            <h2 className="">Most used technologies</h2>
            <div className="flex flex-row align-center justify-center">
              <p className="wr-2">Angular</p>
              <div className="flex align-center justify-center pt-2 h-2 bg-violet w-4/12"/>
            </div>
          </div>
        </aside>
        <div className="col-span-8 row-span-2 rounded-2xl bg-gray-500 shadow-md">
          <div className={styles.commits}>
            <div className={styles.dayCommits}></div>
            <div className={styles.commitsHistory}></div>
          </div>
          <div className={styles.redirectBox}></div>
        </div>
        <div className={"col-span-8 rounded-2xl bg-gray-500 shadow-md"}></div>
      </section>
    </div>
  );
}
{
  /*
export async function getStaticProps() {
  const res = await fetch("http://localhost:...");
  const data = await res.json();
  return {
    props:
    {
      data
    }
  };
}
*/
}
