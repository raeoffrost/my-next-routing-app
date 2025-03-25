import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Nav from "@/pages/components/Nav";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const posts = [
  {
    id: 1,
    name: "Weather News",
    preview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    id: 2,
    name: "Political News",
    preview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    id: 3,
    name: "Culture News",
    preview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    id: 4,
    name: "World News",
    preview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
];

const navStyle = {
  display: "flex",
  gap: "30px",
  listStyle: "none",
};

const postBox = {
  border: "2px solid rgb(81, 70, 94)",
  padding: "20px",
  minHeight: "200px",
  minWidth: "150px",
  borderRadius: "5px",
  backgroundColor: "rgb(25, 27, 32)",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Assignment 2</title>
        <meta name="description" content="Assignment 2 - CPAN 144" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
        <Nav />
        <main className={styles.main}>
          <h1>Assignment 2</h1>
          <h3>Home + Blog Posts</h3>
          <p> Check out the posts that display dynamic routing using the links below.</p>
          <ul style={navStyle}>
            {posts.map((post) => (
              <Link href={`/posts/${post.id}`}>
                <div style={postBox}>
                  <h4 style={{ color: "rgb(196, 170, 226)" }}>{post.name}</h4>
                  <br />
                  <div>{post.preview}</div>
                </div>
              </Link>
            ))}
          </ul>
        </main>
      </div>
    </>
  );
}
