import Link from "next/link";
import { Button } from "reactstrap";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <div>
      <section className={styles.container}>
        <h1>
          <Link href="/posts/first-post"> Learn </Link> Next.js!
        </h1>
        <Button color="danger">Danger!</Button>
      </section>
    </div>
  );
}
