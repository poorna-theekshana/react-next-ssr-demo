import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home = ({ serverRenderedData }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js SSR Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          This is a simple Server-Side Rendering (SSR) demo in Next.js.
        </p>

        <div className={styles.card}>
          <h2>Server-Side Rendered Data</h2>
          <p>{serverRenderedData}</p>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
};

export async function getServerSideProps() {
  // Simulate fetching data from an API
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();

  // Extract relevant data for the demo
  const serverRenderedData = data.title || "Failed to fetch data";

  return {
    props: {
      serverRenderedData,
    },
  };
}

export default Home;
