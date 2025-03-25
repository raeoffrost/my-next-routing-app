import { useRouter } from "next/router";
import Nav from "@/pages/components/Nav";
import styles from "@/styles/Home.module.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Post = ({ name, content }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
      <Nav />
      <main className={styles.main}>
        <h1>Assignment 2</h1>
        <h3>{name}</h3>
        <p>Post ID: {id}</p>
        <p>{content}</p>
      </main>
    </div>
  );
};
export default Post;
