import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Button } from 'reactstrap';

export default function Home() {
    return (

        <main className = { styles.main }>
            <h1 className = { styles.title }>
                <Link href="/posts/first-post" > Learn </Link> Next.js!</h1>
            <Button color="danger">Danger!</Button>
        </main>
    )
}