import { useRouter } from "next/router";
import Link from "next/link";
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

const Post = ({ name }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
      <Nav />
      <main className={styles.main}>
        <h1>Assignment 2</h1>
        <h3>Post ID: {id}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </main>
    </div>
  );
};
export default Post;
