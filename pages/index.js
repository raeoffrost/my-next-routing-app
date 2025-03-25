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

const postsArr = [
  {
    id: 1,
    name: "Weather News",
    preview:
      "Suspendisse potenti. Donec blandit magna at mi porta lacinia. Sed eleifend magna dolor...",
    content:
      "Suspendisse potenti. Donec blandit magna at mi porta lacinia. Sed eleifend magna dolor, eget rhoncus sem porttitor a. In fringilla vitae velit nec viverra. Aliquam scelerisque tincidunt lacus eu vestibulum. Sed euismod sollicitudin lorem, sed elementum magna venenatis ac. Vestibulum nisl ante, iaculis ut pellentesque ac, auctor vitae sapien. Vestibulum vitae mauris convallis, scelerisque est at, tempor diam. Sed vel efficitur mauris, sit amet pellentesque tortor. Suspendisse dignissim diam quis varius volutpat. Mauris risus urna, lobortis efficitur tortor ut, vehicula lobortis eros. Nunc vitae magna vitae justo ultricies eleifend at in nibh. Donec dolor elit, consectetur a imperdiet nec, congue nec sapien. Curabitur auctor odio a mauris tincidunt, non lobortis diam dictum. Nullam lacus justo, tincidunt accumsan consectetur eget, mollis sit amet magna.",
  },
  {
    id: 2,
    name: "Political News",
    preview:
      "Nunc condimentum consequat sem sit amet sollicitudin. Nunc velit magna, mattis sed varius...",
    content:
      "Nunc condimentum consequat sem sit amet sollicitudin. Nunc velit magna, mattis sed varius eu, ultricies non libero. Integer pellentesque bibendum aliquam. Mauris id consectetur mauris. Etiam semper finibus velit, nec aliquam libero. Pellentesque sem nunc, commodo sit amet tortor sed, efficitur ornare nisi. Donec eget lorem sit amet diam mollis congue et quis quam. Phasellus pretium nulla vel lacinia tincidunt. Mauris consequat erat a nunc accumsan dapibus nec at tellus. Maecenas pharetra, augue sagittis suscipit elementum, nibh neque euismod felis, ac lacinia sapien ligula vitae dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae purus dapibus risus hendrerit porta. Donec velit dolor, tempus id orci sit amet, egestas sodales erat. Nulla sit amet massa vel metus tempus varius eu id erat.",
  },
  {
    id: 3,
    name: "Culture News",
    preview:
      "Maecenas bibendum, augue sed commodo dictum, eros nibh ultricies urna, in maximus purus lacus sed...",
    content:
      "Maecenas bibendum, augue sed commodo dictum, eros nibh ultricies urna, in maximus purus lacus sed ex. Mauris sed nulla pellentesque, tincidunt quam ac, finibus sem. Curabitur facilisis dolor id nulla iaculis laoreet. Nulla ac ligula eu ante vestibulum semper in in libero. Duis vulputate turpis eget nisl vehicula, quis dapibus purus ullamcorper. Sed pharetra eros orci, non rhoncus libero pretium eu. Mauris tincidunt ipsum in ligula sollicitudin, ut feugiat dolor accumsan. ",
  },
  {
    id: 4,
    name: "World News",
    preview:
      "Donec vulputate faucibus libero non dictum. Phasellus blandit ligula a nibh tincidunt, in luctus lacus viverra...",
    content:
      "Donec vulputate faucibus libero non dictum. Phasellus blandit ligula a nibh tincidunt, in luctus lacus viverra. Pellentesque eget viverra enim. Morbi sollicitudin fermentum venenatis. Vivamus vestibulum felis tortor, et fringilla diam convallis porta. Vivamus vehicula justo at consequat gravida. Donec fermentum tellus sit amet nisl imperdiet, vulputate aliquet dui maximus. Sed auctor magna pulvinar laoreet rutrum. Integer malesuada sem a efficitur lacinia.",
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
            {postsArr.map((post) => (
              <Link key={post.id} href={`/posts/${post.id}`}>
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
