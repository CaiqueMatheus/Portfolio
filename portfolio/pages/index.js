import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
    return (

        <main className = { styles.main }>
            <h1 className = { styles.title }>
            <Link href="/posts/first-post" > Learn </Link> Next.js!</h1>
        </main>

        
    )
}