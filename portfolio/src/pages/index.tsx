import Link from "next/link";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <div className="shadow-md">
      <section className={styles.container}>
        <h1 >
          <Link href="#"> Learn </Link> Next.js!
        </h1>
      </section>
    </div>
  );
}
