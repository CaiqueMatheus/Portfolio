import Link from "next/link";
import { Button } from "reactstrap";

export default function Home() {
  return (
    <main>
      <h1>
        <Link href="/posts/first-post"> Learn </Link> Next.js!
      </h1>
      <Button color="danger">Danger!</Button>
    </main>
  );
}
